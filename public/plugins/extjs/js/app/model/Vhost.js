Ext.define('AdminPanel.model.Vhost', {
    extend: 'Ext.data.Model',
    alias: 'widget.Vhost',
    fields:['id','serverName','documentroot'],
    idProperty: 'id',
    validators: [{
        type: 'length',
        field: 'serverName',
        min: 1
    }, {
        type: 'length',
        field: 'documentroot',
        min: 1
    }]
});