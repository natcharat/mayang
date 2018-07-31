@extends('layouts.user')

@section('content')

<head>


</head>


<body >
  <br><br>
  <div class="container font " >
    <div class="text-center divhead">
      <h1 class="w3-xxlarge w3-text-white">        
        <b>ประกาศบริษัท TECMOVE</b>        
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

    <div class="pane font" >
      <div class="panel-heading" style="background-color: #3C4254">       
        <FONT SIZE="3" Color="white">
          <P Align=right>{{$notice->updated_at}}&nbsp</P>         
        </FONT>
        <FONT SIZE="5.5" Color="white">                 
          <B>&nbsp {{$notice->topic}}</B>
        </FONT>

      </div>

      <div class="panel-body p" id="mylayout_2">
        <font color="">        
          {{$notice->body}}        
        </font>
      </div>

      <div class="panel-footer" style="background-color: #8A8E98">
        <P Align=right>
          <a href="{{ route('notice.show_user',$notice->id) }}" class="crud btn_crud btn_crud4">อ่านเพิ่ม</a>   
        </P>
      </div>

    </div><br>
    @endforeach
    @endif



  </div>

</body>
@endsection