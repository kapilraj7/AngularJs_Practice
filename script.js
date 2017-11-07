var app = angular.module('myApp', []);

var MainController = function($scope, $http) {
  $http.get("customers.php").then(function (response) {
      $scope.myData = response.data.records;
  });
}

app.controller('customersCtrl', MainController);

