<?php namespace App\Http\Controllers;

use Auth;
use App\Vhost;

class HomeController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Home Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders your application's "dashboard" for users that
	| are authenticated. Of course, you are free to change or remove the
	| controller as you wish. It is just here to get your app started!
	|
	*/

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('auth');
	}

	/**
	 * Show the application dashboard to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
            $user = Auth::user();
            $roles = [];
            foreach($user->roles as $role){
                array_push($roles,$role->name);
            }
            return view('ext')->with('domains',$user->domains)->with('user_roles', $roles);
	}
}
