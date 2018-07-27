@extends('layouts.user')

@section('content')

<body>
	<br>
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
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <center>
                                <div class="clock" id="txt">

                                </div>
                            </center>
                        </div>
                    </div>
                </div>
                <br>
            </body>


        </div>
        <center><br><br>
            <div class="container">
                <div class="row">
                    <div class="col-2">
                    </div>
                    <div class="col-md-4">
                        <h3><B>เวลาเข้างาน</B></h3>
                        @if($time == null)
                        <h2 style="color: #EF6924">00:00:00</h2>
                        @else
                        <h2 style="color: #EF6924">{{$time->time_in}}</h2>
                        @endif

                    </div>
                    <div class="col-md-4">
                        <h3><B>เวลาออกงาน</B></h3>
                        @if($time == null)
                        <h2 style="color: #EF6924">00:00:00</h2>
                        @elseif($time->time_off == '23:59:00')
                        <h2 style="color: #EF6924">00:00:00</h2>
                        @else
                        <h2 style="color: #EF6924">{{$time->time_off}}</h2>
                        @endif
                    </div>
                    <div class="col-2">
                    </div>
                </div>
            </div>

            
        </center>


        <!-- button -->
        <br><br>
        <center>
            @if ($time == null)
            <a href="{{ url('time_in') }}">
                <button class="timeBtn" id="time" disabled>เข้างาน</button>
            </a>

            @elseif ($time->status == 'in')
            <a href="{{ url('time_off') }}">
                <button class="timeBtn" id="time" disabled>ออกงาน</button>
            </a>

            @endif
        </center>
    </div>

    <script type="text/javascript">
        var IP = {!! json_encode($ip) !!}

        $.ajax({
            type: 'GET',
            url: 'https://json.geoiplookup.io',
            success: function (res) {
                console.log(res.ip);
                $("#ip").text(res.ip);
                if (IP == res.ip) {
                    $('#time').attr('disabled', false);
                }
            }
        })
    </script>

</body>
@endsection