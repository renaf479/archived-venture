<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/


//Route::controller('users', 'UsersController');



//Homepage
Route::get('/', function() {
	//print_r(Auth::check());
	return View::make('index');
});

//Authentication
Route::group(array('prefix'=>'service'), function() {
	Route::resource('authenticate', 'AuthenticationController');
	Route::resource('authenticate/login', 'AuthenticationController@login');
	Route::resource('authenticate/logout', 'AuthenticationController@logout');
});

Route::group(array('prefix'=>'api'), function() {
	Route::resource('dashboards', 'DashboardController');
});


//API
/*
Route::get('profile', array('before' => 'auth', function()
{
    // Only authenticated users may enter...
}));


Route::group(array('prefix'=>'api'), function() {
	Route::resource('templates', 'TemplateController', 
		array('only'=>array('index', 'store', 'destroy')));
});
*/

//Catch-all
App::missing(function($exception) {
	return View::make('index');
});


/*
Route::get('/authtest', array('before' => 'auth.basic', function() {
    return View::make('hello');
}));
*/

