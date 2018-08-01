
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
                <br>
                <a rel="group_1" href="#select_all" style="background-color: #898e89;color: white; padding: 1px 7px;border-radius: 4px; text-decoration: none;">Select All</a>
                <a rel="group_1" href="#select_none" style="background-color: #898e89;color: white; padding: 1px 7px;border-radius: 4px; text-decoration: none;">Select None</a>
                <br><br>

                <div class="checkbox" multiple>
                    <fieldset id="group_1">
                     @foreach($user_lists as $user_list)
                     <label><input type="checkbox" value="{{$user_list->id}}" name="seen[]">{{$user_list->name}}</label>&emsp;
                     @endforeach()
                 </fieldset>

             </div>
         </div>

         <footer class="col-md-12 text-right"> 

            <div class="form-group align-center">
                <a href="{{ route('notice.crud') }}" class="crud btn_crud btn_crud6">
                    กลับ
                </a>
                {!! Form::submit('ตกลง', ['class' => 'btn_back btn_crud1', 'style' => 'dispaly: inline']) !!}
            </div>
        </footer>
        {!! Form::close() !!}

    </div>
</div>
</body>

<script type="text/javascript">
    $(document).ready( function() {
        // Select all
        $("A[href='#select_all']").click( function() {
            $("#" + $(this).attr('rel') + " INPUT[type='checkbox']").attr('checked', true);
            return false;
        });
        // Select none
        $("A[href='#select_none']").click( function() {
            $("#" + $(this).attr('rel') + " INPUT[type='checkbox']").attr('checked', false);
            return false;
        });
    });
</script>



@endsection