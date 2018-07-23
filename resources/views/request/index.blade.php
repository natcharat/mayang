@extends('layouts.admin')

@section('content')
<head>
  
</head>
<body>

  <div class="container" >
    @foreach($requests as $r)

    <a href="{{ route('request.detail', $r->id) }}">ชื่อ: {{ $r->name }}
      <br>ตำแหน่ง: {{ $r->position }} 
      <br>ประเภท: {{ $r->type }}
    </a>
    <br><br>


    @endforeach
  </div>

</body>

@endsection


