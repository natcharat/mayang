<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
  <style> 
  html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
  
  #text_right { text-align:right; }
  word-wrap:break-word;
  div#mylayout_2{
    display:block;
    width:100px;
    border:1px solid #09C;
    background-color:#CFC;
    word-wrap:break-word;

  }
  .p {
   font-size:1.2em;
   line-height:3em;
   height:5em;
   border:3px solid #8A8E98;
   overflow: hidden;   
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;

 }
 .font{
  font-family: 'Kanit', sans-serif;
  font-size: ;
}
.divcurcle {
  border-radius: 25px;
  border: 2px solid #8A8E98;
  padding: 200px; 
  width: 200px;
  height: 150px;
}

</style>

</head>


<body >
  <br><br>
  <div class="container font " >
    <div class="jumbotron text-center" style=" background-color:#3c4254">
      <h1 class="w3-xxlarge w3-text-white">
        <span class="w3-padding w3-black w3-opacity-min font3" >
          <b>ประกาศบริษัท TECMOVE</b>
        </span> 
      </h1>      
    </div>

    @foreach($some_notice as $notice)

    <div class="pane font" >
      <div class="panel-heading" style="background-color: #8A8E98">       
        <P Align=right>date</P>
        <FONT SIZE="5"><B><P Align=left>{{$notice->topic}}</P></B></FONT>

      </div>

      <div class="panel-body p" id="mylayout_2">
        <font color="">        
          {{$notice->body}}        
        </font>
      </div>

      <div class="panel-footer" style="background-color: #8A8E98">
        <P Align=right>
          <a href="{{ route('notice.show_user',$notice->id) }}" class="btn btn-md btn-success">อ่านเพิ่ม</a>   
        </P>
      </div>

    </div><br>
    @endforeach




  </div>

</body>
</html>