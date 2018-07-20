<!DOCTYPE html>
<html>
<head>
  <title></title>
  <link rel="stylesheet" href="{{asset('css/app.css')}}">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
    $( function() {
      $( "#datepicker" ).datepicker();
    } );
  </script>
</head>
<body>
  <br><br><br>

  <div class="container">
   <!-- calendar -->
   <form action="{{ url('search')}}" method="POST" role="search">
    {{ csrf_field() }}
    <div class="input-group">
     <p>วันที่ค้นหา: <input type="text" id="datepicker" name="date">&nbsp&nbsp
      <button type="submit" class="btn btn-default" >ค้นหา</button>
    </p>
  </div>
</form>
<!-- endcalendar -->

<div class="container">
  <a href="{{ route('report.pdf', $date) }}">Download PDF</a>

  <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>In</th>
        <th>Out</th>
      </tr>
    </thead>
    <tbody>
      @foreach($reports as $r)
      <tr>
        <td>{{$r->Name}}</td>
        <td>{{$r->date}}</td>
        <td>{{$r->In}}</td>
        <td>{{$r->out}}</td>
      </tr>
      @endforeach
    </tbody>
  </table>

</div>
</div>

</body>
</html>