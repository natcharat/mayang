<?php

namespace App\Http\Controllers;

use App\Notice;
use App\Notice_list;
use App\User;
use Session;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    public function index(){
        $notices = Notice::all();
        foreach ($notices as $key => $notice) {

        }
        if(empty($notices))
            abort(404);
        return view('notice.crud' , compact('notices'));
    }

    public function create(){
        $user_lists = User::all();
        $notice_list = Notice_list::all();
        return view('notice.create',compact('user_lists'));
    }

    public function store(Request $request){
        $notice = new Notice($request->all());
        $notice->save();

        $keep = new Notice;
        $keep = Notice::orderBy('id', 'desc')->first();

        $notice_list = new Notice_list;
        $notice_list->user_id = $request->seen;
        $notice_list->notice_id = $keep->id;

        for($i = 0; $i < sizeof($notice_list->user_id,1); $i++){
            $notice_keep = new Notice_list;
            $notice_keep->user_id = $notice_list->user_id[$i];
            $notice_keep->notice_id = $notice_list->notice_id;
            $notice_keep->save();
        }

        return redirect()->route('notice.crud');
    }

    public function edit($id){
        $user_lists = User::all();
        $notice = Notice::find($id);
        $notice_lists = Notice_list::select('user_id')->where('notice_id',$id)->get();
        foreach ($notice_lists as $key => $notice_list) {
            $keep_user[$key] = $notice_list->user_id;
        }
        return view('notice.edit', compact('notice','user_lists','keep_user'));
    }

    public function show($id){
        $notice = Notice::find($id);
        return view('notice.show', compact('notice'));
    }

    public function delete($id){
       $notice = Notice::where('id',$id)->first();

       if ($notice != null) {
        $notice->delete();
        return redirect()->route('notice.crud')->with(['msg'=> 'Successfully deleted!!']);
    }

    return redirect()->route('notice.crud')->with(['msg'=> 'Wrong ID!!']); 
}

public function update($id, Request $request){

    $this->validate($request, [
        'topic' => 'required',
        'body' => 'required',
        'seen' => 'required',
    ]);

    $notice = Notice::find($id);
    $notice->topic = $request->topic;
    $notice->body = $request->body;

    $notice->update();

    $keep_notice_list = Notice_list::where('notice_id',$id)->get()->each->delete();

    $notice_list = new Notice_list;
    $notice_list->user_id = $request->seen;
    $notice_list->notice_id = $id;

    for($i = 0; $i < sizeof($notice_list->user_id,1); $i++){
        $notice_keep = new Notice_list;
        $notice_keep->user_id = $notice_list->user_id[$i];
        $notice_keep->notice_id = $notice_list->notice_id;
        $notice_keep->save();
    }

    Session::flash('success_msg', 'Article updated successfully!');

    return redirect()->route('notice.crud');
}
}