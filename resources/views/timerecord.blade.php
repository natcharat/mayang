@extends('layouts.user')

@section('content')

<body>
    <br>
    <div class="container">
        <div class="row">
            <div id="MyClockDisplay" class="clock"></div>
            <script type="text/javascript">

                function showTime(){
                    var date = new Date();
                var h = date.getHours(); // 0 - 23
                var m = date.getMinutes(); // 0 - 59
                var s = date.getSeconds(); // 0 - 59
                var session = "AM";

                if(h == 0){
                    h = 12;
                }

                if(h > 12){
                    h = h - 12;
                    session = "PM";
                }

                h = (h < 10) ? "0" + h : h;
                m = (m < 10) ? "0" + m : m;
                s = (s < 10) ? "0" + s : s;

                var time = h + ":" + m + ":" + s + " " + session;
                document.getElementById("MyClockDisplay").innerText = time;
                document.getElementById("MyClockDisplay").textContent = time;

                setTimeout(showTime, 1000);
            }

            showTime();    
        </script>
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
                    @elseif($time->time_off == null)
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
            else{
            }
        }
    })
</script>

</body>
@endsection