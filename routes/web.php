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

// Change Password User
Route::get('/changePasswordUser','ChangePasswordController@showChangePasswordFormUser');
Route::post('/changePasswordUser','ChangePasswordController@changePasswordUser')->name('changePassword');
// Change Password Admin
Route::get('/changePasswordAdmin','ChangePasswordController@showChangePasswordFormAdmin');
Route::post('/changePasswordAdmin','ChangePasswordController@changePasswordAdmin')->name('changePassword');

// Report
Route::get('report', 'ReportController@report');

// Request
Route::get('request', 'BoxController@index');
Route::get('detail_leave/{id}', 'BoxController@detail')->name('request.detail');

// Approve & Disapprove
Route::get('approve/{id}', 'BoxController@approve')->name('request.approve');
Route::get('disapprove/{id}', 'BoxController@disapprove')->name('request.disapprove');

//timerecord

Route::get('/timerecord', 'TimeController@index');  
Route::get('/time_in', 'TimeController@in');
Route::get('/time_off', 'TimeController@off');

//create notice
Route::get('/notice','NoticeController@index')->name('notice.crud')->middleware('admin');
Route::get('/notice/create','NoticeController@create')->name('notice.create')->middleware('admin');
Route::post('/notice/create/store','NoticeController@store')->name('notice.store')->middleware('admin');
Route::get('/notice/edit/{id}','NoticeController@edit')->name('notice.edit')->middleware('admin');
Route::get('/notice/show/{id}','NoticeController@show')->name('notice.show')->middleware('admin');
Route::get('/notice/delete/{id}','NoticeController@delete')->name('notice.delete')->middleware('admin');
Route::patch('notice/update/{id}','NoticeController@update')->name('notice.update')->middleware('admin');
Route::get('/notice/show_user/{id}','NoticeController@show_user')->name('notice.show_user')->middleware('user');

//create user
Route::get('/user','UserController@index')->name('user.crud');
Route::get('/user/create','UserController@create')->name('user.create');
Route::post('/user/create/store','UserController@store')->name('user.store');
Route::get('/user/edit/{id}','UserController@edit')->name('user.edit');
Route::get('/user/show/{id}','UserController@show')->name('user.show');
Route::get('/user/delete/{id}','UserController@delete')->name('user.delete');
Route::patch('user/update/{id}','UserController@update')->name('user.update');

// send leave
Route::get('add','LeaveController@create');
Route::post('add','LeaveController@store');

Route::get('Notice_show','NoticeController@show_notice')->middleware('user');

//manage ip
Route::get('/ip/manage','IpController@index')->name('ip.manage');
Route::post('/ip/manage/store','IpController@store')->name('ip.store');








