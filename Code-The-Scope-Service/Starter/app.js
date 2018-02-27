var myApp = angular.module('myApp', []);
console.log(myApp)
myApp.controller('mainController', function($scope) {
		$scope.name = "Mitch Kroska";
		$scope.occupation = "Loser"
		$scope.getNameOcc = function() {
			console.log($scope.name, $scope.occupation)
		}
    console.log($scope);
});