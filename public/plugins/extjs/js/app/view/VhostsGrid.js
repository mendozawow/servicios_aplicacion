
Ext.define('AdminPanel.view.VhostsGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.VhostsGrid',
    reference: 'VhostsGrid',
    requires: ['AdminPanel.controller.VhostController'],
    plugins: [Ext.create('Ext.grid.plugin.RowEditing', {
        listeners: {
            cancelEdit: function(rowEditing, context) {
                // Canceling editing of a locally added, unsaved record: remove it
                if (context.record.phantom) {
                    rowEditing.grid.store.remove(context.record);
                }
            }
        }
    })],
    controller: 'VhostController',
    width: 800,
    height: 350,
    frame: true,
    title: 'Web Server Virtual Hosts',
    store: 'Vhosts',
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
            handler: 'onAdd'
        }, '-', {
            itemId: 'delete',
            text: 'Delete Virtual Host',
            iconCls: 'extjs-item-remove',
            disabled: true,
            handler: 'onDelete'
        }]
    }],
    listeners:{
        selectionchange: 'onSelectionChange'
    }
});