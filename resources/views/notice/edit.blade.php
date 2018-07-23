<!doctype html>
<head>
    <title>Edit Notice</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>
    <br><br>
    <div class="container">

        <h1>Edit Notice</h1>

        <div class="row"> 
            <footer class="col-md-12 text-right">
                <a href="{{ route('notice.crud') }}" class="btn btn-xs btn-danger"> back </a>
            </footer>
        </div>
        <br>

        <div class="section-form">
           {!! Form::model($notice, ['route' => ['notice.update', $notice->id], 'method' => 'patch']) !!}

           <div class="form-group">
            {!! Form::label('topic', 'topic') !!}
            {!! Form::text('topic', null, ['class' => 'form-control']) !!}
        </div>

        <div class="form-group">
            {!! Form::label('body', 'body') !!}
            {!! Form::textarea('body', null, ['class' => 'form-control']) !!}
        </div>

        <div class="form-group" >
            {!! Form::label('seen', 'บุคคลที่สามารถเห็นประกาศ') !!}
            <div class="checkbox" multiple>
                &emsp; @foreach($user_lists as $user_list)
                <label><input type="checkbox" value="{{$user_list->id}}" name="seen[]" 
                    @if (in_array($user_list->id, $keep_user)): ?
                        checked
                    @endif ? > {{$user_list->name}} </label>&emsp;
                @endforeach()
            </div>
        </div>

        <div class="form-group align-center">
            {!! Form::submit('Submit', ['class' => 'btn btn-primary']) !!}
        </div>
        {!! Form::close() !!}
    </div>

</div>

</body>

</html>