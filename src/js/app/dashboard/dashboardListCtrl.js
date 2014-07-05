ventureApp.controller('dashboardListCtrl', function($scope, $rootScope, $sanitize, $state, API) {
	$rootScope.headerExtend	= true;

/*
	$scope.createForm	= {};
	$scope.dashboards 	= {};
	$scope.showForm 	= false;
*/
	

	API.get('dashboards').then(function(data) {
		$scope.dashboards = data;
	})
	
	$scope.create = function() {
		$scope.dashboardCreate = 'admin/dashboard/create.html';
	}	
	
/*
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
*/
	
	/*
			$scope.submitForm = function(isValid) {

			// check to make sure the form is completely valid
			if (isValid) {
				alert('our form is amazing');
			}

		};
	*/
});