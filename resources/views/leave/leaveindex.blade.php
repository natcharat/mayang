<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Index Page</title>
  <link rel="stylesheet" href="{{asset('css/app.css')}}">
  <style >
  .btn-circle.btn-xl {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    font-size: 24px;
    line-height: 1.33;
    border-radius: 35px;
  }
  body{margin:10px;}
</style>
</head>
<body>
  <div class="container">
    <br />
    @if (\Session::has('success'))
    <div class="alert alert-success">
      <p>{{ \Session::get('success') }}</p>
    </div><br />
    @endif
    <img src="{{asset('img/car.jpg')}}"  style="width:100%;height:200px">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>name</th>
          <th>position</th>
          <th>start</th>
          <th>stop</th>
          <th>detail</th>
          <th>status</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>

        @foreach($leave as $index=>$leave)
        <tr>
          <td>{{++$index}}</td>
          <td>{{$leave->name}}</td>
          <td>{{$leave->position}}</td>
          <td>{{$leave->start}}</td>
          <td>{{$leave->stop}}</td>
          <td>{{$leave->detail}}</td>
          <td>{{$leave->status}}</td>
          <td>          

            <form action="{{action('LeaveController@destroy', $leave->id)}}" method="post">
              @csrf
              <input name="_method" type="hidden" value="DELETE">
              <button class="btn btn-danger" type="submit">ยกเลิกคำขอ</button>
            </form>
          </td>
          <td>
            @if($leave->img)
            <center>
              <img src="{{ url($leave->img)}}"  class="img-responsive" style="width:100%;height:100%">
            </center><br><br>
            
            @endif
          </td>
          
        </tr>
        @endforeach
      </tbody>
    </table>
    <center>
      <a href="{{'add'}}">
        <button type="button" class="btn btn-success btn-circle btn-xl">
          <font size="4">
            NEW
          </font>
        </button>
      </a>
    </center>
  </div>
</body>
</html>