<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        // dd(Auth::check());
        if (Auth::check() && Auth::user()->type == 1){
            return $next($request);
            // return redirect('/home');
        } else if (Auth::check() && Auth::user()->type == 0){
            return $next($request);
            // return redirect('/home');
        }
        

        return $next($request);
    }
}
