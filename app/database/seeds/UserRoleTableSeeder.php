<?php
	
	class UserRoleTableSeeder extends Seeder {
		
		public function run() {
			DB::table('user_roles')->delete();
			
			UserRole::create(array(
				'user_id'=>'1',
				'role_id'=>'1'
			));
		}
	}