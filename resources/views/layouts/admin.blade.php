<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Ma-Yang</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
</head>

<style>
html, body {
    font-family: 'Kanit', sans-serif;
    background-color: white;
    color: #3C4254;
}
i.fa-bars {
    color: white;
}
p.table {
    font-size: 28px;
}
p.request {
    font-size: 18px;
    color: #3C4254;
    margin-bottom: 1px;
    display: inline;
}
p.orange {
    color: #EF6924;
}
a.navlink:visited {
    color: white;
    text-decoration: none;
}
a.navlink:active, a.navlink:hover {
    color: #FCE1D3;
    text-decoration: none;
}
a.crud:visited, a.crud:hover {
    color: white;
    text-decoration: none;
}
a.request:visited, a.request:hover {
    text-decoration: none;
}
img {
    width: 382px;
    height: 382px;
}
li {
    margin: 2px 6px;
    text-align: center;
    text-decoration: none;
}
div.card {
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 0px;
    opacity: 1;
}
div.card-header {
    background-color: #F28750;
    color: white;
    font-size: 18px
}
tr:nth-child(even) {
    background-color: #F4F4F6;
}
tr, td {
    vertical-align: center;
}
@media screen and (max-width: 414px) {
    nav, ul, li {
        box-sizing: border-box;
        max-width: 100%
    }
}
.btn_crud {
    border: none;
    border-radius: 5px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin: 0px 1px; 
}
.btn_back {
    border: none;
    border-radius: 5px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin: 0px 1px; 
}
.btn_crud1 {
    background-color: #0089E5; /*blue button*/
    padding: 5px 15px;
}
.btn_crud2 {
    background-color: #FECE00; /*yellow button*/
    padding: 5px 10px;
}
.btn_crud3 {
    background-color: #F44336; /*red button*/
    padding: 5px 11px;
}
.btn_crud4 {
    background-color: #EF6924; /*tecmove orange 100%*/
    padding: 5px 11px; 
}
.btn_crud5 {
    background-color: #4CAF50; /*green button*/
    padding: 5px 11px; 
}
.btn_crud6 {
    background-color: #EF6924; /*green button*/
    padding: 2px 14px;
    margin-bottom: 1px;

}
.divhead{
    border-style: solid;
    border-color: ;
    border-radius: 10px;
    width: 30px,
    height: 60px;
    background-color: #3C4254;
    margin-bottom: 15px;  
}
.divtext {
    margin-top: 20px;
    margin-bottom: 1px;
}
@media screen and (max-width: 415px) {
    table {
        width: 315px;
    }
    thead.table, tbody.table, tr, td {
        font-size: 4px;
        box-sizing: border-box;
    }
    .btn_crud {
        font-size: 4px;
        padding: 2px 2px;
    }
    .btn_crud1 {
        background-color: #0089E5; /*blue button*/
        padding: 2px 5px;
    }
}
@media screen and (min-width: 768px) {
    .btn_crud2, .btn_crud3 {
        padding: 2px 5px;
    }
    .btn_crud1{
        padding: 2px 11px;
    }
}
</style>

<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-expand-sm navbar-light navbar-laravel" style="background-color: #3C4254">
            <div class="container">
                <a class="navbar-brand" style="color: #EF6924">
                    Ma-Yang
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <i class="fas fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        @auth

                        <li class="nav-item">
                            <a class="navlink" href="/request">คำขอ</a>
                        </li>
                        <li class="nav-item">
                            <a class="navlink" href="/report">การเข้างาน</a>
                        </li>
                        <li class="nav-item">
                            <a class="navlink" href="/user">ข้อมูลผู้ใช้</a>
                        </li>
                        <li class="nav-item">
                            <a class="navlink" href="/notice">ประกาศบริษัท</a>
                        </li>

                        <li class="nav-item">
                            <a class="navlink" href="/ip/manage">จัดการ IP</a>
                        </li> 

                        @endauth
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        @else
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"  aria-expanded="false" v-pre style="color: white">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('user.show',$user->id) }}"><i class="far fa-address-book"></i>
                                    ดูข้อมูลส่วนตัว
                                </a>

                                <a class="dropdown-item" href="{{ route('user.edit', $user->id) }}"><i class="fas fa-pen"></i>
                                    แก้ไขข้อมูลส่วนตัว
                                </a>

                                <a class="dropdown-item" href="/changePasswordAdmin"><i class="fas fa-key"></i>
                                    เปลี่ยนรหัสผ่าน
                                </a>

                                <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fas fa-sign-out-alt"></i>
                                    ออกจากระบบ
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>