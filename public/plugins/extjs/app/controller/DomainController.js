
Ext.define('AdminPanel.controller.DomainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DomainController',

    views:  ['DomainsGrid','DomainForm'],
    
    init: function(){

    },
    
    onAdd: function(){
        var store = this.getView().getStore();
        Ext.create('Ext.window.Window', {
            title: 'New Domain',
            height: 200,
            width: 400,
            layout: 'fit',
            items: {  // Let's put an empty grid in just to illustrate fit layout
                xtype: 'DomainForm',
                domainStore: store
            }
        }).show();
    },
    
    onDelete: function(){
        var selection = this.getView().getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.getView().getStore().remove(selection);
        }
        this.getView().getView().getSelectionModel().deselectAll();
    },
    
    onSelectionChange:function(selModel, selections){
        
        this.getView().down('#delete').setDisabled(selections.length === 0);
        
        var grids = ['VhostsGrid','MailsGrid','RecordsGrid','FtpUsersGrid'];        
        if(selections[0]){
            var grids = ['VhostsGrid','MailsGrid','RecordsGrid','FtpUsersGrid'];
            for (var i = 0; i < grids.length; i++){
                var g = Ext.getCmp(grids[i]);
                g.getStore().proxy.domains = selections[0].id;
                g.getStore().load({params:getStoreParams()});
            }
        }
        else{
            for (var i = 0; i < grids.length; i++){
                var g = Ext.getCmp(grids[i]);
                g.getStore().suspendAutoSync();
                g.getStore().removeAll();
                g.getStore().resumeAutoSync();
            }            
        }
    }
});

