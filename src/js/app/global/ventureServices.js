angular.module('ventureApp')
	.factory('Auth', function($http, $rootScope, $q) {
		
		//Assigns REST response of user to Angular model
		var buildUser = function(user) {
			$rootScope.user = user;
			$rootScope.user.user.content = angular.fromJson($rootScope.user.user.content);
		}
		
		return {
			//Read current user auth status and store
			check: function() {
				return $http.get('/service/authenticate', {cache: true}).then(function(response) {
					buildUser(response.data);
					return response.data.auth;
				});
			},
			login: function(user, success, error) {
				return $http.post('/service/authenticate/login', user).success(function(response) {
					buildUser(response);
					//$rootScope.user.authenticated = sessionStorage.authenticated = 'true';
				}).error(error);
			},
			logout: function() {
				return $http.post('/service/authenticate/logout').then(function(response) {
					$rootScope.user = {};
					return response;
				});
			}
		}
		//return $resource('/service/authenticate/');
	})
	
	
/*

angular.module('angular-client-side-auth')  
.factory('Auth', function($http, $rootScope, $cookieStore){

    var accessLevels = routingConfig.accessLevels
        , userRoles = routingConfig.userRoles
        , currentUser = $cookieStore.get('user') || 
                        { username: '', role: userRoles.public };

    // ...

    return {

        // ...

        accessLevels: accessLevels,
        userRoles: userRoles,
        user: currentUser
    };

});









app.factory('UserService', [ '$http', function($http){

   var userService = {};

   userService.getUser = function(){
     return $http.get('/api/getuser').then(function(res){
       return res.data;
     },function(error){
       console.log(error);
       return [];
     });
   }

   return userService;
}]); 








angular.module('angular-client-side-auth')  
.factory('Auth', function($http, $rootScope, $cookieStore){

    // ...

    $rootScope.accessLevels = accessLevels;
    $rootScope.userRoles = userRoles;

    return {
        authorize: function(accessLevel, role) {
            if(role === undefined)
                role = $rootScope.user.role;
            return accessLevel &amp; role;
        },

        isLoggedIn: function(user) {
            if(user === undefined)
                user = $rootScope.user;
            return user.role === userRoles.user || user.role === userRoles.admin;
        },

        register: function(user, success, error) {
            $http.post('/register', user).success(success).error(error);
        },

        login: function(user, success, error) {
            $http.post('/login', user).success(function(user){
                $rootScope.user = user;
                success(user);
            }).error(error);
        },

        logout: function(success, error) {
            $http.post('/logout').success(function(){
                $rootScope.user = {
                    username = '',
                    role = userRoles.public
                };
                success();
            }).error(error);
        },

        accessLevels: accessLevels,
        userRoles: userRoles
    };
});

*/