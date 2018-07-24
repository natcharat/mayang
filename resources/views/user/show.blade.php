<!doctype html>
<head>
    <title>Creat User</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>
    <br><br>
    <div class="container">

        <h1>User Details</h1>

        <br>
        <div class="column left">
            <img class="img-responsive" src="{{asset('img/user01.png')}}" width="382" height="382">
        </div>


        <div class="column right">
            <h3>ข้อมูลของ {{$user->username}}</h3>
            <hr>
            <div class="row">
                <div class="col-md-6">
                    ชื่อ-นามสกุล : {{$user->name}}
                </div>
                <div class="col-md-6">
                    ตำแหน่ง : {{$user->position}}
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    เบอร์โทร : {{$user->tell}}
                </div>
                <div class="col-md-6">
                    อีเมล : {{$user->email}}
                </div>
            </div>
            <br><br><br><br>
            <br><br><br><br>
            <footer class="col-md-12 text-right">
                <a href="{{ route('user.crud') }}" class="btn btn-xs btn-danger"> back </a>
            </footer>
        </div>
    </div>
</div>
</body>

</html>