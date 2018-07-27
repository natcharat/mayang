<!DOCTYPE html>
<html>
<head>
    <!-- from layout -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- thip code -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>

    <script src="{{ asset('js/pdfmake.min.js') }}" defer></script>
    <script src="{{ asset('js/vfs_fonts.js') }}" defer></script>
    <script src="{{ asset('js/buttons.html5.min.js') }}" defer></script>
    
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.5.2/css/buttons.dataTables.min.css">

    <script type="text/javascript">
        $(document).ready(function() {
            $('#example').DataTable( {
                dom: 'Bfrtip',
                buttons: [
                {
                    extend: 'pdfHtml5',
                    orientation: 'portrait',
                    pageSize: 'A4'
                }
                ]
            } );
        } );
    </script>
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
                            <a href="/request" style="color: white; position: relative;">คำขอ</a>
                        </li>
                        <li class="nav-item">
                            <a href="/report" style="color: white; position: relative;">การเข้างาน</a>
                        </li>
                        <li class="nav-itemll">
                            <a href="/user" style="color: white">เพิ่มผู้ใช้</a>
                        </li>
                        <li class="nav-itemnull">
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
</div>

<br>
<!-- Report -->
<div class="container">
    <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time in</th>
                <th>Time off</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data as $d)
            <tr>
                <td>{{ $d->name }}</td>
                <td>{{ $d->date }}</td>
                <td>{{ $d->time_in }}</td>
                <td>{{ $d->time_off }}</td>
            </tr>
            @endforeach

        </tbody>

    </table>
</div>

</body>
</html>