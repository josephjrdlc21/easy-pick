<?php

namespace App\Laravel\Controllers\Portal;

use App\Laravel\Requests\PageRequest;

class AuthController extends Controller{
    protected $data;

    public function __construct(){

    }

    public function index(PageRequest $request){
        
        return inertia('auth/Login');
    }
}