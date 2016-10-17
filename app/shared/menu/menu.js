angular.module('myApp.checkout').component('menu', {
  templateUrl: 'shared/menu/menu.html',
  controller: ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint){
    $scope.products = FlowersEndpoint.collections[0].skus;
  }],
  bindings: {
    hero: '='
  }
});