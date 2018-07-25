@extends('layouts.admin')

@section('content')

<body>

    @if (session('msg'))
    <div class="alert alert-success">
        {{ session('msg') }}
    </div>
    @endif

    <div class="container">
        
        <div class="row">
            <div class="col-md-10">
            </div>
            <div class="col-md-2">
                <a href="{{ route('user.create') }}" class="btn btn-success">Create User</a>
            </div>
        </div>

        <table>
            <!-- #CDB380 -->
            <thead class="table" style="background-color: #F28750">
                <h4>
                    <tr>
                        <!-- sum is must be 100% -->
                        <td width="23%">Name</td>
                        <td width="15%">Position</td>
                        <td width="23%">Email</td>
                        <td width="19%">Tell</td>
                        <td class="text-center" width="20%">Action</td>
                    </tr>
                </h4>
            </thead>
            <tbody class="table">
                @foreach($users as $user)
                <tr>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->position }}</td>
                    <td>{{ $user->email }}</td>
                    <td>{{ $user->tell }}</td>
                    <td>
                        <a href="{{ route('user.show',$user->id) }}" class="btn_crud btn_crud1">detail</a>
                        <a href="{{ route('user.edit', $user->id) }}" class="btn_crud btn_crud2">edit</a>
                        <a href="{{ route('user.delete', $user->id) }}" class="btn_crud btn_crud3">delete</a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
@endsection