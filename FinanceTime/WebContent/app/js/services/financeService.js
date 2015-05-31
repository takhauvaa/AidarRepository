/*global define*/
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage.
 */
define(['app'], function (app) {
	app.factory('FinanceService', function () {
		var STORAGE_ID = 'todos-angularjs-requirejs';

		return {
			getInflows: function (purseId) {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},
//			setInflow: function (purseId,inflow) {
//				localStorage.setItem(STORAGE_ID, JSON.stringify(inflow));
//			},
			getOutflows: function (purseId) {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},
			setOutflow: function (purseId,outflow) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(outflow));
			},
			deleteInflow: function (purseId,inflow) {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},
			deleteOutflow: function (purseId,outflow) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(inflow));
			},
			createPurse: function (name){
				localStorage.setItem(STORAGE_ID, JSON.stringify(name));
			},
			getPurses: function (){
				return [{idPurse:1,name:'Aidar',type:'1'},{idPurse:2,name:'Kristina',type:'2'}]; 
//				return localStorage.getItem(STORAGE_ID, JSON.stringify());
			},
			getPurse: function (purseId){
				return localStorage.getItem(STORAGE_ID, JSON.stringify(purseId));
			}
		};
	});
});
