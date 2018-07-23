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
//Authentication login
Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home')->middleware('user');
Route::get('/adminhome', 'AdminsController@index')->middleware('admin');


// Report
Route::get('report', 'ReportController@report');

// Request
Route::get('request', 'BoxController@index');
Route::get('detail_leave/{id}', 'BoxController@detail')->name('request.detail');

// Approve & Disapprove
Route::get('approve/{id}', 'BoxController@approve')->name('request.approve');
Route::get('disapprove/{id}', 'BoxController@disapprove')->name('request.disapprove');

//timerecord
Route::get('timerecord', 'TimeController@Index');
Route::get('time_in', 'TimeController@in');
Route::get('time_off', 'TimeController@off');

Route::get('add','LeaveController@create');
Route::post('add','LeaveController@store');
Route::get('request','BoxController@index');

Route::delete('{id}','LeaveController@destroy');

Route::get('Notice','NoticeController@index');










