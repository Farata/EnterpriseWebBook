Ext.Loader.setConfig({
    disableCaching: false,
    enabled: true,
    paths: {
        Test: 'test',   <1>
        SSC: 'app'   <2>
    }
});

var application = null;

Ext.onReady(function() {
    application = Ext.create('Ext.app.Application', {
        name: 'SSC',   <3>
        requires: [
            'Test.spec.AllSpecs'   <4>
        ],
        controllers: [
            'Donate'   <5>
        ],
        launch: function() {
            Ext.create('Test.spec.AllSpecs');
        }
    });
});