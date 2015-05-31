/*global define*/
'use strict';

/**
 * The main controller for the app. The controller: - retrieves and persist the
 * model via the todoStorage service - exposes the model to the template and
 * provides event handlers
 */

define([ 'app', 'services/financeService' ], function(app) { 
	app.controller('BalanceController', [
			'$scope',
			'$location',
			'FinanceService',
			function($scope, $location, financeService,
					filterFilter) {
				var flows = $scope.flows = financeService.getInflows();

				$scope.newFlow = '';
				$scope.selectedFlow = null;
				$scope.addFlag = null;
				
				$scope.selectFlow = function(flow) {
					$scope.selectedFlow = flow;
				}

//				$scope.$watch('inflows', function() {
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

				$scope.addFlow = function() {
					$scope.addFlag = true;

				};

				$scope.save = function() {
					var flow = null;
					if ($scope.addFlag) {
						flow = $scope.newFlow;
						$scope.newFlow = '';
					} else {
						flow = $scope.selectedFlow;
					}
					flows.push({
						date : flow.date,
						type : flow.type,
						descr : flow.descr,
						cost : flow.cost
					});

				};

				$scope.cancel = function() {
					var flow = null;
					if ($scope.addFlag)
						$scope.addFlag = null;
					else
						$scope.selectedFlow = '';
				}

				$scope.removeFlow = function(flow) {
					flows.splice(flows.indexOf(flow), 1);
				};

			} ]);
});
