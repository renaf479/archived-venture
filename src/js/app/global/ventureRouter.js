ventureApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
	
	//Public    
    $stateProvider
    	//Public Parent
	    .state('public', {
	        abstract: true,
	        template: '<ui-view/>',
	        data: {
	            access: 'public'
	        }
	    })
	    .state('public.home', {
            url: 	'/',
            views: {
            	//Main
            	'': {templateUrl: 'views/homepage.html'},
            	
            	//Login
            	'login@public.home': {templateUrl: 'views/partials/login.html'}
            }
        });
    
    
    $stateProvider
        .state('admin', {
	        url:			'/',
	        templateUrl:	'views/admin.html'
        });
});//.config()

/*


    .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partial-about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Look I am a column!' },

            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'table-data.html',
                controller: 'scotchController'
            }
        }
        
    });


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