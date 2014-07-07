ventureApp.controller('dashboardListCtrl', function($scope, $rootScope, $sanitize, $state, API) {
	$rootScope.headerExtend	= true;
	
	$scope.createForm = {};
	$scope.dashboardModify	= {};
	$scope.dashboardSide 	= {
		sideNav: false
	};
/*
	$scope.createForm	= {};
	$scope.dashboards 	= {};
	$scope.showForm 	= false;
*/
	

	API.get('dashboards').then(function(data) {
		$scope.dashboards = data;
	})
	
	$scope.toggle = function() {
		var sideNav		= !$scope.dashboardSide.sideNav,
			template 	= (sideNav)? 'admin/dashboard/list.create.html': '';
			
		$scope.dashboardSide = {
			sideNav: 		sideNav,
			sideNavClass:	'sideNav-create',
			template:		template
		}
	}
	
	$scope.info = function(model) {
		$scope.dashboardModify = model;
		$scope.dashboardSide = {
			sideNav: 		true,
			sideNavClass:	'sideNav-info',
			template:		'admin/dashboard/list.info.html'
		}
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