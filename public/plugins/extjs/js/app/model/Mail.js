Ext.define('AdminPanel.model.Mail', {
    extend: 'Ext.data.Model',
    alias: 'widget.Mail',
    fields: ['id','name', 'crypt','enabled'],
    idProperty: 'id',
    validators: [{
        type: 'length',
        field: 'name',
        min: 1
    }]
});