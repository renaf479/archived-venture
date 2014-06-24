<?php

class AuthenticationController extends \BaseController {

	/**
	 * Check to see if user is logged in
	 * @return Response
	 */
	public function index()
	{
		return Response::json([
			'auth'=>Auth::check(),
			'user'=>(Auth::check())? Auth::user(): false 
			],
			202
		);
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function login()
	{
		$field = filter_var(Input::get('email'), FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
		
		$credentials	= array(
			$field=>Input::get('email'),
			'password'=>Input::get('password')
		);
		
		if(Auth::attempt($credentials)) {
			return Response::json([
				'auth'=>Auth::check(),
				'user'=>(Auth::check())? Auth::user(): false 
				],
				202
			);
		} else {
			return Response::json([
				'flash'=>'Login failed'],
				401
			);
		}		
	}

	/**
	* Logs out an user
	*/
	public function logout() {
		Auth::logout();
		return Response::json([
			'test'=>'testing'
		],
		200);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
