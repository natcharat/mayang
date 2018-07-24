<!DOCTYPE html>
<html>
<head>
    <title></title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>
<body>
    @foreach($detail as $d)
    <h1>ชื่อ: {{ $d->name }}
        <br>ตำแหน่ง: {{ $d->position }}
        <br>ลาตั้งแต่วันที่ &nbsp {{ $d->start }} &nbsp ถึง {{ $d->stop }}
        <br>ประเภทการลา: {{ $d->type }}
        <br>สาเหตุ: {{ $d->detail }}
        <br>
        @if($d->img)
        <center>
            <img src="{{ url($d->img)}}"  class="img-responsive" style="width:100%;height:100%">
        </center><br><br>

        @endif
    </h1>
    @endforeach

    <!-- approve & disapprove -->
    <a class="btn btn-primary" href="{{ route('request.disapprove', $d->id) }}" role="button">ไม่อนุมัติ</a>&nbsp&nbsp&nbsp
    <a class="btn btn-primary" href="{{ route('request.approve', $d->id) }}" role="button">อนุมัติ</a>

</body>
</html>