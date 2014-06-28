'use strict';
var ventureApp = angular.module('ventureApp', [
	'ngCookies',
	'ngResource', 
	'ngSanitize', 
	'ui.router', 
	'ui.scrollfix', 
	'ui.bootstrap']);

ventureApp.run(function($rootScope, $state, Auth) {
	$rootScope.user = {};

	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
	
		if(toState.name === 'public.home') {
			Auth.check().then(function(response) {
				if(response) {
					event.preventDefault();
					$state.go('admin.home');
				}
			});
		}
	
		if(toState.data.access === 'registered') {
			//if(!Auth.check()) {
			Auth.check().then(function(response) {
				if(!response) {			
					event.preventDefault();
					$state.go('public.home');
				} else {
					//console.log($rootScope.user);
				}
			});
		}
	});

/*
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		if(toState.name === 'public.home') {
			Auth.check().then(function(response) {
				if(response) {
					$state.go('admin.home');
				}
			});
		}
		
		if(toState.data.access === 'registered') {
			Auth.check().then(function(response) {
				if(!response) {
					event.preventDefault();
					$state.go('public.home');
				}
			});
		}
	});
*/
});