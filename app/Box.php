<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Box extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'leave';

    protected $fillable = [
        'name', 'position','start', 'stop', 'detail', 'type', 'status', 'img', 'updated_at', 'created_at'
    ];
}
