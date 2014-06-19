<?php
	
	class UsersController extends BaseController {
	
		public function getRegister() {
			return View::render('index');
		}
	}