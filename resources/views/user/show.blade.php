@extends('layouts.admin')

@section('content')

<body>
    <div class="container">

        <div class="column left">
            <img class="img img-responsive" src="{{asset('img/user01.png')}}">
        </div>

        <br>
        
        
        <div class="column right">
            <h3>
                <i class="far fa-address-book"></i>
                ข้อมูลของ {{$user->username}}
            </h3>

            <hr>
            
            <div class="row">
                <div class="col-md-6">
                    ชื่อ-นามสกุล : {{$user->name}}
                </div>
                <div class="col-md-6">
                    <i style="margin-right: 5px" class="fas fa-mobile-alt"></i>
                    {{ $user->tell }}
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    ตำแหน่ง : {{$user->position}}
                </div>
                <div class="col-md-6">
                    <i class="fas fa-envelope"></i>
                        {{ $user->email }}
                </div>
            </div>

            <br><br><br><br><br><br><br><br>
            
            <footer class="col-md-12 text-right">
                <a href="{{ route('user.crud') }}">
                    <button class="btn_back btn_crud4">
                        กลับ
                    </button>
                </a>
            </footer>
        </div>
    </div>
</div>
</body>
@endsection