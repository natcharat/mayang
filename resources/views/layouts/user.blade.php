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
    <!-- --------------------------------------------- -->
    
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">  
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>  
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 
    


    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="https://fonts.googleapis.com/css?family=Pattaya|Trirong" rel="stylesheet">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <link href="https://fonts.googleapis.com/css?family=Sriracha" rel="stylesheet">
    
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
        $( function() {
          $( "#datepicker" ).datepicker();
      } );
  </script>
</head>

<style>
.w3-button {
    width:150px;
    height:55px
    
}
.form-style-2{
    max-width: 500px;
    padding: 20px 12px 10px 20px;
    font: 13px Arial, Helvetica, sans-serif;
}
.form-style-2-heading{
    font-weight: bold;
    font-style: italic;
    border-bottom: 2px solid #ddd;
    margin-bottom: 20px;
    font-size: 15px;
    padding-bottom: 3px;
}
.form-style-2 label{
    display: block;
    margin: 0px 0px 15px 0px;
}
.form-style-2 label > span{
    width: 100px;
    font-weight: bold;
    float: left;
    padding-top: 8px;
    padding-right: 5px;
}
.form-style-2 span.required{
    color:red;
}
.form-style-2 .tel-number-field{
    width: 40px;
    text-align: center;
}

.form-style-2 input.input-field, .form-style-2 .select-field{
    width: 48%; 
}

.form-style-2 .select-field{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    border: 1px solid #C2C2C2;
    box-shadow: 1px 1px 4px #EBEBEB;
    -moz-box-shadow: 1px 1px 4px #EBEBEB;
    -webkit-box-shadow: 1px 1px 4px #EBEBEB;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    padding: 7px;
    outline: none;
}

.form-style-2 .select-field:focus{
    border: 1px solid #0C0;
}
.form-style-2 .textarea-field{
    height:100px;
    width: 55%;
}

.form-style-2 input[type=button]{
    border: none;
    padding: 8px 15px 8px 15px;
    background: #FF8500;
    color: #fff;
    box-shadow: 1px 1px 4px #DADADA;
    -moz-box-shadow: 1px 1px 4px #DADADA;
    -webkit-box-shadow: 1px 1px 4px #DADADA;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
}
.form-style-2 input[type=submit]:hover,
.form-style-2 input[type=button]:hover{
    background: #EA7B00;
    color: #fff;
}
.font1{
    font-family: 'Kanit', sans-serif
    font-size: ;

}
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
.divhead{
    border-style: solid;
    border-color: black;
    border-radius: 30px;
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
                            <a href="/timerecord_in"><br>บันทึกเวลา</a>
                        </li>
                        <li class="nav-item">
                            <a href="add"><br>ส่งคำขอ</a>
                        </li>
                        <li class="nav-item">
                            <a href="Notice_show"><br>ประกาศบริษัท</a>
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
