@extends('layouts.admin')

@section('content')

<body>
    <div class="container">

        <h1>{{$notice->topic}}</h1>
        <hr>
        <footer class="col-md-12 text-right">
            <font size="2">อัพเดทเมื่อ : {{$date}} ({{ $notice->updated_at->diffForHumans() }})</font>
        </footer><br>

        <font size="4"> {!! nl2br(e($notice->body)) !!} </font>
        <br><br>
        <footer class="col-md-12 text-right">
            <a href="{{ route('notice.crud') }}" class="crud btn_back btn_crud4"> back </a>
        </footer>

    </div>
</body>
@endsection