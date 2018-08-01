@extends('layouts.admin')
@section('content')

<body style="font-family: 'Kanit', sans-serif;">

    @if (session('msg'))
    <div class="alert alert-success" id="success-alert">
        {{ session('msg') }}
    </div>
    @endif

    <div class="container">
       <h2>จัดการ IP</h2>
       <hr><br>
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
        <div class="col-md-6">
            <br>
            {!! Form::open(['route' => 'ip.store', 'method' => 'post']) !!}
            <div id="rcorners1">
                <br>
                <input type="hidden" name="ip" value="" id = "input-ip">
                <p class="font-ip2">
                    IP ที่ใช้ตรวจการลงเวลา :
                </p>

                <br>
                <p class="font-ip3">
                    {{$ip->ip}}
                </p>

                <br><br><br>

                <i class="font-ip1 fa fa-info-circle"></i>
                <p class="font-ip1">
                    IP อินเทอร์เน็ตที่ใช้อยู่ขณะนี้ :
                </p>
                <p class="font-ip1" id="ip">

                </p>
                <div class="col-md-12 text-right">
                    <br>
                    {!! Form::submit('นำไปใช้', ['class' => 'crud btn_crud btn_crud1']) !!}
                </div>
            </div>
            {!! Form::close() !!}

        </div>
        <div class="col-md-6">
            <br>
            <div class="section-form">
                {!! Form::open(['route' => 'ip.store', 'method' => 'post', 'files' => true]) !!}
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-9">
                        <div class="form-group">
                            แก้ไข IP{!! Form::text('ip', null, ['class' => 'form-control']) !!}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-9 text-right">
                        <br>
                        {!! Form::submit('บันทึก', ['class' => 'crud btn_crud btn_crud1']) !!}
                        {!! Form::close() !!}
                    </div>

                </div>

            </div>

        </div>
    </div>
</div>

<script type="text/javascript">

    $.ajax({
        type: 'GET',
        url: 'https://json.geoiplookup.io',
        success: function (res) {
            console.log(res.ip);
            $("#ip").text(res.ip);
            $("#input-ip").val(res.ip);
        }
    })
</script>

<script type="text/javascript">
    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
        $("#success-alert").slideUp(500);
    });
</script>

</body>


@endsection