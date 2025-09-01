<?php

namespace App\Laravel\Controllers\Web;

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
        $this->guard = "web";
    }

    public function login(PageRequest $request){
        $this->data['page_title'] .= " - Login";

        return inertia('auth/auth-login', ['data' => $this->data]);
    }

    public function authenticate(PageRequest $request){
        $email = Str::lower($request->input('email'));
        $password = $request->input('password');

        if(auth($this->guard)->attempt(['email' => $email,'password' => $password])){
			$account = auth($this->guard)->user();

            session()->flash('notification-status',"success");
			session()->flash('notification-msg',"Welcome {$account->name}!");
			return redirect()->route('web.index');
        }

        session()->flash('notification-status', "failed");
		session()->flash('notification-msg', "Invalid account credentials.");
		return redirect()->back();
    }

    public function logout(PageRequest $request){
		auth($this->guard)->logout();
		
		session()->flash('notification-status', "success");
		session()->flash('notification-msg', "Logged out successfully.");
		return redirect()->route('web.auth.login');
	}
}