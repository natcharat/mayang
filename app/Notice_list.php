<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notice_list extends Model
{
    public function user(){
        return $this->belongsTo('App\User');
    }

    public function notice(){
        return $this->belongsTo('App\Notice');
    }

}
