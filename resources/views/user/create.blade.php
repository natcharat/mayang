<!doctype html>
<head>
    <title>Creat User</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body style="font-family: 'Kanit', sans-serif;">
    <br><br>
    <div class="container">

        <h1>Create User</h1>
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
        <br>
        <div class="column left">
            <img src="{{asset('img/user01.png')}}" class="img-responsive" >
        </div>


        <div class="column right">
            <h3>กรอกข้อมูล</h3>
            <hr>
            <div class="section-form">
                {!! Form::open(['route' => 'user.store', 'method' => 'post', 'files' => true]) !!}
                <footer class="col-md-12 text-right">
                    <label class="radio-inline"><input type="radio" name="type" value="0">User</label> &emsp;&emsp;
                    <label class="radio-inline"><input type="radio" name="type" value="1">Admin</label>
                </footer>
                <div class="row">
                    <div class="col-md-6">
                        {!! Form::label('username', 'ผู้ใช้') !!}
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
                    {!! Form::label('tell', 'เบอร์โทร') !!}
                    {!! Form::text('tell', null, ['class' => 'form-control']) !!}
                </div>
                <div class="col-md-6">
                    {!! Form::label('email', 'อีเมล') !!}
                    {!! Form::text('email', null, ['class' => 'form-control', 'placeholder'=>'example@gmail.com']) !!}
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
</body>

</html>