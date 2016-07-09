var mod=angular.module("myApp",['ngRoute']);
		mod.config(function($routeProvider){
			$routeProvider.
			when('/route1/finearts',{
				templateUrl: 'templates/template1.html',
				controller: 'ctrl1'
			})
			.when('/route2/mad',{
				templateUrl: 'templates/template2.html',
				controller: 'ctrl1'
			})
			.when('/route3/sac',{
				templateUrl: 'templates/template3.html',
				controller: 'ctrl1'
			})
			.when('/route4/photog',{
				templateUrl: 'templates/template4.html',
				controller: 'ctrl1'
			})
			.otherwise({
				redirectTo: '/',
				templateUrl:'templates/default.html',
				controller: 'ctrl2'
			}) 

		});
		mod.controller("crl1t", function($scope,$routeParams){
		});
		mod.controller("crl2t", function($scope,$routeParams){
		});