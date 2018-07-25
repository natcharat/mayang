@extends('layouts.admin')

@section('content')
<style>
a:link, a:visited {
  background-color: red;
  color: black;
  padding: 14px 25px;
  text-decoration: none;
  display: inline-block;
  width: 200px;
}


a:hover, a:active {
  background-color: green;
}

</style>

@foreach($requests as $r)
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" style="background-color: white">
                <a href="{{ route('request.detail', $r->id) }}">
                    <div class="card-body">
                        <font color="green">ชื่อ: {{ $r->name }}</font>
                        <font>ตำแหน่ง: {{ $r->position }}</font>
                        <font>ประเภท: {{ $r->type }}</font>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <br>
</div>
@endforeach

@endsection


<!-- <!DOCTYPE html>
<html>
<head>
    <style>
    a:link, a:visited {
        background-color: red;
        color: black;
        padding: 14px 25px;
        text-decoration: none;
        display: inline-block;
        width: 200px;
    }


    a:hover, a:active {
        background-color: green;
    }
</style>
</head>
<body>
    @foreach($requests as $r)

    <a href="{{ route('request.detail', $r->id) }}">ชื่อ: {{ $r->name }}
        <br>ตำแหน่ง: {{ $r->position }} 
        <br>ประเภท: {{ $r->type }}
    </a>
    @endforeach

</body>
</html> -->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li ><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li class="{{ Request::segment(1) === 'request' ? 'active' : null }}"><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
  
<div class="container">
  <h3>Navbar With Dropdown</h3>
  <p>This example adds a dropdown menu for the "Page 1" button in the navigation bar.</p>
</div>

</body>
</html> -->

