'use strict';

angular.module('myApp.checkout', [
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'Checkout'
  });
}])

.controller('Checkout', ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint) {
  $scope.checkoutCopy = "Bloom and Cats";

}])