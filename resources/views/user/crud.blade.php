@extends('layouts.admin')

@section('content')

<body>
    @if (session('msg'))
    <div class="alert alert-success">
        {{ session('msg') }}
    </div>
    @endif

    <div class="container">

        <table style="width: 100%">
            <thead class="table" style="background-color: #F28750; color: white; font-size: 16px">
                <tr>
                    <!-- sum is must be 100% -->
                    <td width="5%">ลำดับ</td>
                    <td width="23%">ชื่อ</td>
                    <td width="15%">ตำแหน่ง</td>
                    <td width="23%">E-mail</td>
                    <td width="13%">เบอร์โทรศัพท์</td>
                    <td class="text-center" width="20%">
                        <a href="{{ route('user.create') }}" class="crud btn_crud btn_crud5">
                            <i class="fas fa-plus"></i>
                            เพิ่มผู้ใช้
                        </a>
                    </td>
                </tr>
            </thead>
            <tbody class="table">
                @foreach($users as $key => $user)
                <tr>
                    <td class="text-center">{{ ++$key }}</td>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->position }}</td>
                    <td>{{ $user->email }}</td>
                    <td>{{ $user->tell }}</td>
                    <td class="text-center">
                        <a href="{{ route('user.show',$user->id) }}" class="crud btn_crud btn_crud1">
                            <i class="fas fa-info"></i>
                        </a>
                        <a href="{{ route('user.edit', $user->id) }}" class="crud btn_crud btn_crud2">
                            <i class="fas fa-pen"></i>
                        </a>
                        <a href="{{ route('user.delete', $user->id) }}" class="crud btn_crud btn_crud3">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
@endsection