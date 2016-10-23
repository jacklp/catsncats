describe('Flowers Endpoint', function() {

    var FlowersEndpoint;
    beforeEach(module('myApp.checkout'));
    beforeEach(inject(function (_FlowersEndpoint_) {
        FlowersEndpoint = _FlowersEndpoint_;
    }));

    it('instantiates the flowers endpoint factory', function(){
        expect(FlowersEndpoint).toBeDefined();
    });
    it('a nested value has the correct length', function(){
        expect(FlowersEndpoint.collections[0].shipping_options.length).toBe(3);
    });
});