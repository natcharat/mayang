<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Time;
use Auth;


class TimeController extends Controller
{
    public function index(){

        return view('timerecord');
    }
    public function In(){ 
        $time = new Time;
        $time->name = Auth::user()->name;
        $time->time_in = date('h:i:sa');
        $time->time_off = date('23:59:00');
        $time->date = date('d-m-Y');
        $time->save();

        return redirect('timerecord');
    }
    public function off(){
        $name = Auth::user()->name;
        $off = Time::where('date', date('d-m-Y'))
                ->where('name', Auth::user()->name)
                ->update(['time_off' => date('h:i:sa')]);
        return redirect('timerecord');
    }
}
