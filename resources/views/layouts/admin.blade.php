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
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->

</head>

<style>
html {
    background-color: white;
    color: #3C4254;
}

body {
    font-family: 'Kanit', sans-serif;
    background-color: white;
    color: #3C4254;
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

.btn_crud {
    background-color: #4CAF50; /* Green */
    border: none;
    border-radius: 5px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    cursor: pointer;
    padding: 7px 10px;
}

.btn_crud1 {background-color: #0089E5;}
.btn_crud2 {background-color: #FECE00;}
.btn_crud3 {background-color: #F44336;}

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
                        
                        <li class="nav-item {{ Request::segment(1) === '/report' ? 'active' : null }}">
                            <a href="/report" style="color: white; position: relative;">การเข้างาน</a>
                        </li>                 

                        <li class="nav-item {{ Request::segment(1) === '/request' ? 'active' : null }}">
                            <a href="/request" style="color: white; position: relative;">คำขอ</a>
                        </li>
                     
                        <li class="nav-item {{ Request::segment(1) === '/create-user' ? 'active' : null }}">
                            <a href="/user" style="color: white">ข้อมูลผู้ใช้</a>
                        </li>

                        <li class="nav-item {{ Request::segment(1) === '/create-notice' ? 'active' : null }}">
                            <a href="/notice" style="color: white">ประกาศบริษัท</a>
                        </li>

                        <li class="nav-item {{ Request::segment(1) === '/manage-ip' ? 'active' : null }}">
                            <a href="/ip/manage" style="color: white">จัดการ IP</a>
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
