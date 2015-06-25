Ext.define('AdminPanel.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    
    requires: [
        'AdminPanel.view.DomainsGrid',
        'AdminPanel.view.VhostsGrid',
        'AdminPanel.view.MailsGrid',
        'AdminPanel.view.RecordsGrid',
        'AdminPanel.view.FtpUsersGrid',
        'AdminPanel.view.DomainForm',
        'AdminPanel.view.Header'
    ],
    items: [
        {
            xtype:'app-header',
            id: 'app-header',
            region:'north'
        },
        {
            xtype: 'DomainsGrid',
            region: 'west',
            border: true,
            padding: 5
        },
        {
            xtype: 'panel',
            region: 'center',
            items:[
            {
                xtype:'VhostsGrid',
                id: 'VhostsGrid',
                border: true,
                margin: 5
            },{
                xtype:'MailsGrid',
                id: 'MailsGrid',
                border: true,
                margin: 5
            }]
        },
        {
            xtype: 'panel',
            region: 'east',
            items:[
            {
                xtype:'RecordsGrid',
                id: 'RecordsGrid',
                border: true,
                margin: 5
            },{
                xtype:'FtpUsersGrid',
                id: 'FtpUsersGrid',
                border: true,
                margin: 5
            }]
        }        
    ]  
});