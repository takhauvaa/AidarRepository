/*global require*/
'use strict';

require.config({
	  paths: {
	      'angular' : 'lib/angular/angular',
	      'ngRoute': 'lib/angular/angular-route',
	      'ngResource': 'lib/angular/angular-resource'
	      
	  },
	  shim: {
		  ngRoute: {
	          deps: ['angular'],
	          exports: 'ngRoute'
	      },
	      ngResource: {
	          deps: ['angular'],
	          exports: 'ngResource'
	      },
	      angular: {
	          exports : 'angular'
	      }
	  }
	 // baseUrl: '/FinanceTime/app/js'
	});

	require(['angular','app','services/financeService','controllers/purseController','controllers/flowController',,'controllers/balanceController'], function (angular) {
		angular.bootstrap(document, [ 'finance' ]);
	});