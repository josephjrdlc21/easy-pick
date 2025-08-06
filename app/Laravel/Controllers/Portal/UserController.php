<?php

namespace App\Laravel\Controllers\Portal;

use App\Laravel\Requests\PageRequest;

class UserController extends Controller{
    protected $data;

    public function __construct(){
        parent::__construct();
        array_merge($this->data?:[], parent::get_data());
        $this->data['page_title'] .= " - Users";
        $this->per_page = env("DEFAULT_PER_PAGE", 10);
    }

    public function index(PageRequest $request){
        $this->data['page_title'] .= " - List";

        return inertia('users/users-index', ['data' => $this->data]);
    }
}