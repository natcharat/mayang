<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Box;
use App\Http\Controllers\Controller;

class BoxController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }
    public function index(){
        $requests = Box::where('status', 'Like', 'wait')->get();
        return view('request.index',compact('requests'));
    }
    public function detail($id){
        $detail = Box::all()->where('id', 'Like', $id)->first();
        return view('request.detail', compact('detail'));
    }
    public function approve($id){
        $pass = Box::find($id);
        $pass->status = 'approve';
        $pass->save();
        return redirect('request');
    }

    public function disapprove($id){
        $pass = Box::find($id);
        $pass->status = 'disapprove';
        $pass->save();
        return redirect('request');
    }
}
