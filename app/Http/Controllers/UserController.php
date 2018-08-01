<?php

namespace App\Http\Controllers;
use App\User;
use Session;
use Auth;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }
    
    public function index(){
        $users = User::where('type',0)->get();
        if(empty($users))
            abort(404);
        $admins = User::where('type',1)->get();
        if(empty($admins))
            abort(404);

        if (Auth::user()->type == 1) {
            return view('user.normalAdmin_crud',compact('users', 'admins'));
        } else if (Auth::user()->type == 2) {
            return view('user.superAdmin_crud',compact('users', 'admins'));
        }
    }

    public function create(){
        return view('user.create');
    }

    public function store(UserRequest $request){
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

    public function update(Request $request,$id){

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
        return redirect()->route('user.crud')->with(['msg'=> 'ลบผู้ใช้สำเร็จ']);
    }

    return redirect()->route('user.crud')->with(['msg'=> 'Wrong ID!!']); 
    }

    public function show($id){
        $user = User::find($id);
        return view('user.show',compact('user'));
    }
}
