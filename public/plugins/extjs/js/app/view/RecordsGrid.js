
Ext.define('AdminPanel.view.RecordsGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.RecordsGrid',
    requires: ['AdminPanel.controller.RecordController'],
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
    controller: 'RecordController',
    width: 800,
    height: 350,
    frame: true,
    title: 'DNS Records',
    store: 'Records',
    iconCls: 'icon-user',
    columns: [{
        text: 'ID',
        width: 40,
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
        header: 'type',
        flex: 1,
        sortable: true,
        dataIndex: 'type',
        field: {
           xtype:'combo',
           name:'type',
           valueField: 'type',
           queryMode:'local',
           store:['A','NS','SOA','MX','AAAA','CNAME','NAPTR','PTR','TXT','SRV'],
           displayField:'type',
           autoSelect:true,
           forceSelection:true
        }
    },{
        header: 'content',
        flex: 1,
        sortable: true,
        dataIndex: 'content',
        field: {
            xtype: 'textfield'
        }
    },{
        header: 'ttl',
        flex: 1,
        sortable: true,
        dataIndex: 'ttl',
        field: {
            xtype: 'textfield'
        }
    },{
        header: 'prio',
        width: 55,
        sortable: true,
        dataIndex: 'prio',
        field: {
            xtype: 'textfield'
        }
    },{
        header: 'change_date',
        flex: 1,
        sortable: true,
        dataIndex: 'change_date',
        field: {
            xtype: 'textfield'
        }
    },{
        header: 'disabled',
        width: 55,
        sortable: true,
        dataIndex: 'disabled',
        field: {
            xtype: 'textfield'
        }
    },{
        header: 'auth',
        width: 55,
        sortable: true,
        dataIndex: 'auth',
        field: {
            xtype: 'textfield'
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add DNS Record',
            iconCls: 'extjs-item-add',
            handler: 'onAdd'
        }, '-', {
            itemId: 'delete',
            text: 'Delete DNS Record',
            iconCls: 'extjs-item-remove',
            disabled: true,
            handler: 'onDelete'
        }]
    }],
    listeners:{
        selectionchange: 'onSelectionChange'
    }
});