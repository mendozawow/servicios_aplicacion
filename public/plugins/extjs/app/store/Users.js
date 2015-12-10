Ext.define('AdminPanel.store.Users', {
    extend: 'Ext.data.Store',
    requires: 'AdminPanel.model.User',
    model: 'AdminPanel.model.User',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'BaseProxy',
        domains: null,
        url: '/users'
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
            Ext.example.msg(name, Ext.String.format("{0} User: {1}", verb, record.get('name')));

        }
    }     
});