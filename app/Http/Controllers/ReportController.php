<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Report;
use PDF;
use Illuminate\Support\Facades\Input;

class ReportController extends Controller
{
	public function __construct()
    {
        $this->middleware('admin');
    }

    public function report(){
        $data = Report::all();
        return view('report', compact('data'));
    }

}
