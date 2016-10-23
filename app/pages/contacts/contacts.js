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
    mocky.getContacts.then(function(){
        console.log('test');
    })
}])

.service("mocky", function ($http, $q) {

    var deferred1 = $q.defer();

    this.getContacts= function () {
        return $http.get('http://www.mocky.io/v2/58088826100000e9232b75b0')
            .then(function (response) {
                // promise is fulfilled
                deferred1.resolve(response.data);
                // promise is returned
                return deferred1.promise;
            }, function (response) {
                // the following line rejects the promise
                deferred1.reject(response);
                // promise is returned
                return deferred1.promise;
            });
    };

})