<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Report;
use PDF;
use Illuminate\Support\Facades\Input;

class ReportController extends Controller
{
    public function search(){
        $date = Input::get ( 'date' );
        if ($date == null) {
            $reports = Report::all();
            $date = 0;
        }
        else{
            $reports = Report::where('date','LIKE', $date)->get(); 
            $date = str_replace('/','_',$date);  
            // dd($date);
        }

        // dd($date);
        return view('report.search', compact('reports', 'date'));
    }
    public function pdf($d){
        // dd($d);
        $date = Input::get ( 'date' );
        if($d == 0){
            $reports = Report::all();
        }
        else{
            $date = str_replace('_','/',$d); 
            // dd($date);
            $reports = Report::where('date','LIKE', $date)->get();
        }


        $pdf = PDF::loadView('report.pdf', ['reports'=>$reports]);
        return $pdf->stream('DailytimeReport.pdf');
    }

}
