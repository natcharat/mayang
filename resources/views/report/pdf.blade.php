<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
  <div class="container">

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
</body>
</html>