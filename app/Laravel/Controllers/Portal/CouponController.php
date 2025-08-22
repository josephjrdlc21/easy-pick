<?php

namespace App\Laravel\Controllers\Portal;

use App\Laravel\Models\Coupon;

use App\Laravel\Requests\PageRequest;
use App\Laravel\Requests\Portal\CouponRequest;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class CouponController extends Controller{
    protected $data;
    protected $per_page;

    public function __construct(){
        parent::__construct();
        array_merge($this->data?:[], parent::get_data());
        $this->data['page_title'] .= " - Coupons";
        $this->data['discount_types'] = ['' => "Select Discout Type", 'percent' => "Percent", 'fixed' => "Fixed"];
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request){
        $this->data['page_title'] .= " - List";

        $this->data['keyword'] = Str::lower($request->get('keyword'));
        $this->data['selected_discount'] = $request->get('discount');

        $first_record = Coupon::oldest()->first();
        $start_date = $first_record ? $request->get('start_date', $first_record->created_at->format("Y-m-d")) : $request->get('start_date', now()->startOfMonth());

        $this->data['start_date'] = Carbon::parse($start_date)->format("Y-m-d");
        $this->data['end_date'] = Carbon::parse($request->get('end_date', now()))->format("Y-m-d");

        $this->data['record'] = Coupon::where(function ($query) {
            if (strlen($this->data['keyword']) > 0) {
                $query->whereRaw("LOWER(code) LIKE '%{$this->data['keyword']}%'");
            }
        })
        ->where(function ($query) {
            if (strlen($this->data['selected_discount']) > 0) {
                $query->where('discount_type', $this->data['selected_discount']);
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

        return inertia('coupons/coupons-index', ['data' => $this->data]);
    }

    public function create(PageRequest $request){
        $this->data['page_title'] .= " - Create Coupon";

        return inertia('coupons/coupons-create', ['data' => $this->data]);
    }

    public function store(CouponRequest $request){
        DB::beginTransaction();
        try {
            $coupon = new Coupon;
            $coupon->code = strtoupper('COUP-' . Str::random(5) . '-' . rand(1000, 9999));
            $coupon->discount_type = $request->input('discount');
            $coupon->value = $request->input('coupon_value');
            $coupon->usage_limit = $request->input('usage');
            $coupon->expires_at = Carbon::parse($request->input('expires_at'));
            $coupon->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Coupon created successfully. Code generated {$coupon->code}.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('portal.coupons.index');
    }

    public function edit(PageRequest $request, $id = null){
        $this->data['page_title'] .= " - Edit Coupon";

        $this->data['coupon'] = Coupon::find($id);

        if (!$this->data['coupon']) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Coupon not found.");
            return redirect()->route('portal.coupons.index');
        }

        return inertia('coupons/coupons-edit', ['data' => $this->data]);
    }

    public function update(CouponRequest $request, $id = null){
        $coupon = Coupon::find($request->id);

        if (!$coupon) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Coupon not found.");
            return redirect()->route('portal.coupons.index');
        }

        DB::beginTransaction();
        try {
            $coupon->discount_type = $request->input('discount');
            $coupon->value = $request->input('coupon_value');
            $coupon->usage_limit = $request->input('usage');
            $coupon->expires_at = Carbon::parse($request->input('expires_at'));
            $coupon->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Coupon created successfully. Code generated {$coupon->code}.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('portal.coupons.index');
    }

    public function destroy(PageRequest $request, $id = null){
        $coupon = Coupon::find($id);

        if (!$coupon) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Coupon not found.");
            return redirect()->route('portal.coupons.index');
        }

        DB::beginTransaction();
        try {
            $coupon->delete();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Coupon deleted successfully.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('portal.coupons.index');
    }
}