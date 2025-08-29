<?php

namespace App\Laravel\Controllers\Merchant;

use App\Laravel\Models\Product;
use App\Laravel\Models\ProductAttachment;
use App\Laravel\Models\Category;

use App\Laravel\Requests\PageRequest;
use App\Laravel\Requests\Merchant\ProductRequest;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Laravel\Services\ImageUploader;

class ProductController extends Controller{
    protected $data;
    protected $per_page;

    public function __construct(){
        parent::__construct();
        array_merge($this->data?:[], parent::get_data());
        $this->data['page_title'] .= " - Products";
        $this->data['categories'] = Category::pluck('name', 'id')->toArray();
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request){
        $this->data['page_title'] .= " - List";

        $this->data['keyword'] = Str::lower($request->get('keyword'));
        $this->data['selected_category'] = Str::lower($request->get('category'));

        $first_record = Product::oldest()->first();
        $start_date = $first_record ? $request->get('start_date', $first_record->created_at->format("Y-m-d")) : $request->get('start_date', now()->startOfMonth());

        $this->data['start_date'] = Carbon::parse($start_date)->format("Y-m-d");
        $this->data['end_date'] = Carbon::parse($request->get('end_date', now()))->format("Y-m-d");

        $this->data['record'] = Product::with('category')->where(function ($query) {
            if (strlen($this->data['keyword']) > 0) {
                $query->whereRaw("LOWER(name) LIKE '%{$this->data['keyword']}%'")
                    ->orWhereRaw("LOWER(code) LIKE '%{$this->data['keyword']}%'");
            }
        })
        ->where(function ($query) {
            if ($this->data['selected_category'] > 0) {
                $query->where('category_id', $this->data['selected_category']);
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
        ->where('merchant_id', $this->data['auth']->id)
        ->latest()
        ->paginate($this->per_page);

        return inertia('products/products-index', ['data' => $this->data]);
    }

    public function create(PageRequest $request){
        $this->data['page_title'] .= " - Create Product";

        return inertia('products/products-create', ['data' => $this->data]);
    }

    public function store(ProductRequest $request){
        DB::beginTransaction();
        try {
            $product = new Product;
            $product->name = $request->input('name');
            $product->category_id = $request->input('category');
            $product->merchant_id = $this->data['auth']->id;
            $product->description = $request->input('description');
            $product->stock = $request->input('stock');
            $product->price = $request->input('price');
            $product->save();

            if ($request->hasFile('image')) {
                foreach($request->file('image') as $image){
                    $product_attachment = new ProductAttachment;

                    $product_image = ImageUploader::upload($image, "uploads/products/{$product->id}");

                    $product_attachment->product_id = $product->id;
                    $product_attachment->path = $product_image['path'];
                    $product_attachment->directory = $product_image['directory'];
                    $product_attachment->filename = $product_image['filename'];
                    $product_attachment->source = $product_image['source'];
                    $product_attachment->file_type = $product_image['type'];
                    $product_attachment->document_type = "image_product";
                    $product_attachment->save();
                }
            }
           
            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Product created successfully. Code generated {$product->code}.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('merchant.products.index');
    }

    public function edit(PageRequest $request, $id = null){
        $this->data['page_title'] .= " - Edit Product";

        $this->data['product'] = Product::find($id);

        if(!$this->data['product']){
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record record not found.");
            return redirect()->back();
        }

        return inertia('products/products-edit', ['data' => $this->data]);
    }

    public function update(ProductRequest $request, $id=null){
        $product = Product::find($id);

        if(!$product){
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record record not found.");
            return redirect()->back();
        }

        DB::beginTransaction();
        try {
            $product->description = $request->input('description');
            $product->stock = $request->input('stock');
            $product->price = $request->input('price');
            $product->save();

            if ($request->hasFile('image')) {
                $remove_old = ProductAttachment::where('product_id', $product->id);
                $remove_old->delete();

                foreach($request->file('image') as $image){
                    $product_attachment = new ProductAttachment;

                    $product_image = ImageUploader::upload($image, "uploads/products/{$product->id}");

                    $product_attachment->product_id = $product->id;
                    $product_attachment->path = $product_image['path'];
                    $product_attachment->directory = $product_image['directory'];
                    $product_attachment->filename = $product_image['filename'];
                    $product_attachment->source = $product_image['source'];
                    $product_attachment->file_type = $product_image['type'];
                    $product_attachment->document_type = "image_product";
                    $product_attachment->save();
                }
            }
           
            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Product details has been updated successfully.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('merchant.products.index');
    }

    public function show(PageRequest $request, $id = null){
        $this->data['page_title'] .= " - Product Details";

        $this->data['product'] = Product::with(['attachment','category'])->find($id);

        if(!$this->data['product']){
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record record not found.");
            return redirect()->back();
        }

        return inertia('products/products-show', ['data' => $this->data]);
    }

    public function destroy(PageRequest $request, $id = null){
        $product = Product::find($id);

        if (!$product) {
            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Record not found.");
            return redirect()->route('merchant.products.index');
        }

        DB::beginTransaction();
        try {
            $product->delete();

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Product deleted successfully.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('merchant.products.index');
    }
}