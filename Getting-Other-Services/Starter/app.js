var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    $scope.name = "Mitch Kroska"
    $log.log("hello log")
    $log.info("hello info")
    $log.warn("hello warn")
    $log.debug("hello debug")
    $log.error("hello error")
    var ucName = $filter('uppercase')($scope.name);
    $log.info(ucName)
    $log.log($resource)
});