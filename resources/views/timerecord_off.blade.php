@extends('layouts.user2')

@section('content')

<style>
.button {
    background-color: #636876;
    type: submit;
}
</style>

<body>
    <br><br><br>
    <div class="container">
        <div class="row">
            <center>

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

            <font style="color: #3C4254" size="30px">
               <body onload="startTime()">
                <div id="txt"></div>
            </body>
        </font>
    </center>
</div>

<!-- bUTTON -->
<br><br>
<a href="{{ url('time_off') }}">
  <button class="click" id="in_btn" onclick="press_off()">
   TIME OFF
</button>
</a>

</div>
</body>
@endsection