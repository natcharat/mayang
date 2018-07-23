<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notice;

class NoticeController extends Controller
{
    public function index()
	{
		
		return view('notice.notice');
	}

}
