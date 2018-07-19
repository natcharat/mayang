<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>jQuery UI Datepicker - Default functionality</title>
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
     <form action="/search" method="POST" role="search">
        {{ csrf_field() }}
        <div class="input-group">
           <p>วันที่ค้นหา: <input type="text" id="datepicker" name="date">&nbsp&nbsp
              <button type="submit" class="btn btn-default">ค้นหา</button>
          </p>
      </div>
  </form>
  <!-- endcalendar -->
  <div class="container">
    @if(isset($details))
    <a href="{{ url('pdf') }}">Download PDF</a>
    
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
            @foreach($details as $user)
            <tr>
                <td>{{$user->Name}}</td>
                <td>{{$user->date}}</td>
                <td>{{$user->In}}</td>
                <td>{{$user->out}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    @endif
</div>
</div>

</body>
</html>