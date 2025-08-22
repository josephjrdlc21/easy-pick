<?php

namespace App\Laravel\Requests\Portal;

use App\Laravel\Requests\RequestManager;

class CouponRequest extends RequestManager
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
            'discount' => 'required',
            'coupon_value' => 'required|numeric|min:0.01',
            'usage' => 'required|integer|min:1',
            'expires_at' => 'required|expiry',
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'required' => "Field is required.",
            'expiry' => "Coupon must be valid for at least 3 months.",
        ];
    }
}