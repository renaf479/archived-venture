angular.module('ventureApp')
	.factory('Authenticate', function($http, $rootScope, $cookieStore) {
		return {
			login: function(user, success, error) {
				return $http.post('/service/authenticate/login', user).success(function(user) {
					sessionStorage.authenticated = 'true';
					
					$rootScope.user = {
						user: user,
						authenticated: true
					}
					
					//$rootScope.user.authenticated = sessionStorage.authenticated = 'true';
				}).error(error);
			},
			logout: function() {
				return $http.post('/service/authenticate/logout').then(function(response) {
					$rootScope.user.authenticated = sessionStorage.authenticated = 'false';
					return response;
				});
			}
		}
		//return $resource('/service/authenticate/');
	})
	
	
/*
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