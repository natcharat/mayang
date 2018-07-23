<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>
	<br><br><br>
	<div class="container">

		<br><br>
		<a href="{{ url('time_in') }}">
			<button id="in_btn" onclick="press_in()" class="btn btn-xs btn-info">
				TIME IN
			</button>
		</a>



		<a href="{{ url('time_off') }}">
			<button id="off_btn" onclick="myBtn()" class="btn btn-xs btn-info">
				TIME OFF
			</button>
		</a>

		<script>
			function press_in() {
				
				if () {

				}
				document.getElementById("in_btn").disabled = true;
			}
		</script>

	</div>
</body>
</html>