// Code goes here 

var app = angular.module('myApp', []);

var MainController = function($scope, $http) {
  $http.get("customers.php").then(function(response) {
    $scope.names = response.data.records;
  });
  $scope.AscendOrder = function(data) {
    $scope.MakeOrderBy = data;
  }
}
app.controller('customersCtrl', MainController);
