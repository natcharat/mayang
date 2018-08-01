<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LeaveRequest extends FormRequest
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

            'detail' => 'required|min:3|max:10000',
            'start' => 'required|date',
            'stop' => 'required|date',
            'img'=>'mimes:png,jpeg,jpg',
            'file'=>'mimes:pdf,docx',
        ];
    }

    public function messages()
    {
        return [
            'detail.required' => 'กรุณาระบุรายละเอียด',
            'img.mimes' => 'แนะนำไฟล์ png jpeg jpg',
            'file.mimes' => 'แนะนำไฟล์ docx pdf',
            'start.required' => 'กรุณาระบุวันที่เริ่มลา',
            'stop.required' => 'กรุณาระบุวันที่สิ้นสุดการลา',
        ];
    }
}
