var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    
    $scope.getname = function() {
        return 'John Doe';
    }
    
    console.log($scope);
    
});

var searchPeople = function(fName, lName) {
	return "James Deam"
}

console.log(angular.injector().annotate(searchPeople))