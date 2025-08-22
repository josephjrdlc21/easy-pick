<?php

namespace App\Laravel\Controllers\Portal;

use App\Laravel\Models\Category;

use App\Laravel\Requests\PageRequest;
//use App\Laravel\Requests\Portal\CategoryRequest;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class CategoryController extends Controller{
    protected $data;
    protected $per_page;

    public function __construct(){
        parent::__construct();
        array_merge($this->data?:[], parent::get_data());
        $this->data['page_title'] .= " - Categories";
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request){
        $this->data['page_title'] .= " - List";

        $this->data['keyword'] = Str::lower($request->get('keyword'));

        $first_record = Category::oldest()->first();
        $start_date = $first_record ? $request->get('start_date', $first_record->created_at->format("Y-m-d")) : $request->get('start_date', now()->startOfMonth());

        $this->data['start_date'] = Carbon::parse($start_date)->format("Y-m-d");
        $this->data['end_date'] = Carbon::parse($request->get('end_date', now()))->format("Y-m-d");

        $this->data['record'] = Category::where(function ($query) {
            if (strlen($this->data['keyword']) > 0) {
                $query->whereRaw("LOWER(name) LIKE '%{$this->data['keyword']}%'");
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

        return inertia('categories/categories-index', ['data' => $this->data]);
    }
}