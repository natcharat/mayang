<?php

namespace App\Http\Controllers;
use App\Leave;
use Illuminate\Http\Request;
use App\Http\Requests\LeaveRequest;
use Illuminate\Support\Facades\Auth;

class LeaveController extends Controller
{
	public function __construct()
    {
        $this->middleware('user');
    }

	public function index()
	{
		$leave=Leave::all();
		return view('request.index',compact('leave'));
	}

	public function create()
	{	
		$name = Auth::user()->name;
		$position = Auth::user()->position;


		return view('leave.leavecreate',compact('name','position'));
	}


	public function store(LeaveRequest $request)
	{
		$leave = new Leave();
		$leave->name = $request->get('name');
		$leave->position = $request->get('position');
		$leave->start = $request->get('start');
		$leave->stop = $request->get('stop'); 
		$leave->detail = $request->get('detail');
		$leave->type = $request->get('type');  
		$leave->status = "wait"; 

		if ($request->hasFile('img')){
			$image_filename = $request->file('img')->getClientOriginalName();
			$image_name = date("Ymd-His-") . $image_filename;
			$public_path = 'img/leave/';
			$destination = base_path() . "/public/" . $public_path;
			$request->file('img')->move($destination, $image_name);
			$leave->img = $public_path . $image_name;
		}
		if ($request->hasFile('file')){
			$image_filename = $request->file('file')->getClientOriginalName();
			$image_name = date("Ymd-His-") . $image_filename;
			$public_path = 'file/leave/';
			$destination = base_path() . "/public/" . $public_path;
			$request->file('file')->move($destination, $image_name);
			$leave->file = $public_path . $image_name;
		}

		$leave->save();
		return redirect('/myRequest');
	}

	public function crud(){
		$name = Auth::user()->name;
    	$leaves = Leave::where('name',$name)->orderBy('created_at', 'desc')->get();
        if(empty($leaves))
            abort(404);
        return view('request.crud',compact('leaves','name'));

    }

    public function show($id){
    	$request = Leave::find($id);
    	return view('request.show', compact('request'));
    }





	public function edit($id)
	{
		$leave = Car::find($id);
		return view('car.caredit',compact('car','id'));
	}

	public function update(Request $request, $id)
	{
		$car= Car::find($id);
		$car->carcompany = $request->get('carcompany');
		$car->model = $request->get('model');
		$car->price = $request->get('price');        
		$car->save();
		return redirect('car')->with('success', 'Car has been successfully update');
	}

	public function destroy($id)
    {
        $car = Leave::find($id);
        $car->delete();
        return redirect('Leave')->with('success','Car has been  deleted');
    }

}
