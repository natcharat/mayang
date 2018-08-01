@extends('layouts.admin')
@section('content')

<style type="text/css">

sform {
    width: 30%;
}

</style>

<body style="font-family: 'Kanit', sans-serif;">

    <div class="container">
        <h2>จัดการ IP</h2>
        <hr><br>
     @if($errors->any())
     <ul class="alert alert-danger">
        @foreach($errors->all() as $error)
        <center>
            <font size="3">
                <span class="glyphicon glyphicon-warning-sign"></span>
                -{{ $error }}-
                <span class="glyphicon glyphicon-warning-sign"></span>
            </font>
        </center>
        @endforeach
    </ul>
    @endif

    <br><br><br>
    <center>
        <font size="7" style="border: 4px">IP : {{$ip->ip}}</font>
    </center>
    <br>

    <div class="section-form">
        {!! Form::open(['route' => 'ip.store', 'method' => 'post', 'files' => true]) !!}
        <div class="row">
            <div class="col-md-3">
            </div>
            <div class="col-md-5">
                <div class="form-group">
                    แก้ไข IP{!! Form::text('ip', null, ['class' => 'form-control']) !!}
                </div>
            </div>
            <div class="col-md-4">
                <br>
                {!! Form::submit('บันทึก', ['class' => 'crud btn_crud btn_crud1']) !!}
                {!! Form::close() !!}
            </div>

        </div>
        
    </div>
</body>

@endsection