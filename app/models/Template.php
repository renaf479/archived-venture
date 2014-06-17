<?php 
	
	class Template extends Eloquent {
		protected $fillable = array('name', 'content', 'config', 'user_id');
		protected $table = 'templates';
	}