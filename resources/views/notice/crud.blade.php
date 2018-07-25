<!doctype html>
<head>
    <title>Manage Notices</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body style="font-family: 'Kanit', sans-serif;">

    @if (session('msg'))
    <div class="alert alert-success">
      {{ session('msg') }}
  </div>
  @endif

  <div class="container">
    <br><br>
    <h3>Notice</h3>
    <br>

    <footer class="col-md-12 text-right">
        <a href="{{ route('notice.create') }}" class="btn btn-success">Add Content</a>
    </footer> <br>
    
    <table class="table table-striped">
        <thead class="thead-dark">
            <h4><tr>
                <td width="20%">Author</td>
                <td width="45%">Topic</td>
                <td width="45%">Action</td>
            </tr></h4>
        </thead>
        <tbody>
            @foreach($notices as $notice)
            <tr>
                <td>Admin</td>
                <td>{{ $notice->topic }}</td>
                <td>
                    <a href="{{ route('notice.show',$notice->id) }}" class="btn btn-xs btn-primary">detail</a>
                    <a href="{{ route('notice.edit', $notice->id) }}" class="btn btn-xs btn-warning">edit</a>
                    <a href="{{ route('notice.delete', $notice->id) }}" class="btn btn-xs btn-danger">delete</a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
</body>
</html>
