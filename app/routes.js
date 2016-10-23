myApp.
config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/app/index.html#/visualisation", {
            templateUrl : "/visualisation"
        })

    $routeProvider.otherwise({redirectTo: '/checkout'});
}]);