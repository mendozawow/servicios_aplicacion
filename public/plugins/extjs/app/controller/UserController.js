
Ext.define('AdminPanel.controller.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.UserController',
    refs: [{
        ref: 'UsersGrid',
        selector: 'User'
    }],

    views:  ['UsersGrid'],
    
    init: function(){
        
    },
    
    onAdd: function(){
        this.getView().getStore().insert(0,  Ext.createByAlias('widget.User', {}));
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

