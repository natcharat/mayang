@extends('layouts.admin')

@section('content')

<div class="container">
    <h2>
        คำขอลางาน
    </h2>

    <hr>

    @foreach($requests as $r)
    <div class="row justify-content-center">
        <div class="col-md-9">
            <div class="card" style="background-color: white">
                <a class="request" href="{{ route('request.detail', $r->id) }}">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md">
                                
                                <p class="request">
                                    ชื่อ: 
                                </p>
                                <p class="request orange">
                                    {{ $r->name }}
                                </p>
                            </div>
                            <div class="col-md">
                                <p class="request">
                                    ตำแหน่ง: 
                                </p>
                                <p class="request">
                                    {{ $r->position }}
                                </p>
                            </div>
                            <div class="col-md">
                                <p class="request">
                                    ประเภท: 
                                </p>
                                <p class="request">
                                    {{ $r->type }}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <br>

    @endforeach
</div>

@endsection