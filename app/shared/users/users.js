angular.module('myApp.contacts')
    .component('users', {
        templateUrl: 'shared/users/users.html',
        controller: ['$scope', 'mocky', function($scope, mocky){

            mocky.getContacts().then(function(data){
                $scope.users = data;
            })

        }]
    })

    .service("mocky", function ($http, $q) {

        var deferred1 = $q.defer();

        this.getContacts= function () {
            return $http.get('http://www.mocky.io/v2/580cd2d3100000a710540487')
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