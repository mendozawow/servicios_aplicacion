Ext.define('AdminPanel.model.Record', {
    extend: 'Ext.data.Model',
    alias: 'widget.Record',
    fields: [
        {name: 'id',   type: 'int', convert: null},
        {name: 'name',  type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'content', type: 'string'},
        {name: 'ttl',   type: 'int', convert: null},
        {name: 'prio',   type: 'int', convert: null, defaultValue: null},
        {name: 'change_date',   type: 'int', convert: null},
        {name: 'disabled',   type: 'int', convert: null, defaultValue: 0},
        {name: 'ordername',   type: 'string', convert: null, defaultValue: null},
        {name: 'auth',   type: 'int', convert: null, defaultValue: 1}
    ],
    idProperty: 'id',
    validators: [{
        type: 'length',
        field: 'type',
        min: 1
    },{
        type: 'length',
        field: 'name',
        min: 1
    },{
        type: 'length',
        field: 'content',
        min: 1
    },{
        type: 'length',
        field: 'ttl',
        min: 1
    },{
        type: 'length',
        field: 'disabled',
        min: 1
    }]
});