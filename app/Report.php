<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Report extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'dailytime';

    protected $fillable = [
        'Name', 'date','In', 'out'
    ];
}
