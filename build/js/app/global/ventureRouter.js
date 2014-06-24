ventureApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
	
	//Public    
    $stateProvider
	    .state('public', {
	        abstract: true,
	        template: '<ui-view/>',
	        data: {
	            access: 'public'
	        }
	    })
	    .state('public.home', {
            url: 			'/',
            templateUrl: 	'views/homepage.html'
        })
    
    
    $stateProvider
    	//Homepage
/*
        .state('home', {
            url: 			'/',
            templateUrl: 	'views/homepage.html'
        })
*/
        .state('admin', {
	        url:			'/',
	        templateUrl:	'views/admin.html'
        })
});

/*

console.log(Authenticate.check());

ventureApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('homepage', {
			url: 			'/home',
			templateUrl:	'views/homepage.html',
			controller:		'homepageController'
		})
});
*/