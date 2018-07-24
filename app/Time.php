<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Time extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'timerecord';

    protected $fillable = [
        'name', 'time_in','time_out', 'date'
    ];
}
