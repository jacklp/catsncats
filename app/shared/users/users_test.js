'use strict';

describe('Checkout Controller', function(){

    var element, scope, controller, mocky, users;
    beforeEach(module('myApp.contacts'));

    var usersData = [
        {
            "name": "leanne graham",
            "email": "leanne@gmail.com",
            "job": "web developer",
            "location": "london",
            "tag": "friends",
            "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
        },
        {
            "name": "ervin howell",
            "email": "ervin@gmail.com",
            "job": "tech lead",
            "location": "london",
            "tag": "friends",
            "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
        },{
            "name": "clementine bauch",
            "email": "clementine@gmail.com",
            "job": "web developer",
            "location": "liverpool",
            "tag": "following",
            "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
        },{
            "name": "chelsey dietrich",
            "email": "chelsey@gmail.com",
            "job": "baker",
            "location": "london",
            "tag": "family",
            "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
        },{
            "name": "dennis schulist",
            "email": "dennis@gmail.com",
            "job": "pen tester",
            "location": "manchester",
            "tag": "acquaintance",
            "avatar": "http://www.cbc.ca/smartestperson/content/image/avatar-placeholder.png"
        }
    ];

    beforeEach(inject(function ( $controller, $compile,  $rootScope, _mocky_) {
        mocky = _mocky_;
        scope = $rootScope.$new();
        spyOn(mocky, 'getContacts').and.callFake(function() {
            return usersData;
        });

        scope.users = mocky.getContacts();
    }));

    it('checks that mocky is available', function(){
        expect(mocky).toBeDefined();
    })

    it('checks that the service returned the data ok', function(){
        expect(mocky.getContacts()[0].name).toBe('leanne graham');
    })
});

