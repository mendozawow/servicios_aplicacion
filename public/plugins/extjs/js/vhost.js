Ext.require(['Ext.data.*', 'Ext.grid.*']);

Ext.define('Vhost', {
    extend: 'Ext.data.Model',
    fields: ['id','serverName', 'documentroot'],
    idProperty: 'id',
    validations: [{
        type: 'length',
        field: 'serverName',
        min: 1
    }, {
        type: 'length',
        field: 'documentroot',
        min: 1
    }]
});

Ext.onReady(function(){

    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        autoSync: true,
        model: 'Vhost',
        proxy: {
            type: 'rest',
            url: 'domain/vhost',
            extraParams: getStoreParams(),
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'json'
            },
            listeners: {
                exception : function(proxy, response, operation) {
                    var r = Ext.JSON.decode(response.responseText);
                    var msg = '';
                    for (var prop in r) {
                        msg += prop + ": " + r[prop] + '\n';
                    }
                    Ext.example.msg(Ext.String.capitalize(operation.action),
                        Ext.String.format("({0} - {1}) {2}", response.status,response.statusText, msg));
                }                
            }
        },
        listeners: {
            write: function(store, operation){
                var record = operation.getRecords()[0],
                    name = Ext.String.capitalize(operation.action),
                    verb;
                    
                    
                if (name == 'Destroy') {
                    verb = 'Destroyed';
                } else {
                    verb = name + 'd';
                }
                Ext.example.msg(name, Ext.String.format("{0} Virtual Host: {1}", verb, record.get('serverName')));
                
            }
        }
    });
    
    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        listeners: {
            cancelEdit: function(rowEditing, context) {
                // Canceling editing of a locally added, unsaved record: remove it
                if (context.record.phantom) {
                    store.remove(context.record);
                }
            }
        }
    });
    
    var grid = Ext.create('Ext.grid.Panel', {
        id: 'vhostsGrid',
        renderTo: 'vhosts',
        plugins: [rowEditing],
        width: 600,
        height: 330,
        frame: true,
        title: 'Web Server Virtual Hosts',
        store: store,
        iconCls: 'icon-user',
        columns: [{
            text: 'ID',
            width: 40,
            sortable: true,
            dataIndex: 'id'
        },
        {
            text: 'Server Name',
            flex: 1,
            sortable: true,
            dataIndex: 'serverName',
            field: {
                xtype: 'textfield'
            }            
        }
        , {
            header: 'Document Root',
            flex: 1,
            sortable: true,
            dataIndex: 'documentroot',
            field: {
                xtype: 'textfield'
            }
        }],
        dockedItems: [{
            xtype: 'toolbar',
            items: [{
                text: 'Add Virtual Host',
                iconCls: 'extjs-item-add',
                handler: function(){
                    // empty record
                    store.insert(0, new Vhost());
                    rowEditing.startEdit(0, 0);
                }
            }, '-', {
                itemId: 'delete',
                text: 'Delete Virtual Host',
                iconCls: 'extjs-item-remove',
                disabled: true,
                handler: function(){
                    var selection = grid.getView().getSelectionModel().getSelection()[0];
                    if (selection) {
                        store.remove(selection);
                    }
                }
            }]
        }]
    });
    grid.getSelectionModel().on('selectionchange', function(selModel, selections){
        grid.down('#delete').setDisabled(selections.length === 0);
    });
});
