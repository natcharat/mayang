<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ip extends Model
{
    public $table = "ip";
    protected $fillable = ['ip'];
    protected $date = ['updated_at'];
}
