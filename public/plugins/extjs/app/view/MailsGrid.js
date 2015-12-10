
Ext.define('AdminPanel.view.MailsGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.MailsGrid',
    requires: ['AdminPanel.controller.MailController'],
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
    controller: 'MailController',
    width: 800,
    height: 350,
    frame: true,
    title: 'E-Mail Accounts',
    store: 'Mails',
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
    }
    , {
        header: 'crypt',
        flex: 1,
        sortable: true,
        dataIndex: 'crypt',
        renderer:function(value){return '********';},
        field: {
            xtype: 'textfield',
            inputType: 'password'
        }
    },{
        header: 'enabled',
        flex: 1,
        sortable: true,
        dataIndex: 'enabled',
        field: {
            xtype: 'textfield',
            inputType: 'enabled'
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add e-mail account',
            iconCls: 'extjs-item-add',
            handler: 'onAdd'
        }, '-', {
            itemId: 'delete',
            text: 'Delete e-mail account',
            iconCls: 'extjs-item-remove',
            disabled: true,
            handler: 'onDelete'
        }]
    }],
    listeners:{
        selectionchange: 'onSelectionChange'
    }
});