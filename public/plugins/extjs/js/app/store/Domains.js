Ext.define('AdminPanel.store.Domains', {
    extend: 'Ext.data.Store',
    requires: ['AdminPanel.proxy.BaseProxy'],    
    model: 'AdminPanel.model.Domain',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'BaseProxy',
        url: '/domains'
    },
    listeners: {
        write: function(store, operation){
            var record = operation.getRecords()[0],
                name = Ext.String.capitalize(operation.action),
                verb;


            if (name == 'Destroy') {
                verb = 'Destroyed';
            } else {
                verb = name + 'd';
            }
            Ext.example.msg(name, Ext.String.format("{0} Domain: {1}", verb, record.get('name')));

        }
    }    
});