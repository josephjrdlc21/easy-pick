<?php

namespace App\Laravel\Controllers\Portal;

use App\Laravel\Models\Merchant;

use App\Laravel\Requests\PageRequest;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class MerchantController extends Controller{
    protected $data;
    protected $per_page;

    public function __construct(){
        parent::__construct();
        array_merge($this->data?:[], parent::get_data());
        $this->data['page_title'] .= " - Merchants";
        $this->data['statuses'] = ['' => "Select Status", 'pending' => "Pending", 'approved' => "Approved", 'rejected' => "Rejected"];
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request){
        $this->data['page_title'] .= " - List";

        $this->data['keyword'] = Str::lower($request->get('keyword'));
        $this->data['selected_status'] = $request->get('status');

        $first_record = Merchant::oldest()->first();
        $start_date = $first_record ? $request->get('start_date', $first_record->created_at->format("Y-m-d")) : $request->get('start_date', now()->startOfMonth());

        $this->data['start_date'] = Carbon::parse($start_date)->format("Y-m-d");
        $this->data['end_date'] = Carbon::parse($request->get('end_date', now()))->format("Y-m-d");

        $this->data['record'] = Merchant::where(function ($query) {
            if (strlen($this->data['keyword']) > 0) {
                $query->whereRaw("LOWER(business_name) LIKE '%{$this->data['keyword']}%'")
                    ->orWhereRaw("LOWER(name) LIKE '%{$this->data['keyword']}%'")
                    ->orWhereRaw("LOWER(business_scope) LIKE '%{$this->data['keyword']}%'")
                    ->orWhereRaw("LOWER(business_line) LIKE '%{$this->data['keyword']}%'");
            }
        })
        ->where(function ($query) {
            if (strlen($this->data['selected_status']) > 0) {
                $query->where('status', $this->data['selected_status']);
            }
        })
        ->where(function ($query) {
            $query->where(function ($q) {
                if (strlen($this->data['start_date']) > 0) {
                    $q->whereDate('created_at', '>=', Carbon::parse($this->data['start_date'])->format("Y-m-d"));
                }
            })->where(function ($q) {
                if (strlen($this->data['end_date']) > 0) {
                    $q->whereDate('created_at', '<=', Carbon::parse($this->data['end_date'])->format("Y-m-d"));
                }
            });
        })
        ->latest()
        ->paginate($this->per_page);

        return inertia('merchants/merchants-index', ['data' => $this->data]);
    }

    public function show(PageRequest $request, $id = null){
        $this->data['page_title'] .= " - Merchant Details";

        $this->data['merchant'] = Merchant::with(['approver', 'attachment'])->find($id);

        if(!$this->data['merchant']){
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record record not found.");
            return redirect()->route('portal.merchants.index');
        }

        return inertia('merchants/merchants-show', ['data' => $this->data]);
    }

    public function remarks(PageRequest $request, $id = null){
        $merchant = Merchant::find($id);

        if(!$merchant){
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record record not found.");
            return redirect()->route('portal.merchants.index');
        }

        DB::beginTransaction();
        try {
            $merchant->status = $request->get('status');
            $merchant->approver_id = $this->data['auth']->id;
            $merchant->approve_at = Carbon::now();
            $merchant->remarks = $request->get('remarks');
            $merchant->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Merchant {$merchant->business_name} has been successfully {$merchant->status}.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('portal.merchants.index');
    }
}