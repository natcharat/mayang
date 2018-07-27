@extends('layouts.user')

@section('content')

<body>
	<div class="container">
		<div class="row">
            <body onload="startTime()">
                <div class="containner">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            
                                <div class="clock" id="txt">

                                </div>
                            
                        </div>
                    </div>
                </div>
            </body>

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

        </div>

        
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

        <!-- bUTTON -->
        <br><br>


        @if ($time == null)
        <a href="{{ url('time_in') }}">
            <button class="timeBtn" id="time" disabled>เข้างาน</button>
        </a>

        @elseif ($time->status == 'in')
        <a href="{{ url('time_off') }}">
            <button class="timeBtn" id="time" disabled>ออกงาน</button>
        </a>

        @endif

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