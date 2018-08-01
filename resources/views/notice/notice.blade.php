@extends('layouts.user')

@section('content')

<head>


</head>


<body >
  
  <div class="container font " >
    <div class="text-center divhead">
      <h1 class="w3-xxlarge w3-text-white">        
        ประกาศบริษัท TECMOVE       
      </h1>      
    </div>
    @if($some_notice == 0)

    <div class="jumbotron text-center " style=" background-color:#">
      <h1 class="w3-xxlarge w3-text-white">        
        <font color="black"><b>ยังไม่มีประกาศ</b></font>        
      </h1>      
    </div>

    @else
    
    @foreach($some_notice as $notice)
    
    <div class="panel panel-primary">
      <div class="panel-heading font_topic">{{$notice->topic}}</div>
      <div class="panel-body p" id="mylayout_2">{{$notice->body}}</div>
      <div class="panel-footer">
        {{$notice->updated_at}}
        <a href="{{ route('notice.show_user',$notice->id) }}" class="link time">อ่านเพิ่มเติม
        </a>        
      </div>
    </div>

    <br>
    @endforeach
    @endif

  </div>

</body>
@endsection