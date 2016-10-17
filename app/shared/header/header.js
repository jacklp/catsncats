angular.module('myApp.checkout').component('header', {
    templateUrl: 'shared/header/header.html',
    controller: ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint){
        $scope.products = FlowersEndpoint.collections[0].skus;

    }],
    bindings: {
        hero: '='
    }
});