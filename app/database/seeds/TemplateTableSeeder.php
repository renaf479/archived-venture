<?php
	
	class TemplateTableSeeder extends Seeder {
		
		public function run() {
			DB::table('templates')->delete();
			
			Template::create(array(
				'name'=>'Overlay',
				'content'=>'',
				'config'=>'',
				'user_id'=>'1'
			));
			
			Template::create(array(
				'name'=>'Pushdown',
				'content'=>'',
				'config'=>'',
				'user_id'=>'1'
			));
		}
	}