ventureApp.controller('homepageController', function($scope, $rootScope, $sanitize, $state, Auth) {
	//Redirect to admin if logged in
/*
	if(sessionStorage.authenticated === 'true') {
		$state.go('admin');
	}
*/
	$scope.login = {};
	
	$scope.loginPost = function() {
		Auth.login({
			'email': 	$sanitize($scope.login.email),
			'password':	$sanitize($scope.login.password)
		}).then(function() {
			//console.log('here');
			$state.go('admin');
		});
	}
});