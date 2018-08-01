@extends('layouts.user')

@section('content')

<head>


</head>


<body >

  <div class="container font " >
    <h2>
      ประกาศบริษัท
    </h2>
    <hr>
    @if($some_notice == 0)

    <div class="jumbotron text-center " style=" background-color:#">
      <h1 class="w3-xxlarge w3-text-white">        
        <font color="black">ยังไม่มีประกาศ</font>        
      </h1>      
    </div>

    @else
    
    @foreach($some_notice as $notice)
    
    <div class="kk">
      <div class="headnotice">
        {{$notice->topic}}</div>

        <div class="bodynotice p" id="mylayout_2">{{$notice->body}}</div>

        <div class="footernotice">

          ประกาศเมื่อวันที่ {{ $notice->updated_at->format('d/m/Y') }}

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