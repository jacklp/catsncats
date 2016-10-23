'use strict';

describe('Checkout Controller', function(){

    var element, scope, controller, mocky, users, $q, $httpBackend;
    beforeEach(module('myApp.contacts'));

    beforeEach(inject(function ( $controller, $compile,  $rootScope, _mocky_, _$q_, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        mocky = _mocky_;
        scope = $rootScope.$new();
        $q = _$q_;


        //scope.users = mocky.getContacts();
    }));
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('tests that my service promise calls the api and handles the "then"', function () {
        var data;

        $httpBackend
            .when('GET', 'http://www.mocky.io/v2/580cd2d3100000a710540487')
            .respond(200, { foo: 'bar' });

        // set up a deferred
        var deferred = $q.defer();
        // get promise reference
        var promise = deferred.promise;

        // set up promise resolve callback
        promise.then(function (response) {
            data = response.foo;
            //data = response.success;
        });

        mocky.getContacts().then(function(response) {
            // resolve our deferred with the response when it returns
            deferred.resolve(response);
        });

        // force `$digest` to resolve/reject deferreds
        $httpBackend.flush();
        scope.$digest();

        expect(data).toBe('bar');

    });
});

