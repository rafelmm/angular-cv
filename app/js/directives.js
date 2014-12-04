'use strict';

/* Directives */

angular.module('cvApp.directives', [])
	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}])
	.directive('workExperience', function() {
		function link(scope, element, attrs) {
			
		}
		
		return {
			restrict: 'E',
			templateUrl: 'partials/work-experience.html',
			link: link
			};
	})
	.directive('education', function() {
		function link(scope, element, attrs) {
		
		}
		
		return {
			restrict: 'E',
			templateUrl: 'partials/education.html',
			link: link
			};
	});
