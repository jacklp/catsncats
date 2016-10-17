myApp.
config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/visualisation", {
            templateUrl : "/visualisation"
        })
    $routeProvider.otherwise({redirectTo: '/checkout'});
}]);