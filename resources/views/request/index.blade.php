<!DOCTYPE html>
<html>
<head>
    <style>
    a:link, a:visited {
        background-color: red;
        color: black;
        padding: 14px 25px;
        text-decoration: none;
        display: inline-block;
        width: 200px;
    }


    a:hover, a:active {
        background-color: green;
    }
</style>
</head>
<body>
    @foreach($requests as $r)

    <a href="{{ route('request.detail', $r->id) }}">ชื่อ: {{ $r->name }}
        <br>ตำแหน่ง: {{ $r->position }} 
        <br>ประเภท: {{ $r->type }}
    </a>
    @endforeach

</body>
</html>
