<?php

namespace App\Http\Controllers;
use App\User;
use Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        if(empty($users))
            abort(404);
        return view('user.crud',compact('users'));
    }

    public function create(){
        return view('user.create');
    }

    public function store(Request $request){
        $user = new User;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->name = $request->name;
        $user->position = $request->position;
        $user->email = $request->email;
        $user->tell = $request->tell;
        $user->type = $request->type;
        $user->save();
        return redirect()->route('user.crud');
    }

    public function edit($id){
        $user = User::find($id);
        return view('user.edit',compact('user'));
    }

    public function update($id, Request $request){

        $this->validate($request, [
            'name' => 'required',
            'username' => 'required',
            'position' => 'required',
            'tell' => 'required',
            'email' => 'required',
        ]);

        $user = User::find($id);
        $user->username = $request->username;
        $user->name = $request->name;
        $user->position = $request->position;
        $user->email = $request->email;
        $user->tell = $request->tell;

        Session::flash('success_msg', 'Article updated successfully!');

        $user->update();

        return redirect()->route('user.crud');
    }

    public function delete($id){
       $user = User::where('id',$id)->first();

       if($user != null) {
        $user->delete();
        return redirect()->route('user.crud')->with(['msg'=> 'Successfully deleted!!']);
    }

    return redirect()->route('user.crud')->with(['msg'=> 'Wrong ID!!']); 
    }

    public function show($id){
        $user = User::find($id);
        return view('user.show',compact('user'));
    }
}