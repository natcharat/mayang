<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NoticeRequest extends FormRequest
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

            'topic' => 'required|min:3|max:10000',
            'body' => 'required|min:3|max:10000',
            'seen'=>'required',
        ];
    } 

    public function messages()
    {
        return [
            'topic.required' => 'กรุณาระบุหัวข้อประกาศ',
            'body.required' => 'กรุณาระบุเนื้อหา',
            'seen.required' => 'กรุณาระบุบุคลลที่สามารถเห็นประกาศ',
        ];
    }
}
