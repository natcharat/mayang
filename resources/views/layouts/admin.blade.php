<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

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
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->

</head>

<style>
html, body {
    font-family: 'Kanit', sans-serif;
    background-color: white;
    color: #3C4254;
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
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.3);
    padding: 5px;
}
tr:hover {
    background-color: #f5f5f5;
}
tr:nth-child(even) {
    background-color: #D8D9DD
}
tr, td {
    vertical-align: center;
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

</style>

<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel" style="background-color: #3C4254">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}" style="color: #EF6924">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
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
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre style="color: white">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
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
