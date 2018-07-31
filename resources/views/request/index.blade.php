@extends('layouts.admin')

@section('content')


<div class="divhead container">
    <h2 align="center" class="divtext"><font color="white">คำขอลางาน</font></h2><br>
    
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