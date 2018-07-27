<?php

namespace App\Http\Controllers;
use App\Ip;
use Crypt;
use Illuminate\Http\Request;
use App\Http\Requests\IpRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Encryption\DecryptException;

class IpController extends Controller
{
    public function index(){

        $ip = Ip::orderBy('updated_at', 'desc')->first();

        if ($ip == null) {
            $ip = new Ip;
            $ip->ip = 'none';
        } else {
            $ip->ip = decrypt($ip->ip);
        }
        
        return view('ip.manage',compact('ip'));
    }

    public function store(IpRequest $request){

        $ip = Ip::orderBy('updated_at', 'desc')->first();
        
        if ($ip == null) {
            $ip = new Ip;
            $ip->ip = encrypt($request->ip);
            $ip->save();
        } else {
            $ip->ip = encrypt($request->ip);
            $ip->update();
        }

        return redirect()->route('ip.manage');
    }
}
