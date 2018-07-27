@extends('layouts.admin')

@section('content')


<div class="container" style="border-style: solid;
    background-color: orange;
    border-radius: 30px; border-color: black">
    <h1 align="center">คำขอลางาน</h1><br>
    
</div>
<hr>
@foreach($requests as $r)
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" style="background-color: white">
                <a href="{{ route('request.detail', $r->id) }}">
                    <div class="card-body">
                       <font size="5.5" color="orange">✪</font> 
                        <font color="orange" size="4">
                             ชื่อ: {{ $r->name }}&nbsp&nbsp
                            ตำแหน่ง: {{ $r->position }}&nbsp&nbsp&nbsp
                            ประเภท: {{ $r->type }}
                        </font>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <br>
</div>
@endforeach

@endsection
