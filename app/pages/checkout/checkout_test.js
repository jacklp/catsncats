'use strict';

describe('Checkout Controller', function(){

  var FlowersEndPoint, scope, controller;
  beforeEach(module('myApp.checkout'));

  beforeEach(inject(function (_FlowersEndpoint_, $controller, $rootScope) {
    FlowersEndPoint = _FlowersEndpoint_;
    scope = $rootScope.$new();
    controller = $controller('Checkout', {
      $scope: scope
    });
  }));

  it('instantiated my controller correctly', function() {
    expect(controller).toBeDefined();
  });

});
