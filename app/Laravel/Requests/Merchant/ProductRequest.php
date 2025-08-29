<?php

namespace App\Laravel\Requests\Merchant;

use App\Laravel\Requests\RequestManager;

class ProductRequest extends RequestManager
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
            'name' => $id > 0 ? 'nullable' : 'required',
            'category' => $id > 0 ? 'nullable' : 'required',
            'description' => "required",
            'price' => "required|numeric|min:0.01",
            'stock' => "required|integer|min:1",
        ];

        if ($id > 0) {
            $rules['image'] = 'nullable|array|size:4';
            $rules['image.*'] = 'mimes:png,jpg,jpeg|max:2048';
        } 
        else {
            $rules['image'] = 'required|array|size:4';
            $rules['image.*'] = 'mimes:png,jpg,jpeg|max:2048';
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'required' => "Field is required.",
            'image.min' => "The file must be at least 1 KB.",
            'image.max' => "The file may not be greater than 2 MB.",
        ];
    }
}