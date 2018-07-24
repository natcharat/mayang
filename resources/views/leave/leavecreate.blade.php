<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <meta charset="utf-8">
  <title>Laravel MongoDB CRUD Tutorial With Example</title>
  <link rel="stylesheet" href="{{asset('css/app.css')}}">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>  
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Datepicker - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link href="https://fonts.googleapis.com/css?family=Pattaya|Trirong" rel="stylesheet">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <link href="https://fonts.googleapis.com/css?family=Sriracha" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
    $( function() {
      $( "#datepicker" ).datepicker();
    } );
  </script>

  <style type="text/css">
  .w3-button {width:150px;height:55px}
  .form-style-2{
    max-width: 500px;
    padding: 20px 12px 10px 20px;
    font: 13px Arial, Helvetica, sans-serif;
  }
  .form-style-2-heading{
    font-weight: bold;
    font-style: italic;
    border-bottom: 2px solid #ddd;
    margin-bottom: 20px;
    font-size: 15px;
    padding-bottom: 3px;
  }
  .form-style-2 label{
    display: block;
    margin: 0px 0px 15px 0px;
  }
  .form-style-2 label > span{
    width: 100px;
    font-weight: bold;
    float: left;
    padding-top: 8px;
    padding-right: 5px;
  }
  .form-style-2 span.required{
    color:red;
  }
  .form-style-2 .tel-number-field{
    width: 40px;
    text-align: center;
  }

  .form-style-2 input.input-field, .form-style-2 .select-field{
    width: 48%; 
  }
  .form-style-2 input.input-field, 
  .form-style-2 .tel-number-field, 
  .form-style-2 .textarea-field, 
  .form-style-2 .select-field{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    border: 1px solid #C2C2C2;
    box-shadow: 1px 1px 4px #EBEBEB;
    -moz-box-shadow: 1px 1px 4px #EBEBEB;
    -webkit-box-shadow: 1px 1px 4px #EBEBEB;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    padding: 7px;
    outline: none;
  }
  .form-style-2 .input-field:focus, 
  .form-style-2 .tel-number-field:focus, 
  .form-style-2 .textarea-field:focus,  
  .form-style-2 .select-field:focus{
    border: 1px solid #0C0;
  }
  .form-style-2 .textarea-field{
    height:100px;
    width: 55%;
  }
  .form-style-2 input[type=submit],
  .form-style-2 input[type=button]{
    border: none;
    padding: 8px 15px 8px 15px;
    background: #FF8500;
    color: #fff;
    box-shadow: 1px 1px 4px #DADADA;
    -moz-box-shadow: 1px 1px 4px #DADADA;
    -webkit-box-shadow: 1px 1px 4px #DADADA;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
  }
  .form-style-2 input[type=submit]:hover,
  .form-style-2 input[type=button]:hover{
    background: #EA7B00;
    color: #fff;
  }
  .font1{
    font-family: 'Kanit', sans-serif
    font-size: 15px;

  }
  
</style> 
</head>


<body>

  <div class="container" style="background-color:">
    <div class="form-style-2">
      <div class="form-style-2-heading">แบบฟอร์มลางานบริษัท Tecmove</div>


      <div class="container" style="background-color:">    

        <div class="row" style="background-color:#FFA500">
          <div class="col-md-4"></div>
          <div class="form-group col-md-4" style="font-family:'Kanit'" >
            <center>
              <font size="6"><h1>กรอกแบบคำขอลางาน</h1></font><br>
            </center>
          </div>
        </div>
        <br><br>
        

        <div style="font-family:'Sriracha'" >
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

          <div class="row" style="font-family:'Sriracha'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="sel1"><font color="" size="3">ประเภทการลา:</font></label>
              <select class="form-control" id="sel1" size="1" name="type">
                <option value="ลาป่วย">ลาป่วย</option>
                <option value="ลากิจ">ลากิจ</option>
                <option value="ลาคลอด">ลาคลอด</option>
                <option value="ลาพักร้อน">ลาพักร้อน</option>
              </select>
            </div>
          </div>

          <div class="row"  style="font-family:'Sriracha'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <font color="" size="3"><label for="name">ชื่อ:</label></font>
              <input type="text" class="form-control" name="name">
            </div>
          </div>
          <div class="row" style="font-family:'Sriracha'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <label for="sel1"><font color="" size="3">ตำแหน่ง:</font></label>
              <select class="form-control" id="sel1" size="1" name="position">
                <option value="Developer">Developer</option>
                <option value="Creative">Creative</option>
                <option value="CEO">CEO</option>
                <option value="Planer">Planer</option>
              </select>
            </div>
          </div>

          <div class="row" style="font-family:'Sriracha'">
            <div class="col-md-4"></div>
            <div class="form-group col-md-4">
              <p><font color="green" size="4">start: </font><input name="start" class="form-control" type="text" id="datepicker">

                <font color="red" size="4">stop:</font> <input name="stop" type="text" id="datepicker" class="form-control" ></p>
              </div>
            </div>    

            <div class="row" style="font-family:'Sriracha'">
              <div class="col-md-4"></div>
              <div class="form-group col-md-4">
                <font color="" size="4"><label for="detail">detail:</label></font>
                <textarea name="detail" cols="40" rows="4"></textarea>
              </div>
            </div> 

            <div class="row" style="font-family:'Sriracha'">
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
                <button type="submit" class="w3-button w3-indigo">
                  <font size="4">ส่งแบบคำขอลางาน</button>
                  </form>

                  <INPUT class="w3-button w3-orange" TYPE="button" VALUE="ยกเลิกคำขอลางาน" onClick="history.back()">
                </font>

              </div>
            </div>
            
          </div>
          <br><br>

        </body>


        </html>