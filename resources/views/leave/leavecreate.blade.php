@extends('layouts.user')

@section('content')

<body class="font1">

  <div class="container">
    <div class="form-style-2">
      <div class="form-style-2-heading">แบบฟอร์มลางานบริษัท Tecmove</div>


      <div class="container" style="background-color:">    

        <div class="row divhead" style="background-color:#EF6924">
          <div class="col-md-4"></div>
          <div class="form-group col-md-4" style="font-family:'Kanit'" >
            <center>
              <font size="8" color="white"><br>แบบคำขอลางาน<br></font><br>
            </center>
          </div>
        </div>
        <br><br>
        

        <div style="font-family:'Kanit'" >
          @if($errors->any())
          <ul class="alert alert-danger">
            @foreach($errors->all() as $error)
            <center>
              <font size="4">
                <span class="glyphicon glyphicon-warning-sign"></span>
                -{{ $error }}-
                <span class="glyphicon glyphicon-warning-sign"></span>
              </font>
            </center>
            @endforeach
          </ul>
          @endif
        </div>
        <div class="form-style-2-heading"></div>
        
        <form method="post" action="{{url('add')}}" enctype="multipart/form-data">
          @csrf

          <div class="row" style="font-family:'Kanit'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="sel1"><font color="" size="4">ประเภทการลา:</font></label>
              <select class="form-control" id="sel1" size="1" name="type">
                <option value="ลาป่วย">ลาป่วย</option>
                <option value="ลากิจ">ลากิจ</option>
                <option value="ลาคลอด">ลาคลอด</option>
                <option value="ลาพักร้อน">ลาพักร้อน</option>
              </select>
            </div>
          </div>
          

          <div class="row"  style="font-family:'Kanit'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <font color="" size="4"><label for="name">ชื่อ:</label></font>
              <input type="text" class="form-control" name="name" value="{{$name}}">
            </div>
          </div>

          <div class="row" style="font-family:'Kanit'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="sel1"><font color="" size="4">ตำแหน่ง:</font></label>
              <input type="text" class="form-control" name="position" value="{{$position}}">              
            </div>
          </div>

          <div class="row" style="font-family:'Kanit'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <font size="4">
              {!! Form::label('start', 'เริ่มลาวันที่: ') !!}
              {!! Form::input('start', 'start',\Carbon\Carbon::now()->format('d-m-Y'),['class'=>'form-control']) !!}

              {!! Form::label('stop', 'ถึง วันที่: ') !!}
              {!! Form::input('stop', 'stop',\Carbon\Carbon::now()->format('d-m-Y'),['class'=>'form-control']) !!}
              </font>
            </div>
          </div>    

          <div class="row" style="font-family:'Kanit'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <font color="" size="4"><label for="detail">detail:</label></font>
              <textarea name="detail" cols="40" rows="4"></textarea>
            </div>
          </div> 

          <div class="row" style="font-family:'Kanit'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <font color="" size="4"><label for="img">แนบไฟล์รูปภาพ:</label></font>
              <input type="file" name="img" > 
            </div>
          </div>
          <div class="form-style-2-heading"></div> 

          <div class="row" style="font-family:'Pattaya'">

            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <button  type="submit" class="w3-button w3-indigo">
                <font size="4" class="font1" color="white">ส่งแบบคำขอลางาน</font>
              </button>

            </form>

            <a href="timerecord"class="w3-button w3-orange">
              <font  size="4" class="font1">
                กลับหน้าหลัก
              </font>
            </a>




          </div>
        </div>

      </div>
      <br><br>

    </body>


    @endsection   