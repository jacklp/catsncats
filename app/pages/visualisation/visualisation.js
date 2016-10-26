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
.controller('Visualisation', ['$scope', 'authors', '$rootScope', function($scope, authors, $rootScope) {
    var vm = this;
    $scope.header = "Visualisations";
    vm.authors = [];
    authors.getAuthors().then(function(redditAww){

        angular.forEach(redditAww.data.children, function(child){

            authors.getAbout(child.data.author).then(function(about){

                vm.authors.push({
                    author: child.data.author,
                    link_karma: about.data.link_karma,
                    comment_karma: about.data.comment_karma
                });

                $rootScope.$broadcast('new-author-pushed');

            });

        });

    });
}])

.service("authors", function ($http, $q) {

    var deferred1 = $q.defer();
    var deferred2 = $q.defer();

    this.getAuthors= function () {
        return $http.get('https://www.reddit.com/r/aww.json')
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

    this.getAbout = function(author){
        return $http.get('https://www.reddit.com/user/' + author + '/about.json')
            .then(function (response) {
                // promise is fulfilled
                deferred2.resolve(response.data);
                // promise is returned
                return deferred2.promise;
            }, function (response) {
                // the following line rejects the promise
                deferred2.reject(response);
                // promise is returned
                return deferred2.promise;
            });

    }


})