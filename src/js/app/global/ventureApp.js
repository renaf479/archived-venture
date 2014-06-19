'use strict';
var ventureApp = angular.module('ventureApp', ['ngResource', 'ngSanitize', 'ui.router', 'ui.scrollfix']);

ventureApp.run(function($rootScope) {
	$rootScope.user = {
		authenticated: (sessionStorage.authenticated === 'true')? true: false
	}
});