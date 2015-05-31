/*global define*/
'use strict';

/**
 * The main controller for the app. The controller: - retrieves and persist the
 * model via the todoStorage service - exposes the model to the template and
 * provides event handlers
 */

define([ 'app', 'services/financeService' ], function(app) { 
	app.controller('FlowController', [
			'$scope',
			'$location',
			'FinanceService',
			function FlowController($scope, $location, financeService,
					filterFilter) {
				var flows = $scope.flows = financeService.getInflows();

				$scope.newflow = '';
				$scope.selectedflow = null;
				$scope.addFlag = null;
				
				$scope.selectflow = function(flow) {
					$scope.selectedflow = flow;
				}
				$scope.goflowing = function() {
					$location.path($location.path() + "/inflows");
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
					console.log("add flow");
					$scope.addFlag = true;

				};

				$scope.save = function() {
					var flow = null;
					if ($scope.addFlag) {
						flow = $scope.newflow;
						$scope.newflow = '';
					} else {
						flow = $scope.selectedflow;
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
						$scope.selectedflow = '';
				}

				$scope.removeflow = function(flow) {
					flows.splice(flows.indexOf(flow), 1);
				};

			} ]);
});
