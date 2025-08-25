<?php

namespace App\Laravel\Controllers\Merchant;

use App\Laravel\Models\Merchant;
use App\Laravel\Models\MerchantAttachment;

use App\Laravel\Requests\PageRequest;
use App\Laravel\Requests\Merchant\AuthRequest;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Laravel\Services\FileUploader;
use App\Laravel\Services\ImageUploader;

class AuthController extends Controller{
    protected $data;
    protected $guard;

    public function __construct(){
        parent::__construct();
        array_merge($this->data?:[], parent::get_data());
        $this->data['page_title'] .= " - Main";
        $this->guard = "merchant";
    }

    public function register(PageRequest $request){
        $this->data['page_title'] .= " - Register";

        return inertia('auth/auth-register', ['data' => $this->data]);
    }

    public function store(AuthRequest $request){
        DB::beginTransaction();
        try {
            $password = Str::random(8);

            $merchant = new Merchant;
            $merchant->name = $request->input('merchant_name');
            $merchant->business_name = $request->input('business_name');
            $merchant->business_line = $request->input('business_line');
            $merchant->business_scope = $request->input('business_scope');
            $merchant->email = Str::lower($request->input('email'));
            $merchant->mobile_number = $request->input('contact_number');
            $merchant->telephone_number = $request->input('tel_number');
            $merchant->address = $request->input('address');
            $merchant->password = bcrypt($password);
            
            if($merchant->save()){
                if ($request->hasFile('business_logo')) {
                    $business_logo = ImageUploader::upload($request->file('business_logo'), "uploads/merchants/{$merchant->id}/business-logo");

                    $merchant->path = $business_logo['path'];
                    $merchant->directory = $business_logo['directory'];
                    $merchant->filename = $business_logo['filename'];
                    $merchant->source = $business_logo['source'];
                    $merchant->save();
                }

                if ($request->hasFile('valid_id')) {
                    $merchant_attachment = new MerchantAttachment;

                    $valid_id = ImageUploader::upload($request->file('valid_id'), "uploads/merchants/{$merchant->id}/valid-id");

                    $merchant_attachment->merchant_id = $merchant->id;
                    $merchant_attachment->path = $valid_id['path'];
                    $merchant_attachment->directory = $valid_id['directory'];
                    $merchant_attachment->filename = $valid_id['filename'];
                    $merchant_attachment->source = $valid_id['source'];
                    $merchant_attachment->file_type = $valid_id['type'];
                    $merchant_attachment->document_type = "valid_id";
                    $merchant_attachment->save();
                }

                if ($request->hasFile('business_permit')) {
                    $merchant_attachment = new MerchantAttachment;

                    $business_permit = FileUploader::upload($request->file('business_permit'), "uploads/merchants/{$merchant->id}/business-permit");

                    $merchant_attachment->merchant_id = $merchant->id;
                    $merchant_attachment->path = $business_permit['path'];
                    $merchant_attachment->directory = $business_permit['directory'];
                    $merchant_attachment->filename = $business_permit['filename'];
                    $merchant_attachment->source = $business_permit['source'];
                    $merchant_attachment->file_type = $business_permit['type'];
                    $merchant_attachment->document_type = "business_permit";
                    $merchant_attachment->save();
                }

                if ($request->hasFile('supporting_documents')) {
                    foreach($request->file('supporting_documents') as $supporting_doc){
                        $merchant_attachment = new MerchantAttachment;

                        $business_permit = FileUploader::upload($supporting_doc, "uploads/merchants/{$merchant->id}/supporting-documents");

                        $merchant_attachment->merchant_id = $merchant->id;
                        $merchant_attachment->path = $business_permit['path'];
                        $merchant_attachment->directory = $business_permit['directory'];
                        $merchant_attachment->filename = $business_permit['filename'];
                        $merchant_attachment->source = $business_permit['source'];
                        $merchant_attachment->file_type = $business_permit['type'];
                        $merchant_attachment->document_type = "supporting_document";
                        $merchant_attachment->save();
                    }
                }
            }

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Application has been successfully submitted. Please wait for your application approval.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('merchant.auth.login');
    }

    public function login(PageRequest $request){
        $this->data['page_title'] .= " - Login";

        return inertia('auth/auth-login', ['data' => $this->data]);
    }
}