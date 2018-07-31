@extends('layouts.user')

@section('content')

<body>
    <div class="container">
        <h2>รายละเอียดคำขอลาหยุด</h2>
        <hr>
        <footer class="col-md-12 text-right">
            <font size="3">
                <font style="color: #878181">สถานะของคำขอ : </font>
                @if($request->status == 'wait')
                <font style="color: #d1941b">รอการอนุมัติ</font>
                @elseif($request->status == 'approve')
                <font style="color: #0faf1d">อนุมัติ</font>
                @elseif($request->status == 'disapprove')
                <font style="color: #ba0d0d">ไม่อนุมัติ</font>
                @endif
            </font>
        </footer>
        <br>
        <font size="4">
            <div class="row ">
                <div class="col-md-6">
                    ชื่อ-นามสกุล : {{ $request->name }}
                </div>
                <div class="col-md-6">
                    ตำแหน่ง : {{ $request->position }}
                </div> 
            </div>

            <div class="row">
                <div class="col-md-6">
                    วันที่ขอลาหยุด : {{ $request->start }} ถึง {{ $request->stop }}
                </div>
                <div class="col-md-6">
                    ประเภทการลา : {{ $request->type }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    สาเหตุ : {{ $request->detail }}
                </div>
            </div>
        </font>
        <br><br>

        <div class="col-md-12">
           @if($request->img)
           <center>
            <img src="{{ url($request->img)}}"  class="img-responsive" style="width:60%;height:60%">
        </center><br><br>
        @endif
    </div>
    <br>
</div>
</body>

@endsection