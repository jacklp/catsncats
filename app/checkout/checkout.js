'use strict';

angular.module('myApp.checkout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'Checkout'
  });
}])

.controller('Checkout', ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint) {
  $scope.checkoutCopy = "Jack's Flowah Powah";
  //$scope.

  var slides = [
    {src: 'http://placekitten.com/600/300'},
    {src: 'http://placekitten.com/700/300'},
    {src: 'http://placekitten.com/600/200'},
    {src: 'http://placekitten.com/800/300'},
    {src: 'http://placekitten.com/650/300'},
    {src: 'http://placekitten.com/590/300'},
    {src: 'http://placekitten.com/595/300'}
];
	$('.jR3DCarouselGallery').jR3DCarousel({ slides: slides });

}])