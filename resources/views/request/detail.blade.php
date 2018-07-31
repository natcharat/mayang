@extends('layouts.admin')

@section('content')

<body>
    <div class="container">
        <h2>คำขอลาหยุดของ {{$detail->name}}</h2>
        <hr>

        <br>
        <font size="4">
            <div class="row ">
                <div class="col-md-6">
                    ชื่อ-นามสกุล : {{ $detail->name }}
                </div>
                <div class="col-md-6">
                    ตำแหน่ง : {{ $detail->position }}
                </div> 
            </div>

            <div class="row">
                <div class="col-md-6">
                    วันที่ขอลาหยุด : {{ $detail->start }} ถึง {{ $detail->stop }}
                </div>
                <div class="col-md-6">
                    ประเภทการลา : {{ $detail->type }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    สาเหตุ : {{ $detail->detail }}
                </div>
            </div>
        </font>
        <br><br>

        <div class="col-md-12">
           @if($detail->img)
           <center>
            <img src="{{ url($detail->img)}}"  class="img-responsive" style="width:60%;height:60%">
        </center><br><br>
        @endif
    </div>
    <br>

    <!-- approve & disapprove -->
    <footer class="col-md-12 text-center">
        <a class="crud btn_crud btn_crud3" href="{{ route('request.disapprove', $detail->id) }}" role="button">ไม่อนุมัติ</a>&nbsp&nbsp&nbsp
        <a class="crud btn_crud btn_crud1" href="{{ route('request.approve', $detail->id) }}" role="button">อนุมัติ</a>
    </footer>
</div>
</body>

@endsection