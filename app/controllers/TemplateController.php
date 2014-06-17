<?php

class TemplateController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Template::get());
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
		Template::create(array(
			'name'=>Input::get('name'),
			'content'=>Input::get('content'),
			'config'=>Input::get('config'),
			'user_id'=>Auth::user()->id
		));
		
		return Template::json(array('success'=>true));
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
		Template::destroy($id);
		return Response::json(array('success'=>true));
	}


}
