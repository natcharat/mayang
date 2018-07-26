@extends('layouts.admin')

@section('content')

<body>
    <div class="container">
        <div class="column left">
            <img class="img img-responsive" src="{{asset('img/user01.png')}}">
        </div>

        <br>

        <div class="column right">
            <h3>
                แก้ไขข้อมูล
            </h3>

            <hr>
            
            <div class="section-form">
                {!! Form::model($user, ['route' => ['user.update', $user->id], 'method' => 'patch']) !!}

                <div class="form-group">
                    <div class="row">
                        <div class="col-md-12">
                            {!! Form::label('username', 'ชื่อผู้ใช้') !!}
                            {!! Form::text('username', null, ['class' => 'form-control'])!!}
                        </div>
                    </div>

                    <br>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                {!! Form::label('name', 'ชื่อ - นามสกุล') !!}
                                {!! Form::text('name', null, ['class' => 'form-control']) !!}
                            </div>
                            <div class="col-md-6">
                                {!! Form::label('position', 'ตำแหน่ง') !!}
                                {!! Form::text('position', null, ['class' => 'form-control']) !!}
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
                                {!! Form::label('email', 'E-mail') !!}
                                {!! Form::text('email', null, ['class' => 'form-control']) !!}
                            </div>
                        </div>
                    </div>

                    <footer class="col-md-12 text-right">
                        <div class="form-group align-center">
                            {!! Form::submit('ตกลง', ['class' => 'btn_crud btn_crud1', 'style' => 'font-size: 16px']) !!}
                        </div>
                    </footer>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
</body>

@endsection