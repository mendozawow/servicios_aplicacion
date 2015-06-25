Ext.define('AdminPanel.model.FtpUser', {
    extend: 'Ext.data.Model',
    fields: ['id','username','pass','domain_id'],
    idProperty: 'id',   
    validators: [{
        type: 'length',
        field: 'id',
        min: 1
    }, {
        type: 'length',
        field: 'pass',
        min: 1
    }]
});