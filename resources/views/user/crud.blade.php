@extends('layouts.admin')

@section('content')

<body>
    @if (session('msg'))
    <div class="alert alert-success">
        {{ session('msg') }}
    </div>
    @endif

    <div class="container">
        
        <!-- Admin table -->
        <p class="table text-center">
            ตารางข้อมูล Admin
        </p>
        <table style="width: 100%">
            <thead class="table" style="background-color: #F28750; color: white; font-size: 16px">
                <tr>
                    <!-- sum is must be 100% -->
                    <td width="25%">ชื่อ</td>
                    <td width="16%">ตำแหน่ง</td>
                    <td width="24%">E-mail</td>
                    <td width="15%">เบอร์โทรศัพท์</td>
                    <td class="text-center" width="20%">
                        <a href="{{ route('user.create') }}" class="crud btn_crud btn_crud5">
                            <i class="fas fa-plus"></i>
                            เพิ่มผู้ใช้
                        </a>
                    </td>
                </tr>
            </thead>
            <tbody class="table">
                @foreach($admins as $admin)
                <tr>
                    <td>{{ $admin->name }}</td>
                    <td>{{ $admin->position }}</td>
                    <td>{{ $admin->email }}</td>
                    <td>{{ $admin->tell }}</td>
                    <td class="text-center">
                        <a href="{{ route('user.show',$admin->id) }}" class="crud btn_crud btn_crud1">
                            <i class="fas fa-info"></i>
                        </a>
                        <a href="{{ route('user.edit', $admin->id) }}" class="crud btn_crud btn_crud2">
                            <i class="fas fa-pen"></i>
                        </a>
                        <a href="{{ route('user.delete', $admin->id) }}" class="crud btn_crud btn_crud3">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>

        <br><br>
        
        <!-- User table -->
        <p class="table text-center">
            ตารางข้อมูล User
        </p>
        <table style="width: 100%">
            <thead class="table" style="background-color: #F28750; color: white; font-size: 16px">
                <tr>
                    <!-- sum is must be 100% -->
                    <td width="25%">ชื่อ</td>
                    <td width="16%">ตำแหน่ง</td>
                    <td width="24%">E-mail</td>
                    <td width="15%">เบอร์โทรศัพท์</td>
                    <td class="text-center" width="20%">
                        <a href="{{ route('user.create') }}" class="crud btn_crud btn_crud5">
                            <i class="fas fa-plus"></i>
                            เพิ่มผู้ใช้
                        </a>
                    </td>
                </tr>
            </thead>
            <tbody class="table">
                @foreach($users as $user)
                <tr>
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