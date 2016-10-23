myApp.
config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/app/index.html#/visualisation", {
        templateUrl : "/visualisation"
    })
    .when("/app/index.html#/contacts", {
        templateUrl : "/contacts"
    })
    .otherwise({redirectTo: '/checkout'});
}]);