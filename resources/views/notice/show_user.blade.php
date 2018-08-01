@extends('layouts.user')

@section('content')

<body>
    
    <div class="container font">

        <h1>{{$notice->topic}}</h1>
        <hr>
        <footer class="col-md-12 text-right">
            <font size="2">อัพเดทเมื่อ : {{$notice->updated_at}} ({{ $notice->updated_at->diffForHumans() }})</font>
        </footer><br>

        <font size="4"> {!! nl2br(e($notice->body)) !!} </font>
        <br><br>
        <footer class="col-md-12 text-right">
            <a href="{{ route('notice.show_notice') }}" class="crud btn_crud btn_crud4"> ย้อนกลับ </a>
        </footer>
    </div>
</body>
@endsection
