angular.module('myApp.contacts')
    .component('users', {
        templateUrl: 'shared/users/users.html',
        controller: ['$scope', 'mocky', function($scope, mocky, $element){

            this.$onInit = function () {
                mocky.getContacts($scope);
            }
        }]
    })

.service("mocky",
    function ($http) {

        this.getContacts= function ($scope) {
            return $http.get('http://www.mocky.io/v2/580cd2d3100000a710540487')
                .then(function (response) {
                    $scope.users = response.data;
                }, function (response) {
                    $scope.users = [];
                });
        };
    }
)