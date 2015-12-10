<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');

Route::get('home', 'HomeController@index');

Route::get('processes/cpu', 'ProcessController@getCpuUsage');

Route::get('users/genGAqr', 'UserController@generateAuthenticatorKey');
Route::get('users/consoleKey', 'UserController@getConsoleApiKey');

Route::resource('users', 'UserController');

Route::resource('domains', 'DomainController');

Route::resource('domains.vhosts', 'VhostController');

Route::resource('domains.mails', 'MailController');

Route::resource('domains.records', 'RecordController');

Route::resource('domains.ftpusers', 'FtpUserController');

Route::resource('processes', 'ProcessController');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
