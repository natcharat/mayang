<!doctype html>
<head>
    <title>Creat User</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>
    <br><br>
    <div class="container">

        <h1>Edit User</h1>

        <br>
        <div class="column left">
            <img class="img-responsive" src="{{asset('img/user01.png')}}" width="382" height="382">
        </div>


        <div class="column right">
            <h3>กรอกข้อมูล</h3>
            <hr>
            <div class="section-form">
                {!! Form::model($user, ['route' => ['user.update', $user->id], 'method' => 'patch']) !!}
                <div class="row">
                    <div class="col-md-8">
                        {!! Form::label('username', 'ผู้ใช้') !!}
                        {!! Form::text('username', null, ['class' => 'form-control'])!!}
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            {!! Form::label('name', 'ชื่อ-นามสกุล') !!}
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
                            {!! Form::label('tell', 'เบอร์โทร') !!}
                            {!! Form::text('tell', null, ['class' => 'form-control']) !!}
                        </div>
                        <div class="col-md-6">
                            {!! Form::label('email', 'อีเมล') !!}
                            {!! Form::text('email', null, ['class' => 'form-control']) !!}
                        </div>
                    </div>
                </div>
                <footer class="col-md-12 text-right">
                    <div class="form-group align-center">
                        {!! Form::submit('Submit', ['class' => 'btn btn-primary']) !!}
                    </div>
                </footer>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
</div>
</body>

</html>