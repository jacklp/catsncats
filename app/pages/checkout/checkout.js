'use strict';

angular.module('myApp.checkout', [
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'pages/checkout/checkout.html',
    controller: 'Checkout'
  });
}])
.controller('Checkout', ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint, _) {
  var vm = this;
  vm.karmaTestVar = "test";
  $scope.checkoutCopy = "Cats N' Cats";
  $scope.header = "Products"

}])