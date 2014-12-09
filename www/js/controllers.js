'use strict';

/* Controllers */

angular.module('cvApp.controllers', [])
	.controller('MainController', [ '$http', '$scope', function($http, $scope){
		$scope.name = "Rafel Mormeneo";
		$scope.work = [{'titulo':'1'},{'titulo':'2'}];
		$http.get('work.json').success(function(data){
			$scope.work = data;
		});
		$scope.education = [];
		$http.get('education.json').success(function(data){
			$scope.education = data;
		});
		$scope.projects = [];
		$http.get('projects.json').success(function(data){
			$scope.projects = data;
		});
	}]);

	
