sampleApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	
	console.log('config');
	$locationProvider.hashPrefix('');	
	$routeProvider.when("/", {
		templateUrl : "../templates/home.html",
		controller : "HomeController"	
	}).when("/page1", {
		templateUrl : "../templates/page1.html",
		controller : "Page1Controller"
	}).when("/page2", {
		templateUrl : "../templates/page2.html",
		controller : "Page2Controller"
	});
	
	
}]);

