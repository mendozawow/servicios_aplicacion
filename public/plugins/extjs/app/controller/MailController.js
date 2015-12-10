
Ext.define('AdminPanel.controller.MailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MailController',
    refs: [{
        ref: 'MailsGrid',
        selector: 'Mail'
    }],

    views:  ['MailsGrid'],
    
    init: function(){
        
    },
    
    onAdd: function(){
        this.getView().getStore().insert(0,  Ext.createByAlias('widget.Mail', {}));
        this.getView().editingPlugin.startEdit(0, 0);
    },
    
    onDelete: function(){
        var selection = this.getView().getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.getView().getStore().remove(selection);
        }
    },
    
    onSelectionChange:function(selModel, selections){
        this.getView().down('#delete').setDisabled(selections.length === 0);
    }
});

