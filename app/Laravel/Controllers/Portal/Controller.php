<?php

namespace App\Laravel\Controllers\Portal;

use App\Laravel\Controllers\Controller as BaseController;

class Controller extends BaseController{
    protected $data;

    public function __construct(){
		self::set_loggedin_user();
    }

    public function get_data(){
        $this->data['page_title'] = env("APP_NAME");
        
		return $this->data;
	}

    public function set_loggedin_user(){
		// consider Portal namespace will use the User model define in auth.php config file 
		// 'web' is the declared guard for User Model in auth.php and as default guard
		// adjust the guard "web" if necessary to other base Controller file like System namespace etc. if you'll use different Authenticable Model
		if (auth('portal')->user()) {
        	$this->data['auth'] = auth('portal')->user();
		}
	}
}