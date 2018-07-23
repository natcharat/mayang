@extends('layouts.user')

@section('content')

<style>
.button {
    background-color: #636876;
    type: submit;
}
</style>

<body>
	<br><br><br>
	<div class="container">
		<div class="row">
			<center>

				<script>
					function startTime() {
						var today = new Date();
						var h = today.getHours();
						var m = today.getMinutes();
						var s = today.getSeconds();
						m = checkTime(m);
						s = checkTime(s);
						document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
						var t = setTimeout(startTime, 500);
					}
					function checkTime(i) {
                	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                	return i;
            		}
        		</script>

        		<font style="color: #3C4254" size="30px">
        			<body onload="startTime()">
        				<div id="txt"></div>
        			</body>
        		</font>
    		</center>
    	</div>

    	<br><br>
    	<a href="{{ url('time_in') }}">
    		<button class="click" id="in_btn" onclick="press_in()">
    			TIME IN
    		</button>
    	</a>
    	<script>
    		document.getElementById("in_btn").onclick = function() {
				//disable
				this.disabled = true;

				//do some validation stuff
			}
		</script>

		<!-- <script>

		// Demo using plain javascript
		var button = document.getElementById("in_btn");
		var clickBtn = document.getElementsByClassName('click')[0];

		// Disable the button on initial page load
		button.disabled = false;

		//add event listener
		clickBtn.addEventListener('click', function(event) {
			button.disabled = !button.disabled;
		});

		button.addEventListener('click', function(event) {
			alert('Enabled!');
		});
	</script> -->

	<div class="click">Click me to Disable/Enable a html button</div>
	<div class="showup">
		<input id="Button" type="button" value=" + " style="background-color:grey" />
	</div>

	<script>

		// Demo using plain javascript
		var button = document.getElementById("Button");
		var clickBtn = document.getElementsByClassName('click')[0];

		// Disable the button on initial page load
		button.disabled = true;

		//add event listener
		clickBtn.addEventListener('click', function(event) {
			button.disabled = !button.disabled;
		});

		button.addEventListener('click', function(event) {
			alert('Enabled!');
		});
	</script>



	<a href="{{ url('time_off') }}">
		<button class="click" id="off_btn" onclick="myBtn()">
			TIME OFF
		</button>
	</a>

	<script>
		function press_in() {
			document.getElementById("in_btn").disabled = true;	
		}
	</script>

</div>
</body>
@endsection