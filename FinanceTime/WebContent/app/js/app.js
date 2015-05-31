/*global define*/
'use strict';

define(['angular', 'ngRoute'],function(angular) {
	
	var app = angular.module('finance', [ 'ngRoute']);
	

	app.config([ '$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
		//$httpProvider.responseInterceptors.push('httpInterceptor');
		$locationProvider.html5Mode({
			enabled : true,
			requireBase : false
		});
		$routeProvider.when('/FinanceTime', {
			templateUrl : 'FinanceTime/app/js/views/purses.tpl.html',
			controller : 'PurseController'
		}).when('/FinanceTime/inflows', {
			templateUrl : 'app/js/views/flows.tpl.html',
			controller : 'FlowController'
		}).when('/FinanceTime/outflows', {
			templateUrl : 'app/js/views/flows.tpl.html',
			controller : 'FlowController'
		}).when('/FinanceTime/balans', {
			templateUrl : 'app/js/views/balans.tpl.html',
			controller : 'BalanceController'
		}).otherwise({
			redirectTo : '/FinanceTime'
		});
		
	} ]);

	// app.run(function ($window, auth, user) {
	// auth.setAuthorizationHeaders();
	// user.initialize();
	// });

	return app;
});
