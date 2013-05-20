Ext.define('SSC.model.Campaign', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'title',
            type: 'string',
            defaultValue: 'Default Campaign Title'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'location',
            type: 'string'
        }
    ],
    validations: [
        {
            field: 'location',
            type: 'presence'
        }
    ]
});
