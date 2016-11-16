// Single page application
var app = angular.module('singlePageApp');

// masterController
app.controller('masterController', function($scope) {
	// Variables
	var screens = ['partials/page1.html'];
	$scope.currentScreen = screens[0];
});

// page_1Controller
app.controller('page1Controller', function($scope) {
   
});