Ext.define('AdminPanel.store.Vhosts', {
    extend: 'Ext.data.Store',
    requires: ['AdminPanel.proxy.BaseProxy'],    
    model: 'AdminPanel.model.Vhost',
    autoLoad: false,
    autoSync: true,
    proxy: {
        type: 'BaseProxy',
        domains: null,
        url: '/domains/{domains}/vhosts'
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
            Ext.example.msg(name, Ext.String.format("{0} Virtual Host: {1}", verb, record.get('serverName')));

        }
    }    
});