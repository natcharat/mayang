<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<style>
html, body {
    background: url('img/morganblake7.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: 100% 100%;
}

button {
    background-color: #636876;
    color: white;
    padding: 10px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.fc {
    color: #3C4254;
}

div.card {
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 0px;
    opacity: 1;
    padding: 10px;
    height: 80vh;
}

.mayang_brand {
    /*padding: 20px 50px 50px 50px;*/
    color: #EF6924;
    font-size: 110px;

}
@media screen and (max-width: 1024px) {
    div.card {
        height: 550px;
    }
}
@media screen and (max-width: 993px) {
    div.card {
        height: 500px;
    }
    .mayang_brand {
        color: #EF6924;
        font-size: 85px;
}
@media screen and (max-width: 767px) {
    div.card {
        height: 725px;
    }
    .mayang_brand {
        color: #EF6924;
        font-size: 30px;
}
@media screen and (max-width: 415px) {
    div.card {
        height: 500px;
    }
    .mayang_brand {
        color: #EF6924;
        font-size: 50px;
}
</style>

<body>
    <div id="app">
        <main class="py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <br>
                                <center>
                                    <font class="mayang_brand">
                                        Ma-Yang
                                    </font>
                                </center>

                                <br><br><br>

                                <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                                    @csrf

                                    <div class="form-group row">
                                        <label for="username" class="fc col-sm-4 col-form-label text-md-right">{{ __('Username') }}</label>

                                        <div class="col-md-6">
                                            <input id="username" type="username" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}" name="username" value="{{ old('username') }}" required autofocus>

                                            @if ($errors->has('username'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('username') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password" class="fc col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                                        <div class="col-md-6">
                                            <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                            @if ($errors->has('password'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-6 offset-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                                <label class="fc form-check-label" for="remember">
                                                    {{ __('Remember Me') }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-0">
                                        <div class="col-md-8 offset-md-4">
                                            <button style="background-color: #EF6924" type="submit">
                                                {{ __('Login') }}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    </div>
</body>
</html>