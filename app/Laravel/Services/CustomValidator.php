<?php

namespace App\Laravel\Services;

use App\Laravel\Models\User;

use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Validator;

use Propaganistas\LaravelPhone\PhoneNumber;
use Carbon\Carbon;
class CustomValidator extends Validator {

    /**
     * rule name: current_password
     *
     */
    public function validateCurrentPassword($attribute, $value, $parameters){
        $user = auth('web')->user();
        return Hash::check($value,$user->password) ? TRUE : FALSE;
    }

    /**
     * rule name: password_format
     *
     */
    public function validatePasswordFormat($attribute,$value,$parameters){
        return preg_match('/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+.<>])[A-Za-z\d!@#$%^&*()_+.<>]{6,20}$/', $value);

    }

    /**
     * rule name: username_format
     *
     */
    public function validateUsernameFormat($attribute,$value,$parameters){
        return preg_match(("/^(?=.*)[A-Za-z\d][a-z\d._+]{6,20}$/"), $value);
    }

    /**
     * rule name: unique_phone
     *
     */
    public function validateUniquePhone($attribute,$value,$parameters){
        // $contact_number = PhoneNumber::make($value,"PH")->formatE164();
        $contact_number = new PhoneNumber($value,"PH");
        $contact_number->formatE164();
        $is_unique = User::where('contact_number',$contact_number)->first();
        return $is_unique ? FALSE : TRUE;
    }

    /**
     * rule name: unique_email
     *
     */
    public function validateUniqueEmail($attribute, $value, $parameters)
    {
        $email = strtolower($value);
        $id = (is_array($parameters) and isset($parameters[0])) ? $parameters[0] : "0";
        $type = (is_array($parameters) and isset($parameters[1])) ? $parameters[1] : "user";

        switch (strtolower($type)) {
            case 'user':
                return  User::where('email', $email)
                    ->where('id', '<>', $id)
                    ->count() ? false : true;
                break;
            default:
                return  User::where('email', $email)
                    ->where('id', '<>', $id)
                    ->count() ? false : true;
        }
    }

    public function validateExpiry($attribute, $value, $parameters)
    {
        return Carbon::parse($value)->lessThan(now()->addMonths(3)) ? false : true;
    }
}