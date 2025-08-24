<?php

namespace App\Laravel\Controllers\Merchant;

use App\Laravel\Requests\PageRequest;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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
}