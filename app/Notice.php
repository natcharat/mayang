<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    protected $fillable = ['topic','body'];
    protected $date = ['updated_at'];

    public function users(){
        return $this->hasMany('App\User');
    }
}
