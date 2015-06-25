Ext.define('AdminPanel.proxy.BaseProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.BaseProxy',
    extraParams: getStoreParams(),
    config:{
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        },
        listeners: {
            exception : function(proxy, response, operation) {
                var r = Ext.JSON.decode(response.responseText);
                var msg = '';
                for (var prop in r) {
                    msg += '<p><strong>' + prop + "</strong>: " + r[prop] + '</p>';
                }
                Ext.example.msg(Ext.String.capitalize(operation.action),
                    Ext.String.format("({0} - {1}) {2}", response.status,response.statusText, msg));
            }                
        }        
    },
    
    buildUrl: function(request) { 
        var url = this.callParent(arguments); 
 
        return this.replaceTokens(url); 
    }, 
 
    replaceTokens: function(str) {
        var me = this; 
 
        // Find and replace using a RegExp 
        return str.replace(/{(.*?)}/g, function(full, token) { 
            return encodeURIComponent(me[token]); 
        }); 
    } 
});