<?php 
	
	class Dashboard extends Eloquent {
		protected $fillable = array('name', 'content', 'config', 'user_id');
		
		public function dashboard_widgets() {
			return $this->hasMany('DashboardWidget');
		}
	}