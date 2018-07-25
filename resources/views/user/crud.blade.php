@extends('layouts.admin')
@section('content')

<body style="font-family: 'Kanit', sans-serif;">

    @if (session('msg'))
    <div class="alert alert-success">
      {{ session('msg') }}
  </div>
  @endif

  <div class="container">
    <br>
    <h3>Users</h3>
    <br>
    
    <footer class="col-md-12 text-right">
        <a href="{{ route('user.create') }}" class="btn btn-success">Create User</a>
    </footer>
    <br>

    <table class="table table-striped">
        <thead class="thead-dark">
            <h4><tr>
                <td width="20%">Name</td>
                <td width="12%">Position</td>
                <td width="20%">Email</td>
                <td width="15%">Tell</td>
                <td width="40%">Action</td>
            </tr></h4>
        </thead>
        <tbody>
            @foreach($users as $user)
            <tr>
                <td>{{ $user->name }}</td>
                <td>{{ $user->position }}</td>
                <td>{{ $user->email }}</td>
                <td>{{ $user->tell }}</td>
                <td>
                 <a href="{{ route('user.show',$user->id) }}" class="btn btn-xs btn-primary">detail</a>
                 <a href="{{ route('user.edit', $user->id) }}" class="btn btn-xs btn-warning">edit</a>
                 <a href="{{ route('user.delete', $user->id) }}" class="btn btn-xs btn-danger">delete</a>
             </td>
         </tr>
         @endforeach
     </tbody>
 </table>
</div>
</body>
@endsection
