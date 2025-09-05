<?php

namespace App\Laravel\Requests\Web;

use App\Laravel\Requests\RequestManager;

class AuthRequest extends RequestManager
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->id ?? 0;

        $rules = [
            'name' => "required",
            'email' => "required|email:rfc,dns|unique_email:{$id},customer",
            'contact_number' => "required|phone:PH|unique_phone:{$id},customer",
            'password' => "required|confirmed|password_format",
            'password_confirmation' => "required",
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'required' => "Field is required.",
            'email.email' => "Invalid email address.",
            'email.unique_email' => "Email address is already used.",
            'contact_number.phone' => "Invalid PH phone number.",
            'contact_number.unique_phone' => "Phone number already used.",
        ];
    }
}