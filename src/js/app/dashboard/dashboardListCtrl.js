ventureApp.controller('dashboardListCtrl', function($scope, $sanitize, $state, API) {
	$scope.createForm	= {};
	$scope.dashboards 	= {};
	$scope.showForm 	= false;
	

	API.get('dashboards').then(function(data) {
		$scope.dashboards = data;
	})
	
	$scope.toggle = function() {
		$scope.createForm 	= {};
		$scope.showForm 	= !$scope.showForm;
	}
	
	$scope.create = function(isValid) {
		if(isValid) {
			API.save($scope.createForm, 'dashboards').then(function(response) {
				if(response.data.success) {
					$state.go('dashboard.editor', {'id':response.data.hash});;
				}
			});	
		}
	}
	
	/*
			$scope.submitForm = function(isValid) {

			// check to make sure the form is completely valid
			if (isValid) {
				alert('our form is amazing');
			}

		};
	*/
});