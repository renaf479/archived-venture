<?php 
	
	class Dashboard extends Eloquent {
		protected $fillable = array('name', 'content', 'config', 'user_id');
		protected $table 	= 'dashboards';
	}