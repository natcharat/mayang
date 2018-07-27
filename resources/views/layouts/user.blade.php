<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'MA-YANG') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
</head>

<style>
html, body {
    background-color: white;
    color: #3C4254;
}

li {
    margin: 2px 6px;
    text-align: center;
    text-decoration: none;
}

a {
    color: white;
}

div.clock {
    color: #3C4254;
    font-size: 100px;
}

.timeBtn {
    background-color: #3C4254;
    border: none;
    border-radius: 8px;
    color: white;
    padding: 10px 24px;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
}
.fontuser{
    font-family: 'Kanit', sans-serif;
}
#text_right { text-align:right; }
word-wrap:break-word;
div#mylayout_2{
    display:block;
    width:100px;
    border:1px solid #09C;
    background-color:#CFC;
    word-wrap:break-word;

}
.p {
 font-size:1.2em;
 line-height:3em;
 height:5em;
 border:3px solid #8A8E98;
 overflow: hidden;   
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;

}
.font{
  font-family: 'Kanit', sans-serif;
  color:  ;
}
.divcurcle {
  border-radius: 25px;
  border: 2px solid #8A8E98;
  padding: 200px; 
  width: 200px;
  height: 150px;
}
</style>

<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel" style="background-color: #3C4254">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}" style="color: #EF6924">
                    Ma-Yang
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        @auth
                        <li class="nav-item">
                            <a href="/timerecord_in">บันทึกเวลา</a>
                        </li>
                        <li class="nav-item">
                            <a href="#">ส่งคำขอ</a>
                        </li>
                        <li class="nav-item">
                            <a href="#">ประกาศบริษัท</a>
                        </li>
                        @else

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

    
</div>
<main class="py-4">
    @yield('content')
</main>
</body>
</html>
