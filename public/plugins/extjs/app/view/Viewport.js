Ext.define('AdminPanel.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    
    requires: [
        'AdminPanel.view.DomainsGrid',
        'AdminPanel.view.VhostsGrid',
        'AdminPanel.view.MailsGrid',
        'AdminPanel.view.RecordsGrid',
        'AdminPanel.view.FtpUsersGrid',
        'AdminPanel.view.admin.ProcessesGrid',
        'AdminPanel.view.admin.UsersGrid',
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
            xtype: 'tabpanel',
            id:'viewport-tabpanel',
            region: 'center',
            activeTab: 0,
            items:[
            {
                title: 'Apache Virtual Hosts',
                xtype:'VhostsGrid',
                id: 'VhostsGrid',
                border: true,
                margin: 5
            },{
                title: 'E-Mail Accounts',
                xtype:'MailsGrid',
                id: 'MailsGrid',
                border: true,
                margin: 5
            },{
                title: 'DNS Records',
                xtype:'RecordsGrid',
                id: 'RecordsGrid',
                border: true,
                margin: 5
            },{
                title: 'FTP Users',
                xtype:'FtpUsersGrid',
                id: 'FtpUsersGrid',
                border: true,
                margin: 5
            }]
        }     
    ],

    listeners:{
        beforerender: function(){
            if (hasRole('admin')){
                this.down('#viewport-tabpanel').add({
                    title: 'System Processes',
                    xtype:'ProcessesGrid',
                    id: 'ProcessesGrid',
                    border: true,
                    margin: 5
                },{
                    title: 'Users',
                    xtype:'UsersGrid',
                    id: 'UsersGrid',
                    border: true,
                    margin: 5
                },{
                    title: 'Console',
                    xtype:'panel',
                    id: 'console',
                    border: true,
                    html:'<div id="gateone"></div>',
                    margin: 5,
                    listeners:{
                        afterrender:function(){
                            /*
                            Ext.create('Ext.window.Window', {
                                title: 'GateOne',
                                closable: true,
                                width: 500,
                                minWidth: 250,
                                height: 500,
                                animCollapse:false,
                                border: false,
                                modal: true,
                                layout: {
                                    type: 'border',
                                    padding: 5
                                },
                                items:[{
                                    xtype:'panel',
                                    loader: {
                                    url: 'https://macher.com.ar:10443/',
                                    autoLoad: true
                                    }
                                }]
                                ,
                                listeners:{
                                    'close': function(win){                                        
                                        
                                    }
                                }
                                
                            }).show();
                            */
                            Ext.Ajax.request({
                                url: 'users/consoleKey',
                                method: 'GET',
                                params: {
                                    _token: getToken()
                                },
                                success: function(response){
                                    var r = Ext.JSON.decode(response.responseText.trim());
                                    console.log(r.data);
                                    GateOne.init({url: r.data.url, auth: r.data});
                                }
                            });
                            //GateOne.init({url: "https://macher.com.ar:10443/"});
                        }
                    }
                });
            }
        }
    }
});