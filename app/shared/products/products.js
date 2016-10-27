angular.module('myApp.checkout')
    .component('products', {
        templateUrl: 'shared/products/products.html',
        controller: ['$scope', 'FlowersEndpoint', 'sortingService', function($scope, FlowersEndpoint, sortingService){
            $scope.products = FlowersEndpoint.collections[0].skus;

            sortingService.getAveragePrice($scope.products).then(function(data){
                console.log('hook up this promise to some kind of button functionality and sort now.');
                console.log(data);
            })
        }]
    })

.service("sortingService", function ($q) {
    this.getAveragePrice = function (products) {
        return $q(function (resolve, reject) {

            var averagePriceArray = [];

            angular.forEach(products, function(product){

                var averagePrice = 0;

                angular.forEach(product.pricings, function (price) {
                    averagePrice += parseInt(price.amount);
                }, averagePrice);

                averagePrice = averagePrice / product.pricings.length;

                averagePriceArray.push({
                  'id': product.id,
                  'averagePrice': parseFloat(averagePrice).toFixed(2)
                });
            }, averagePriceArray);

            if(typeof(averagePriceArray) !== 'undefined'){
                resolve(averagePriceArray);
            } else {
                reject('fail');
            }

        });
    }
});