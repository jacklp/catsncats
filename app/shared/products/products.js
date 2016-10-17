angular.module('myApp.checkout').component('products', {
    templateUrl: 'shared/products/products.html',
    controller: ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint){
        $scope.products = FlowersEndpoint.collections[0].skus;
        console.log($scope.products);
    }],
    bindings: {
        hero: '='
    }
});