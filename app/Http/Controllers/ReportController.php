<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Report;
use PDF;
use Illuminate\Support\Facades\Input;
use App\User;

class ReportController extends Controller
{
	public function __construct()
    {
        $this->middleware('admin');
    }

    public function report(){
        $user = User::all();
        $data = Report::orderBy('updated_at','asc')->get();
        return view('report', compact('data','user'));
    }

}
