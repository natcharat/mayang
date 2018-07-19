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
      @foreach($user as $user)
      <tr>
        <td>{{$user->Name}}</td>
        <td>{{$user->date}}</td>
        <td>{{$user->In}}</td>
        <td>{{$user->out}}</td>
      </tr>
      @endforeach
    </tbody>
  </table>
</div>
</body>
</html>