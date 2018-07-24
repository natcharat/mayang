<!doctype html>
<head>
    <title>Notice Details</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>
    <br><br>
    <div class="container">

        <h1>{{$notice->topic}}</h1>
        <hr>
        <footer class="col-md-12 text-right">
            <font size="2">updated : {{ $notice->updated_at->diffForHumans() }}</font>
        </footer><br>

        <font size="3"> {!! nl2br(e($notice->body)) !!} </font>
        <br><br>
        <footer class="col-md-12 text-right">
            <INPUT class="w3-button w3-orange" TYPE="button" VALUE="กลับ" onClick="history.back()">
        </footer>

    </div>
</body>
</html>
