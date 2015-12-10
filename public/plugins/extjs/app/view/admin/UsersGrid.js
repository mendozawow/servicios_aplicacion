
Ext.define('AdminPanel.view.admin.UsersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.UsersGrid',
    requires: ['AdminPanel.controller.UserController'],
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
    controller: 'UserController',
    width: 800,
    height: 350,
    frame: true,
    title: 'Users Accounts',
    store: 'Users',
    iconCls: 'icon-user',
    columns: [{
        text: 'ID',
        flex: 1,
        sortable: true,
        dataIndex: 'id'
    },
    {
        text: 'name',
        flex: 1,
        sortable: true,
        dataIndex: 'name',
        field: {
            xtype: 'textfield'
        }            
    },
    {
        text: 'e-mail',
        flex: 1,
        sortable: true,
        dataIndex: 'email',
        field: {
            xtype: 'textfield'
        }            
    }    
    , {
        header: 'password',
        flex: 1,
        sortable: true,
        dataIndex: 'password',
        renderer:function(value){return '********';},
        field: {
            xtype: 'textfield',
            inputType: 'password'
        }
    },{
        header: 'google2fa_secret',
        flex: 1,
        sortable: true,
        dataIndex: 'google2fa_secret',
        renderer:function(value){return '********';},
        field: {
            xtype: 'textfield',
            inputType: 'password'
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add User',
            iconCls: 'extjs-item-add',
            handler: 'onAdd'
        }, '-', {
            itemId: 'delete',
            text: 'Delete User',
            iconCls: 'extjs-item-remove',
            disabled: true,
            handler: 'onDelete'
        }]
    }],
    listeners:{
        selectionchange: 'onSelectionChange'
    }
});