<?php
	
	class RoleTableSeeder extends Seeder {
		
		public function run() {
			DB::table('roles')->delete();
			
			Role::create(array(
				'role'=>'Super Admin',
				'clearance'=>'0'
			));
			
			Role::create(array(
				'role'=>'Admin',
				'clearance'=>'1'
			));
			
			Role::create(array(
				'role'=>'User',
				'clearance'=>'2'
			));
		}
	}