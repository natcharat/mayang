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
        $time->name = 'ปรียานุช มูลถี';
        $time->time_in = date('h:i:sa');
        $time->time_off = date('23:59:00');
        $time->date = date('d-m-Y');
        // dd($time);
        $time->save();

        return redirect('timerecord');
    }
    public function off(){
        $off = Time::where('date',date('d-m-Y'))->update(['time_off' => date('h:i:sa')]);;
        // dd($off);
        return redirect('timerecord');
    }
}
