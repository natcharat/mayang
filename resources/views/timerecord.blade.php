@extends('layouts.user')

@section('content')

<body>
	<br><br><br>
	<div class="container">
		<div class="row">
            <script>
                function startTime() {
                    var today = new Date();
                    var h = today.getHours();
                    var m = today.getMinutes();
                    var s = today.getSeconds();
                    m = checkTime(m);
                    s = checkTime(s);
                    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
                    var t = setTimeout(startTime, 500);
                }
                function checkTime(i) {
            	   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            	   return i;
                }
            </script>


            <body onload="startTime()">
                <div class="containner">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <center>
                                <div class="clock" id="txt">

                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </body>

        </div>

        <div class="container">
            <div class="row">
                <div class="col-2">
                </div>
                <div class="col-md-4">
                    <p>เวลาเข้างาน</p>
                </div>
                <div class="col-md-4">
                    <p>เวลาออกงาน</p>
                </div>
                <div class="col-2">
                </div>
            </div>
        </div>

        <!-- bUTTON -->
        <br><br>

        @if ($time == null)
        <a href="{{ url('time_in') }}">
            <button class="timeBtn">เข้างาน</button>
        </a>

        @elseif ($time->status == 'in')
        <a href="{{ url('time_off') }}">
            <button class="timeBtn">ออกงาน</button>
        </a>
        @elseif ($time->staus == 'off')

        @endif

    </div>
</body>
@endsection