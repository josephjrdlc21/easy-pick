<?php

namespace App\Laravel\Requests\Merchant;

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
            'merchant_name' => "required",
            'business_name' => "required",
            'business_line' => "required",
            'business_scope' => "required",
            'email' => "required|email:rfc,dns|unique_email:{$id},merchant",
            'contact_number' => "required",
            'tel_number' => "required",
            'address' => "required",
            'business_logo' => "required|mimes:png,jpg,jpeg|min:1|max:2048",
            'valid_id' => "required|mimes:png,jpg,jpeg|min:1|max:2048",
            'business_permit' => "required|mimes:pdf|min:1|max:2048",
            'supporting_documents' => 'nullable|array',
            'supporting_documents.*' => 'file|mimes:pdf|max:2048',
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'required' => "Field is required.",
            'email.email' => "Invalid email address.",
            'email.unique_email' => "Email address is already used.",
            'image.min' => "The file must be at least 1 KB.",
            'image.max' => "The file may not be greater than 2 MB.",
        ];
    }
}