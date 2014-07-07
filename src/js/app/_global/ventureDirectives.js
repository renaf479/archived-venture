ventureApp
	.directive('globalHeader', function($window) {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			templateUrl: 'platform/header.html',
			link: function(scope, element, attr) {
				//console.log(angular.element($window));
			}
		}
	})
	.directive('formSwitch', function() {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			templateUrl: 'platform/switch.html',
			link: function(scope, element, attr) {}
		}
	});