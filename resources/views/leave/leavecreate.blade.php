@extends('layouts.user')

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

    <div class="column left">
      <img class="img img-responsive" src="{{asset('img/user01.png')}}">
    </div>

    <br>

    <div class="column right">
      <h3>
        กรอกคำขอลางาน
      </h3>

      <hr>

      <div class="section-form">
        {!! Form::open(['route' => 'leave.store', 'method' => 'post', 'files' => true]) !!}

        <div class="form-group">
          <div class="row">
            <div class="col-md-12">

              {!! Form::label('type', 'ประเภทการลา') !!} <br>
              {!! Form::select('type' ,['ลาป่วย' => 'ลาป่วย', 'ลากิจ' => 'ลากิจ', 'ลาพักร้อน' => 'ลาพักร้อน'], null) !!}
            </div>
            <div class="col-md-6">
              
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-md-6">
              {!! Form::label('name', 'ชื่อผู้ใช้') !!}
              {!! Form::text('name', $name, ['class' => 'form-control']) !!}
            </div>
            <div class="col-md-6">
              {!! Form::label('position', 'ตำแหน่ง') !!}
              {!! Form::text('position', $position, ['class' => 'form-control']) !!}
            </div>
          </div>
        </div>


        <div class="form-group">
          <div class="row">
            <div class="col-md-6">
              {!! Form::label('start', 'เรื่มลาวันที่: ') !!}

              {!! Form::input('start', 'start',\Carbon\Carbon::now()->format('d-m-Y'),['class'=>'form-control']) !!}

            </div>
            
            <div class="col-md-6" style="">
              {!! Form::label('stop', 'ถึง วันที่: ') !!}
              {!! Form::input('stop', 'stop',\Carbon\Carbon::now()->format('d-m-Y'),['class'=>'form-control']) !!}
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col-md-6">
              {!! Form::label('detail', 'รายละเอียด') !!}
              {!! Form::textarea('detail','', ['class' => 'form-control', 'rows' => 2, 'cols' => 40]) !!}      
            </div>
            <div class="col-md-6">
              <label for="img">แนบไฟล์รูปภาพ:</label>
              <input type="file" name="img" >
            </div>
          </div>
        </div>

        <footer class="col-md-12 text-right">
          <div class="form-group align-center">
            {!! Form::submit('ตกลง', ['class' => 'btn_crud btn_crud1', 'style' => 'font-size: 16px']) !!}
            {!! Form::close() !!}
          </div>
        </footer>
      </div>
    </div>
  </div>
</body>


@endsection   