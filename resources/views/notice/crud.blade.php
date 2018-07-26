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
                    <td width="5%">ลำดับ</td>
                    <td width="20%">ผู้เขียนประกาศ</td>
                    <td width="55%">หัวข้อประกาศ</td>
                    <td class="text-center" width="20%">
                        <a href="{{ route('notice.create') }}" class="crud btn_crud btn_crud5">
                            <i class="fas fa-plus"></i>
                            เพิ่มประกาศ
                        </a>
                    </td>
                </tr>
            </thead>
            <tbody class="table">
                @foreach($notices as $key => $notice)
                <tr>
                    <td class="text-center">{{ ++$key }}</td>
                    <td>Admin</td>
                    <td>{{ $notice->topic }}</td>
                    <td class="text-center">
                        <a href="{{ route('notice.show',$notice->id) }}" class="crud btn_crud btn_crud1">
                            <i class="fas fa-info"></i>
                        </a>
                        <a href="{{ route('notice.edit', $notice->id) }}" class="crud btn_crud btn_crud2">
                            <i class="fas fa-pen"></i>
                        </a>
                        <a href="{{ route('notice.delete', $notice->id) }}" class="crud btn_crud btn_crud3">
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
