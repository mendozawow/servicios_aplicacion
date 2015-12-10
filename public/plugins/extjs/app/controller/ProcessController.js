
Ext.define('AdminPanel.controller.ProcessController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ProcessController',
    refs: [{
        ref: 'ProcessesGrid',
        selector: 'Process'
    }],

    views:  ['ProcessesGrid'],
    
    init: function(){
        
    },
    
    onReload: function(){
        this.getView().getStore().reload();
    },
    
    onStart: function(){
        console.log('starting process');
    },
    
    onStop: function(){
        console.log('stopping process');
    }
});

