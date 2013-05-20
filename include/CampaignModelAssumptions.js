Ext.define('Test.spec.CampaignModelAssumptions', {}, function () {
    beforeEach(function () {

    });

    afterEach(function () {
        Ext.data.Model.cache = {};  // <1>
    });

    describe('SSC.model.Campaign model', function () {
        it('exists', function () {      // <2>
            var model = Ext.create('SSC.model.Campaign', {});
            expect(model.$className).toEqual('SSC.model.Campaign');
        });
        it('has properties', function () {      // <3>
            var model = Ext.create('SSC.model.Campaign', {
                title: 'Donors meeting',
                description: 'Donors meeting agenda',
                location: 'New York City'
            });
            expect(model.get('title')).toEqual('Donors meeting');
            expect(model.get('description')).toEqual('Donors meeting agenda');
            expect(model.get('location')).toEqual('New York City');
        });
        it('property title has default values', function () {  // <4>
            var model = Ext.create('SSC.model.Campaign');
            expect(model.get('title')).toEqual('Default Campaign Title');
        });
        it('requires campaign location', function(){        // <5>
            var model = Ext.create('SSC.model.Campaign');
            var validationResult = model.validate();
            expect(validationResult.isValid()).toBeFalsy();
        });
    });

});
