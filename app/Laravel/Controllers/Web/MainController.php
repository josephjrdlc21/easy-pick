<?php

namespace App\Laravel\Controllers\Web;

use App\Laravel\Requests\PageRequest;

class MainController extends Controller{
    protected $data;

    public function __construct(){
        parent::__construct();
        array_merge($this->data?:[], parent::get_data());
        $this->data['page_title'] .= " - Main";
    }

    public function index(PageRequest $request){
        return inertia('index', ['data' => $this->data]);
    }

    public function home(PageRequest $request){
        return inertia('pages/pages-home', ['data' => $this->data]);
    }
}