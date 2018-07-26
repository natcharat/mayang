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
            'username' => 'required|min:3|max:100|unique:users,username',
            'password' => 'required|min:6',
            'name'=>'required',
            'position'=>'required',
            'tell'=>'required|numeric',
            'email'=>'required|email|unique:users,email',
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
            'tell.numeric' => 'เบอร์โทรศัพท์ต้องเป็นตัวเลขเท่านั้น',
            'email.required' => 'กรุณาระบุอีเมล',
            'email.unique' => 'อีเมลนี้ไม่สามารถใช้ได้',
            'username.unique' => 'ชื่อแอคเคาท์นี้ไม่สามารถใช้ได้',
            'password.min' => 'รหัสผ่านต้องมีอย่างน้อย 6 หลัก',
        ];
    }
}
