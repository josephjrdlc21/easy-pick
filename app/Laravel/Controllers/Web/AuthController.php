<?php

namespace App\Laravel\Controllers\Web;

use App\Laravel\Models\Customer;
use App\Laravel\Models\CustomerVerify;

use App\Laravel\Requests\PageRequest;
use App\Laravel\Requests\Web\AuthRequest;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Laravel\Services\Helper;
use App\Laravel\Events\CustomerVerifyEvent;

class AuthController extends Controller{
    protected $data;
    protected $guard;

    public function __construct(){
        parent::__construct();
        array_merge($this->data?:[], parent::get_data());
        $this->data['page_title'] .= " - Main";
        $this->guard = "web";
    }

    public function register(PageRequest $request){
        $this->data['page_title'] .= " - Register";

        return inertia('auth/auth-register', ['data' => $this->data]);
    }

    public function store(AuthRequest $request){
        DB::beginTransaction();
        try {
            $customer = new Customer;
            $customer->name = $request->input('name');
            $customer->email = Str::lower($request->input('email'));
            $customer->mobile_number = Helper::format_phone($request->input('contact_number'));
            $customer->password = bcrypt($request->input('password'));
            $customer->save();

            $customer_verify = new CustomerVerify;
            $customer_verify->customer_id = $customer->id;
            $customer_verify->token = Str::random(16);
            $customer_verify->expires_at = Carbon::now()->addMinutes(30);
            $customer_verify->save();

            if(env('MAIL_SERVICE', false)){
                event(new CustomerVerifyEvent($customer, $customer_verify->token));
            }

            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Please check your email for verification.");
        }catch (\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
            return redirect()->back();
        }

        return redirect()->route('web.auth.login');
    }

    public function verify(PageRequest $request, $token = null){
        $customer_verify = CustomerVerify::where('token', $token)->first();

        if(!$customer_verify){
            session()->flash('notification-status', "warning");
            session()->flash('notification-msg', "Account verification was unsuccessful.");
            return redirect()->route('web.auth.login');
        }

        DB::beginTransaction();
        try{
            $customer = Customer::where('id', $customer_verify->customer_id)->first();

            if (Carbon::parse($customer_verify->expires_at)->lessThan(Carbon::now())) {
                $customer->delete();
                $customer_verify->delete();

                session()->flash('notification-status', "warning");
                session()->flash('notification-msg', "Account verification has expired.");
                return redirect()->route('web.auth.register');
            }

            $customer->email_verified_at = Carbon::now();
            if($customer->save()){
                $customer_verify->delete();
            }
            
            DB::commit();

            session()->flash('notification-status', "success");
            session()->flash('notification-msg', "Account has been verified successfully.");
        }catch(\Exception $e){
            DB::rollBack();

            session()->flash('notification-status', "failed");
            session()->flash('notification-msg', "Server Error: Code #{$e->getLine()}");
        }

        return redirect()->route('web.auth.login');
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

            if(!$account->email_verified_at){
				auth($this->guard)->logout();

				session()->flash('notification-status',"info");
				session()->flash('notification-msg', "Account has not been verified.");
				return redirect()->route('web.auth.login');
			}

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