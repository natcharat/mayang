<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Time;
use Auth;
use App\Ip;


class TimeController extends Controller
{
    public function __construct()
    {
        $this->middleware('user');
    }
    public function index(){
        
        $time = Time::where('name', Auth::user()->name)
        ->where('date',date('d-m-Y'))->first();
        $ip = Ip::orderBy('updated_at', 'desc')->first();

        if ($ip == null) {
            $ip = new Ip;
            $ip->ip = 'none';
        } else {
            $ip = decrypt($ip->ip);
        }
        
        return view('timerecord', compact('time', 'ip'));
    }
    public function In(){ 
        $time = new Time;
        $time->name = Auth::user()->name;
        $time->time_in = date('h:i:sa');
        $time->time_off = date('23:59:00');
        $time->date = date('d-m-Y');
        $time->status = 'in';
        $time->save();

        return redirect('timerecord');
    }
    public function off(){
        $name = Auth::user()->name;
        $off = Time::where('date', date('d-m-Y'))
        ->where('name', Auth::user()->name)
        ->update(['time_off' => date('h:i:sa'), 'status' => 'off']);

        
        return redirect('timerecord');
    }
}
