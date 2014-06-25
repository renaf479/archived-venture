'use strict';
var ventureApp = angular.module('ventureApp', ['ngResource', 'ngSanitize', 'ui.router', 'ui.scrollfix', 'ui.bootstrap']);

ventureApp.run(function($rootScope, $state, Auth) {
	$rootScope.user = {};
/*
	var routesPublic = ['/', '/user'];
	
	//Check current location matches route
	var routeClear = function(route) {
	}

	$rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams) {
		//auth required
		if(!Authenticate.check()) {
			$state.go('login');
		}
	});
*/

/*
	Authenticate.check();
	$rootScope.user = {
		authenticated: (sessionStorage.authenticated === 'true')? true: false
	}
*/
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		if(toState.name === 'public.home') {
			Auth.check().then(function(response) {
				if(response) {
					$state.go('admin');
				}
			});
		}/*


		Auth.check().then(function(response) {
			if(toState.name === 'public.home' && $rootScope.user.status) {
				//$state.go('admin');
			}
			
			console.log($rootScope.user);
		});
*/
/*
		Auth.check().then(function() {
			if(toState.name === 'public.home') {
				$state.go('admin');
			}
		});
*/
		
		//Redirect to admin if user is found
		
/*
		if(toState.name === 'public.home') {
			Auth.check().then(function() {
				if($rootScope.user.status === true) {
					$state.go('admin');
				}
			});
		}
*/
	});
});


/*
$rootScope.$on("$stateChangeStart", 
    function (event, toState, toParams, 
              fromState, fromParams) {
    if (!Auth.authorize(toState.data.access)) {
        $rootScope.error = "Access denied";
        event.preventDefault();

        if(fromState.url === '^') {
            if(Auth.isLoggedIn())
                $state.go('user.home');
            else {
                $rootScope.error = null;
                $state.go('anon.login');
            }
        }
    }
});








  // enumerate routes that don't need authentication
  var routesThatDontRequireAuth = ['/login'];

  // check if current location matches route  
  var routeClean = function (route) {
    return _.find(routesThatDontRequireAuth,
      function (noAuthRoute) {
        return _.str.startsWith(route, noAuthRoute);
      });
  };

  $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
    // if route requires auth and user is not logged in
    if (!routeClean($location.url()) && !AuthenticationService.isLoggedIn()) {
      // redirect back to login
      $location.path('/login');
    }
  });

*/