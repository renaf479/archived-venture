ventureApp.controller('loginController', function($scope, $sanitize, $state, Auth) {
	$scope.login = {};
	
	$scope.loginPost = function() {
		Auth.login({
			'email': 	$sanitize($scope.login.email),
			'password':	$sanitize($scope.login.password)
		}).then(function() {
			//Redirect to ADMIN page/state
			$state.go('admin');
		});
	}

});