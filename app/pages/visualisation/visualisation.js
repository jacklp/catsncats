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
    authors.getAuthors(authors, vm, $rootScope);
}])

.service("authors", function ($http) {

    this.getAuthors= function (authorService, vm, $rootScope) {
        return $http.get('https://www.reddit.com/r/aww.json')
            .then(function (response) {

                angular.forEach(response.data.data.children, function(child) {
                    authorService.getAbout(child.data.author, vm, $rootScope);
                });

            }, function (response) {

                //API CALL RETURNED FALSE;
            });
    };

    this.getAbout = function(authorName, vm, $rootScope){
        return $http.get('https://www.reddit.com/user/' + authorName + '/about.json')
            .then(function (response) {

                    vm.authors.push({
                        author: authorName,
                        link_karma: response.data.link_karma,
                        comment_karma: response.data.comment_karma
                    });

                    $rootScope.$broadcast('new-author-pushed');

            }, function (response) {
                //API CALL FAILED
            });

    }


})