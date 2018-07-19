<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Report;
use PDF;
use Illuminate\Support\Facades\Input;

class ReportController extends Controller
{
    // public function index()
    // {
    //     $reports=Report::all();
    //     return view('report.index', compact('reports'));
    // }
    // public function pdf(){
    //     $reports = Report::all();
    //     $pdf = PDF::loadView('report.pdf',['reports'=>$reports]);
    //     return $pdf->stream('DailytimeReport.pdf');
    // }
    public function search(){
        $d = Input::get ( 'date' );
        $user = Report::where('date','LIKE', $d)->get();
        if(count($user) > 0)
            return view('report.search')->withDetails($user);
        else 
            return view ('report.search')->withMessage('No Details found. Try to search again !');
    }
    public function pdf(){
        $d = Input::get ( 'date' );
        $reports = Report::select('Name','date','In','out')->where('date','LIKE', $d)->get();
        $pdf = PDF::loadView('report.pdf', ['user'=>$reports]);
        return $pdf->stream('DailytimeReport.pdf');
    }

}
