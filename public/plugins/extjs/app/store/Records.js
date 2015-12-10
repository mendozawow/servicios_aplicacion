Ext.define('AdminPanel.store.Records', {
    extend: 'Ext.data.Store',
    requires: 'AdminPanel.model.Record',
    model: 'AdminPanel.model.Record',
    autoLoad: false,
    autoSync: true,
    proxy: {
        type: 'BaseProxy',
        domains: null,
        url: '/domains/{domains}/records'
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
            Ext.example.msg(name, Ext.String.format("{0} Record: {1} {2}", verb, record.get('type'), record.get('name')));

        }
    }     
});