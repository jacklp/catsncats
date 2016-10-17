angular.module('myApp.checkout').component('productsController', {
    templateUrl: 'checkout/checkout-products/checkout-products.html',
    controller: ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint){
        $scope.products = FlowersEndpoint.collections[0].skus;
    }],
    bindings: {
        hero: '='
    }
});