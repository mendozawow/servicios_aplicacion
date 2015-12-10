
Ext.define('AdminPanel.view.DomainsGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.DomainsGrid',
    requires: ['AdminPanel.controller.DomainController'],
    controller: 'DomainController',
    store: 'Domains',
    iconCls: 'icon-user',
    title: 'Domains',
    width: 300,
    columns: [{
        text: 'ID',
        width: 40,
        sortable: true,
        dataIndex: 'id'
    },
    {
        text: 'Domain',
        flex: 1,
        sortable: true,
        dataIndex: 'name'          
    }],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Add Domain',
            iconCls: 'extjs-item-add',
            handler: 'onAdd'
        }, '-', {
            itemId: 'delete',
            text: 'Delete Domain',
            iconCls: 'extjs-item-remove',
            disabled: true,
            handler: 'onDelete'
        }]
    }],
    listeners:{
        selectionchange: 'onSelectionChange'
    }
});