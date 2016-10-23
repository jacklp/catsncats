'use strict';

angular.module('myApp.contacts', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contacts', {
        templateUrl: 'pages/contacts/contacts.html',
        controller: 'Contacts'
    });
}])
.controller('Contacts', ['$scope', 'mocky', '$rootScope', function($scope, mocky, $rootScope) {

    $scope.header = "Contacts";

}])
