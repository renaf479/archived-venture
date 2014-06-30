ventureApp.directive('globalHeader', function($window) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'platform/header.html',
		link: function(scope, element, attr) {
			//console.log(angular.element($window));
		}
	}
});