<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notice_list extends Model
{
    protected $fillable = ['user_id','notice_id'];
    public function user(){
        return $this->belongsTo('App\User');
    }

    public function notice(){
        return $this->belongsTo('App\Notice');
    }

}
