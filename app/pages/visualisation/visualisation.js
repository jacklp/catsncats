'use strict';

angular.module('myApp.visualisation', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/visualisation', {
        templateUrl: 'pages/visualisation/visualisation.html',
        controller: 'Visualisation as vm'
    });
}])
.controller('Visualisation', ['$scope', 'FlowersEndpoint', 'authors', 'users', '$rootScope', function($scope, FlowersEndpoint, authors, users, $rootScope) {
    var vm = this;
    $scope.header = "Visualisations";
    authors.getAuthors().then(function(redditAww){

        var authorsArray = [];
        _.each(redditAww.data.children, function(child){

            users.getAbout(child.data.author).then(function(about){

                authorsArray.push({
                    author: child.data.author,
                    link_karma: about.data.link_karma,
                    comment_karma: about.data.comment_karma
                })
            });

        }, authorsArray, users);

        $scope.authors = authorsArray;
        vm.authors = $scope.authors;
        $rootScope.$broadcast('authors-gathered');
    });
}])

.service("authors", function ($http, $q) {

    var deferred = $q.defer();

    this.getAuthors= function () {
        return $http.get('https://www.reddit.com/r/aww.json')
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
                // promise is returned
                return deferred.promise;
            }, function (response) {
                // the following line rejects the promise
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            });
    };


})

.service("users", function ($http, $q) {

    var deferred = $q.defer();


    this.getAbout = function(author){
        return $http.get('https://www.reddit.com/user/' + author + '/about.json')
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
                // promise is returned
                return deferred.promise;
            }, function (response) {
                // the following line rejects the promise
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            });

    }


});
