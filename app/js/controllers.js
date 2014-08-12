'use strict';

/* Controllers */

angular.module('cvApp.controllers', [])
	.controller('MainController', [ '$http', '$scope', function($http, $scope){
		$scope.name = "Rafel Mormeneo";
		$scope.work = [{'titulo':'1'},{'titulo':'2'}];
		$http.get('work.json').success(function(data){
			$scope.work = data;
		});
	}]);

	
