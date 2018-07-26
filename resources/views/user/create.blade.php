@extends('layouts.admin')

@section('content')

<body>
    <div class="container">

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

        <div class="column left">
            <img class="img img-responsive" src="{{asset('img/user01.png')}}">
        </div>

        <br>

        <div class="column right">
            <h3>
                กรอกข้อมูล
            </h3>

            <hr>

            <div class="section-form">
                {!! Form::open(['route' => 'user.store', 'method' => 'post', 'files' => true]) !!}
                <footer class="col-md-12" style="right: 15px">

                    <label class="radio-inline">
                        <input style="margin-right: 2px" type="radio" name="type" value="0">
                        User
                    </label>

                    <label class="radio-inline">
                        <input style="margin-right: 2px; margin-left: 10px" type="radio" name="type" value="1">
                        Admin
                    </label>

                </footer>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            {!! Form::label('username', 'ชื่อผู้ใช้') !!}
                            {!! Form::text('username', null, ['class' => 'form-control', 'placeholder'=>'example_tecmove']) !!}
                        </div>
                        <div class="col-md-6">
                            {!! Form::label('password', 'รหัสผ่าน') !!}
                            {!! Form::text('password', null, ['class' => 'form-control']) !!}
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            {!! Form::label('name', 'ชื่อ-นามสกุล') !!}
                            {!! Form::text('name', null, ['class' => 'form-control']) !!}
                        </div>
                        <div class="col-md-6">
                            {!! Form::label('position', 'ตำแหน่ง') !!}
                            {!! Form::text('position', null, ['class' => 'form-control', 'placeholder'=>'พนักงานฝึกงาน , แม่บ้าน ฯลฯ']) !!}
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            {!! Form::label('tell', 'เบอร์โทรศัพท์') !!}
                            {!! Form::text('tell', null, ['class' => 'form-control']) !!}
                        </div>
                        <div class="col-md-6">
                            {!! Form::label('email', 'E-Mail') !!}
                            {!! Form::text('email', null, ['class' => 'form-control', 'placeholder'=>'example@gmail.com']) !!}
                        </div>
                    </div>
                </div>

                <footer class="col-md-12 text-right">
                    <div class="form-group align-center">
                        {!! Form::submit('ตกลง', ['class' => 'btn_crud btn_crud1', 'style' => 'font-size: 16px']) !!}
                        {!! Form::close() !!}
                    </div>
                </footer>
            </div>
        </div>
    </div>
</body>

@endsection