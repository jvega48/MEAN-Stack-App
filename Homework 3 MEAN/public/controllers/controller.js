var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Controller Working");


var refresh = function() {
  $http.get('/resume').success(function(response) {
    console.log("I got the data I requested");
    $scope.resume = response;
    $scope.resum = "";
  });
};

refresh();

}]);﻿
var myApp = angular.module('myApp',['ng-Router']);
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'public/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'public/register.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'public/admin.html',
      controller: 'SuccessController'
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);
