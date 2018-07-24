<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Leave extends Eloquent
{
	protected $connection = 'mongodb';
	protected $collection = 'leave';

	protected $fillable = [
		'name', 'position','start', 'stop', 'detail', 'img', 'type', 'status'
	];
}
