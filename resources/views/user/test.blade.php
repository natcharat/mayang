<!doctype html>
<head>
    <title>Creat User</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>
    <br><br>
    <div class="container">

        <h1>Create User</h1>

        
        <footer class="col-md-12 text-right">
                <a href="{{ route('user.crud') }}" class="btn btn-xs btn-danger pull-right"> back </a>
        </footer>


        <br>

        <form method="post" action="{{route('user.store')}}">
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" placeholder="example_tecmove">
                </div>
                <div class="form-group col-md-6">
                  <label for="password">Password</label>
                  <input type="text" class="form-control" id="password" placeholder="1234">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="name">ชื่อ-นามสกุล</label>
                  <input type="text" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="form-group col-md-4">
                  <label for="position">ตำแหน่ง</label>
                  <input type="text" class="form-control" id="position"placeholder="พนักงานฝึกงาน,ครีเอทีฟ ฯลฯ">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">อีเมล</label>
                  <input type="text" class="form-control" id="email" placeholder="example@gmail.com">
                </div>
                <div class="form-group col-md-6">
                  <label for="tell">เบอร์โทร</label>
                  <input type="text" class="form-control" id="tell" placeholder="08X-XXXXXXX">
                </div>
            </div>
            <div class="form-row">
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
        </form>

</div>
</body>
</html>