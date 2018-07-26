@extends('layouts.admin')

@section('content')
<div class="container">
    <h1>คำขอลางาน</h1>
    <hr>
</div>

@foreach($requests as $r)
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" style="background-color: white">
                <a href="{{ route('request.detail', $r->id) }}">
                    <div class="card-body">
                        <font color="green">ชื่อ: {{ $r->name }}</font>
                        <font>ตำแหน่ง: {{ $r->position }}</font>
                        <font>ประเภท: {{ $r->type }}</font>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <br>
</div>
@endforeach

@endsection
