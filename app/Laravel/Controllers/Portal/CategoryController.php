<?php

namespace App\Laravel\Controllers\Portal;

use App\Laravel\Models\Category;

use App\Laravel\Requests\PageRequest;
use App\Laravel\Requests\Portal\CategoryRequest;

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

    public function create(PageRequest $request){
        $this->data['page_title'] .= " - Create Category";

        return inertia('categories/categories-create', ['data' => $this->data]);
    }

    public function store(CategoryRequest $request){
        DB::beginTransaction();
        try {
            $category = new Category;
            $category->name = $request->input('name');
            $category->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Category created successfully.");
        } catch (\Exception $e) {
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('portal.categories.index');
    }

    public function edit(PageRequest $request, $id = null){
        $this->data['page_title'] .= " - Edit Category";

        $this->data['category'] = Category::find($id);

        if(!$this->data['category']){
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record record not found.");
            return redirect()->back();
        }

        return inertia('categories/categories-edit', ['data' => $this->data]);
    }

    public function update(CategoryRequest $request, $id = null){
        $category = Category::find($id);

        if (!$category) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->route('portal.categories.index');
        }

        DB::beginTransaction();
        try {
            $category->name = $request->input('name');
            $category->save();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Category updated successfully.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('portal.categories.index');
    }

    public function destroy(PageRequest $request, $id = null){
        $category = Category::find($id);

        if (!$category) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->route('portal.categories.index');
        }

        DB::beginTransaction();
        try {
            $category->delete();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Category deleted successfully.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('portal.categories.index');
    }
}