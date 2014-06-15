ventureApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider
    .otherwise('/home');
    
    $stateProvider
    	//Homepage
        .state('home', {
            url: '/home',
            templateUrl: 'views/homepage.html'
        })
        //REST API
        .state('rest', {
	        url: '/rest'
        })
        
});