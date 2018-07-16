<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::defaultStringLength(191);
       Schema::create('users', function (Blueprint $table) {
        $table->increments('id');
        $table->string('username');
        $table->string('password');
        $table->string('name');
        $table->string('position');
        $table->rememberToken();
    });
   }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
