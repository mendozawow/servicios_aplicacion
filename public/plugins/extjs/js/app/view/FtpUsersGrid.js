
Ext.define('AdminPanel.view.FtpUsersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.FtpUsersGrid',
    reference: 'FtpUsersGrid',
    requires: ['AdminPanel.controller.FtpUserController'],
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
    controller: 'FtpUserController',
    width: 800,
    height: 350,
    frame: true,
    title: 'Ftp Users',
    store: 'FtpUsers',
    iconCls: 'icon-user',
    columns: [{
        text: 'ID',
        width: 40,
        sortable: true,
        dataIndex: 'id'
    },
    {
        text: 'user',
        flex: 1,
        sortable: true,
        dataIndex: 'username'           
    }
    ,{
        header: 'password',
        flex: 1,
        sortable: true,
        dataIndex: 'pass',
        renderer:function(value){return '********';},
        field: {
            xtype: 'textfield',
            inputType: 'password'
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add Ftp User',
            iconCls: 'extjs-item-add',
            disabled: true,
            handler: 'onAdd'
        }, '-', {
            itemId: 'delete',
            text: 'Delete Ftp User',
            iconCls: 'extjs-item-remove',
            disabled: true,
            handler: 'onDelete'
        }]
    }],
    listeners:{
        selectionchange: 'onSelectionChange'
    }
});