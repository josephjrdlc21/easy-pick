<?php

namespace App\Laravel\Controllers\Web;

use App\Laravel\Requests\PageRequest;

class MainController extends Controller{
    protected $data;

    public function __construct(){

    }

    public function index(PageRequest $request){
        return inertia('Index');
    }
}