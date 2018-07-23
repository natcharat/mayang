<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
 
Route::get('/notice','NoticeController@index')->name('notice.crud');
Route::get('/notice/create','NoticeController@create')->name('notice.create');
Route::post('/notice/create/store','NoticeController@store')->name('notice.store');
Route::get('/notice/edit/{id}','NoticeController@edit')->name('notice.edit');
Route::get('/notice/show/{id}','NoticeController@show')->name('notice.show');
Route::get('/notice/delete/{id}','NoticeController@delete')->name('notice.delete');
Route::patch('notice/update/{id}','NoticeController@update')->name('notice.update');

Route::get('/user','UserController@index')->name('user.crud');
Route::get('/user/create','UserController@create')->name('user.create');
Route::post('/user/create/store','UserController@store')->name('user.store');
Route::get('/user/edit/{id}','UserController@edit')->name('user.edit');
Route::get('/user/show/{id}','UserController@show')->name('user.show');
Route::get('/user/delete/{id}','UserController@delete')->name('user.delete');
Route::patch('user/update/{id}','UserController@update')->name('user.update');

Route::get('/test','NoticeController@test')->name('test');