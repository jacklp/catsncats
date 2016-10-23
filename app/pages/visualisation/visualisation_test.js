'use strict';

describe('Visualisation', function(){

    var scope, controller, authorsFactory, rootScope;
    beforeEach(module('myApp.visualisation'));

    var authorsData = {
        data : {
            children: [
                {
                    data: {
                        "author": "Captain-Flannel"
                    }
                },
                {
                    data: {
                        "author": "BaconBits"
                    }
                },
                {
                    data: {
                        "author": "Flapjack"
                    }
                }
            ]
        }
    };

    var usersData = [
        {
            author: 'Captain-Flannel',
            link_karma: '100',
            comment_karma: '200'
        },
        {
            author: 'BaconBits',
            link_karma: '150',
            comment_karma: '200'
        },
        {
            author: 'Flapjack',
            link_karma: '50',
            comment_karma: '30'
        },
    ]

    beforeEach(inject(function (_authors_, $rootScope, $controller) {
        authorsFactory = _authors_;
        scope = $rootScope.$new();
        rootScope = $rootScope;

        controller = $controller('Visualisation', {
            $scope: scope
        });

        spyOn(authorsFactory, 'getAuthors').and.callFake(function() {
            return authorsData;
        });

        spyOn(authorsFactory, 'getAbout').and.callFake(function() {
            return usersData;
        });

    }));

    //TEST AUTHOR FACTORY
    it('was instantiated correctly and returns data from reddit api', function(){
        expect(authorsFactory.getAuthors().data.children[0].data.author).toBe('Captain-Flannel');
    })

    //TEST USER FACTORY
    it('was instantiated correctly and returns data from reddit api', function(){
        expect(authorsFactory.getAbout()[0].author).toBe('Captain-Flannel');
    })

});

