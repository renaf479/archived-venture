<?php

class DashboardController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Dashboard::where('user_id', Auth::user()->id)->get());
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$dashboard 	= Dashboard::create(array(
						'name'=>Input::get('name'),
						'user_id'=>Auth::user()->id
					));
		$hash		= PseudoCrypt::hash($dashboard->id);
		
		$update				= Dashboard::find($dashboard->id);
		$update->content 	= json_encode(array(
								'description'=>Input::get('description'),
								'hash'=>$hash
							));
		$update->save();

		return Response::json(array(
			'success'=>true,
			'hash'=>$hash
		));
/*
		Dashboard::create(array(
			'author' => Input::get('author'),
			'text' => Input::get('text')
		));

		return Response::json(array('success' => true));
*/
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
		Dashboard::destroy($id);

		return Response::json(array('success' => true));
	}


}
