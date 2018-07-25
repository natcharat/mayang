<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
        return [

            'type' => 'required',
            'username' => 'required|min:3|max:10000',
            'password' => 'required|min:4',
            'name'=>'required',
            'position'=>'required',
            'tell'=>'required',
            'email'=>'required',
        ];
    } 

    public function messages()
    {
        return [
            'type.required' => 'กรุณาระบุประเภทของแอคเคาท์',
            'username.required' => 'กรุณาระบุชื่อผู้ใช้',
            'password.required' => 'กรุณาระบุรหัสผ่าน',
            'name.required' => 'กรุณาระบุชื่อ-นามสกุล',
            'position.required' => 'กรุณาระบุตำแหน่ง',
            'tell.required' => 'กรุณาระบุเบอร์โทร',
            'email.required' => 'กรุณาระบุอีเมล',
        ];
    }
}
