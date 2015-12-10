
Ext.define('AdminPanel.view.admin.ProcessesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ProcessesGrid',
    reference: 'ProcessesGrid',
    requires: ['AdminPanel.controller.ProcessController'],
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
    controller: 'ProcessController',
    width: 800,
    height: 350,
    frame: true,
    title: 'System processes',
    store: 'Processes',
    iconCls: 'icon-user',
    columns: [{
        text: 'pid',
        width: 85,
        sortable: true,
        dataIndex: 'pid'
    },
    {
        text: 'ppid',
        width: 85,
        sortable: true,
        dataIndex: 'ppid'            
    },
    {
        text: 'user',
        width: 100,
        sortable: true,
        dataIndex: 'user'            
    }
    ,{
        text: '% cpu',
        width: 85,
        sortable: true,
        dataIndex: 'pcpu'            
    },{
        text: '% mem',
        width: 85,
        sortable: true,
        dataIndex: 'pmem'
    },{
        text: 'nice',
        width: 85,
        sortable: true,
        dataIndex: 'nice',
        field: {
                    xtype: 'textfield'
                }
    },{
        text: 'start',
        width: 85,
        sortable: true,
        dataIndex: 'start_time'            
    },{
        text: 'stat',
        width: 85,
        sortable: true,
        dataIndex: 'stat'            
    },{
        text: 'tty',
        width: 85,
        sortable: true,
        dataIndex: 'tty'            
    },{
        text: 'args',
        flex: 1,
        sortable: true,
        dataIndex: 'args',
        cellWrap: true     
    }],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Reload',
            iconCls: 'extjs-item-add',
            handler: 'onReload'
        }, '-', {
            itemId: 'start',
            text: 'Start Process',
            iconCls: 'extjs-item-remove',
            disabled: true,
            handler: 'onStart'
        }]
    }]
});