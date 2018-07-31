@extends('layouts.admin')

@section('content')

<body>
    <div class="container">

        @if($errors->any())
        <ul class="alert alert-danger">
            @foreach($errors->all() as $error)
            <center>
                <font size="3">
                    <span class="glyphicon glyphicon-warning-sign"></span>
                    -{{ $error }}-
                    <span class="glyphicon glyphicon-warning-sign"></span>
                </font>
            </center>
            @endforeach
        </ul>

        @endif
        
        <div class="section-form">
            {!! Form::open(['route' => 'notice.store', 'method' => 'post', 'files' => true]) !!}

            <div class="form-group">
                {!! Form::label('topic', 'หัวข้อ') !!}
                {!! Form::text('topic', null, ['class' => 'form-control']) !!}
            </div>

            <div class="form-group">
                {!! Form::label('body', 'เนื้อหาประกาศ') !!}
                {!! Form::textarea('body', null, ['class' => 'form-control']) !!}
            </div>

            <div class="form-group" >
                {!! Form::label('seen', 'บุคคลที่สามารถเห็นประกาศ') !!}
                <div class="checkbox" multiple>
                    @foreach($user_lists as $user_list)
                    <label><input type="checkbox" value="{{$user_list->id}}" name="seen[]">{{$user_list->name}}</label>&emsp;
                    @endforeach()
                </div>
            </div>

            <footer class="col-md-12 text-right">
                <div class="form-group align-center">
                    {!! Form::submit('ตกลง', ['class' => 'btn_back btn_crud1']) !!}
                </div>
            </footer>
            {!! Form::close() !!}
        </div>
    </div>
</body>

@endsection