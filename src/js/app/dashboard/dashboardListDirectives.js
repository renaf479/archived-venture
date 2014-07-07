ventureApp.directive('dashboardListItem', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'admin/dashboard/list.item.html',
		link: function(scope, element, attr) {
		}
	}
});