var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {
    
    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    
    console.log($log);
    
});
