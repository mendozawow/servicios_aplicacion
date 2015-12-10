Ext.define('AdminPanel.store.Processes', {
    extend: 'Ext.data.Store',
    requires: ['AdminPanel.proxy.BaseProxy'],    
    model: 'AdminPanel.model.Process',
    autoLoad: true,
    autoSync: true,
    sorters:[{property:'pcpu',direction:'DESC'}],
    proxy: {
        type: 'BaseProxy',
        domains: null,
        url: '/processes'
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
            Ext.example.msg(name, Ext.String.format("{0} Process: {1}", verb, record.get('pid')));

        }
    }    
});