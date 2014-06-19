ventureApp.controller('homepageController', function($scope, $sanitize, $state, Authenticate) {

	//Redirect to admin if logged in
	if(sessionStorage.authenticated === 'true') {
		$state.go('admin');
	}

	$scope.login = {};
	
	$scope.loginPost = function() {
		Authenticate.login({
			'email': 	$sanitize($scope.login.email),
			'password':	$sanitize($scope.login.password)
		}, function() {
			$state.go('admin');
			//$location.path('/admin');//Needs to be changed with state
		}, function(response) {
			$scope.flash = response.data.flash
		});
	}
});