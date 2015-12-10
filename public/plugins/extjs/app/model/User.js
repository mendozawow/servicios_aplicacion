Ext.define('AdminPanel.model.User', {
    extend: 'Ext.data.Model',
    alias: 'widget.User',
    fields: ['id','name', 'email', 
        {name: 'password',   type: 'auto', convert: null, defaultValue: null},
        {name: 'google2fa_secret',   type: 'auto', convert: null, defaultValue: null}],
    idProperty: 'id',
    validators: [{
        type: 'length',
        field: 'name',
        min: 1
    }]
});