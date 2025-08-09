<?php

namespace App\Laravel\Controllers\Portal;

use App\Laravel\Requests\PageRequest;

class MainController extends Controller{
    protected $data;

    public function __construct(){
        parent::__construct();
        array_merge($this->data?:[], parent::get_data());
        $this->data['page_title'] .= " - Main";
    }

    public function index(PageRequest $request){
        $this->data['page_title'] .= " - Dashboard";

        return inertia('dashboard');
    }
}