<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;
use App\Time;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    public function redirectTo()
    {
        $time = Time::where('date', date('d-m-Y'))
                    ->where('name', Auth::user()->name);

        if (Auth::user()->type == 1) {
            return '/request';
        } else if (Auth::user()->type == 0) {
            if ($time == null) {  
                return '/timerecord_in';
            } else {
                return '/timerecord_off';
            }
        } else {
            return '/';
        }
    }

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    // protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
