ventureApp.directive('globalHeader', function($window) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'views/partials/global-header.html',
		link: function(scope, element, attr) {
			console.log(angular.element($window));
		}
	}
});