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

//Route::get('domains/get_domains',  'DomainController@getDomains');

Route::resource('domains', 'DomainController');

Route::resource('domains.vhosts', 'VhostController');

Route::resource('domains.mails', 'MailController');

Route::resource('domains.records', 'RecordController');

Route::resource('domains.ftpusers', 'FtpUserController');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
