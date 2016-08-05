var app = angular.module('app', []);
app.controller('mainController', function ($scope, $http) {
	$scope.result=0;

    $scope.inc = function(){
		$scope.result =$scope.result+1;
     };
    $scope.dec = function(){
		$scope.result =$scope.result-1;
     };
});