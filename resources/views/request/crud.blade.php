@extends('layouts.user')

@section('content')

<body>

    <div class="container">
        <h2>ประวัติการลาของ {{$name}}</h2>
        <hr><br>
        <table style="width: 100% ">
            <thead class="table" style="background-color: #F28750; color: white; font-size: 16px">
                <tr>
                    <!-- sum is must be 100% -->
                    <td width="8%">วันที่ขอลา</td>
                    <td width="3%"> </td>
                    <td width="13%"> </td>
                    <td width="16%">ตำแหน่ง</td>
                    <td width="17%">ประเภทการลา</td>
                    <td width="15%">สถานะ</td>
                    <td width="5%"></td>
                </tr>
            </thead>
            <tbody class="table" >
                @foreach($leaves as $leave)
                <tr>
                    <td>{{ $leave->start }}</td>
                    <td> ถึง </td>
                    <td>{{ $leave->stop }}</td>
                    <td>{{ $leave->position }}</td>
                    <td>{{ $leave->type }}</td>
                    <td>@if($leave->status == 'wait')
                            <font style="color: #d1941b">รอการอนุมัติ</font>
                        @elseif($leave->status == 'approve')
                            <font style="color: #0faf1d">อนุมัติ</font>
                        @elseif($leave->status == 'disapprove')
                            <font style="color: #ba0d0d">ไม่อนุมัติ</font>
                        @endif
                    </td>
                    <td class="text-center">
                        <a href="{{ route('leave.show',$leave->id) }}" class="crud btn_crud btn_crud1">
                            <i class="fas fa-info"></i>
                        </a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>
@endsection