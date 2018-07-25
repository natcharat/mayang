@extends('layouts.admin')

@section('content')

<body>
    @foreach($detail as $d)
    <h1>ชื่อ: {{ $d->name }}
        <br>ตำแหน่ง: {{ $d->position }}
        <br>ลาตั้งแต่วันที่ &nbsp {{ $d->start }} &nbsp ถึง {{ $d->stop }}
        <br>ประเภทการลา: {{ $d->type }}
        <br>สาเหตุ: {{ $d->detail }}
        <br>
        @if($d->img)
        <center>
            <img src="{{ url($d->img)}}"  class="img-responsive" style="width:100%;height:100%">
        </center><br><br>

        @endif
    </h1>
    @endforeach

    <!-- approve & disapprove -->
    <a class="btn btn-primary" href="{{ route('request.disapprove', $d->id) }}" role="button">ไม่อนุมัติ</a>&nbsp&nbsp&nbsp
    <a class="btn btn-primary" href="{{ route('request.approve', $d->id) }}" role="button">อนุมัติ</a>

</body>

@endsection