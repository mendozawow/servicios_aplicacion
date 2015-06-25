Ext.define('AdminPanel.model.Domain', {
    extend: 'Ext.data.Model',
    fields: ['id','name'],
    idProperty: 'id',   
    validators: [{
        type: 'length',
        field: 'id',
        min: 1
    }, {
        type: 'length',
        field: 'name',
        min: 1
    }]
});