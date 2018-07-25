<!doctype html>
<head>
    <title>Creat Notice</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('js/app.js')}}">
</head>

<body style="font-family: 'Kanit', sans-serif;">

    <br><br>
    <div class="container">

        <h1>Create Notice</h1>

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
        
        <div class="row"> 
            <footer class="col-md-12 text-right">
                <a href="{{ route('notice.crud') }}" class="btn btn-xs btn-danger"> back </a>
            </footer>
        </div>
        <br>
        
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
                    {!! Form::submit('Submit', ['class' => 'btn btn-primary']) !!}
                </div>
            </footer>
            {!! Form::close() !!}
        </div>

    </div>

</body>

</html>