@extends('layouts.user')

@section('content')

<body>
    <br><br>
    <div class="container font">

        <h1>{{$notice->topic}}</h1>
        <hr>
        <footer class="col-md-12 text-right">
            <font size="2">updated : {{ $notice->updated_at->diffForHumans() }}</font>
        </footer><br>

        <font size="4"> {!! nl2br(e($notice->body)) !!} </font>
        <br><br>
        <footer class="col-md-12 text-right">
            

            <button class="btn btn-md btn-danger"onClick="history.back()">ย้อนกลับ</button>
        </footer>

    </div>
</body>
@endsection
