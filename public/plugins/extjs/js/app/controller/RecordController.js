Ext.define('AdminPanel.controller.RecordController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.RecordController',
    refs: [{
        ref: 'RecordsGrid',
        selector: 'Record'
    }],

    views:  ['RecordsGrid'],
    
    init: function(){
        
    },
    
    onAdd: function(){
        this.getView().getStore().insert(0,  Ext.createByAlias('widget.Record', {}));
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

