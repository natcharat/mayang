@extends('layouts.admin')
@section('content')
<!-- Report -->
<body>
<div class="container">

    <h2>รายงานการเข้า-ออกงาน</h2>
    <hr><br>
    <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>ชื่อ</th>
                <th>วันที่</th>
                <th>เวลาเข้า</th>
                <th>เวลาออก</th>
                <th>สถานะ</th>
            </tr>
        </thead>
        <tbody>
            @foreach($data as $d)
            <tr>
                <td>{{ $d->name }}</td>
                <td>{{ $d->date }}</td>
                <td>{{ $d->time_in }}</td>
                <td>{{ $d->time_off }}</td>
                <td>มา</td>
            </tr>
            @endforeach

        </tbody>

    </table>
</div>
 <script type="text/javascript">
        $(document).ready(function() {
            $('#example').DataTable( {
                dom: 'Bfrtip',
                buttons: [
                {
                    extend: 'pdfHtml5',
                    orientation: 'portrait',
                    pageSize: 'A4'
                }
                ]
            } );
        } );
    </script>

</body>
@endsection