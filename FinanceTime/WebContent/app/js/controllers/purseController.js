/*global define*/
'use strict';

/**
 * The main controller for the app. The controller: - retrieves and persist the
 * model via the todoStorage service - exposes the model to the template and
 * provides event handlers
 */
//angular.module('purses', [ '$routeProvider', function($routeProvider) {
//	$routeProvider.when('/purses', {
//		templateUrl : 'views/purses.tpl.html',
//		controller : 'PurseController'
//	})
//} ]).
define([ 'app', 'services/financeService' ], function(app) {
	 
	app.controller('PurseController', [
			'$scope',
			'$location',
			'FinanceService',
			function($scope, $location, financeService) {
console.log('getPurses call');
				var purses = $scope.purses = financeService.getPurses();

				$scope.newPurse = '';
				$scope.editedPurse = null;

				$scope.goFlowing = function(idPurse) {
					console.log('getPurses start');
					$location.path($location.path() + "/inflows");
//					$scope.location = $location;
					//$scope.typeflows = $location.path("inflow");
				}

//				$scope.$watch('purses', function() {
//					$scope.remainingCount = filterFilter(todos, {
//						completed : false
//					}).length;
//					$scope.doneCount = todos.length - $scope.remainingCount;
//					$scope.allChecked = !$scope.remainingCount;
//					todoStorage.put(todos);
//				}, true);

//				if ($location.path() === '') {
//					$location.path('/');
//				}

//				$scope.location = $location;
//
//				$scope.$watch('location.path()', function(path) {
//					$scope.typeflows = (path === '/inflows') ? 'inflows'
//							: (path === '/outflows') ? 'outflows' : null;
//				});

//				$scope.addTodo = function() {
//					var newTodo = $scope.newTodo.trim();
//					if (!newTodo.length) {
//						return;
//					}
//
//					todos.push({
//						title : newTodo,
//						completed : false
//					});
//
//					$scope.newTodo = '';
//				};

//				$scope.editTodo = function(todo) {
//					$scope.editedTodo = todo;
//				};

//				$scope.doneEditing = function(todo) {
//					$scope.editedTodo = null;
//					todo.title = todo.title.trim();
//
//					if (!todo.title) {
//						$scope.removeTodo(todo);
//					}
//				};

//				$scope.removeTodo = function(todo) {
//					todos.splice(todos.indexOf(todo), 1);
//				};
//
//				$scope.clearDoneTodos = function() {
//					$scope.todos = todos = todos.filter(function(val) {
//						return !val.completed;
//					});
//				};
//
//				$scope.markAll = function(done) {
//					todos.forEach(function(todo) {
//						todo.completed = done;
//					});
//				};
			} ]);
});
