Ext.define('AdminPanel.store.Mails', {
    extend: 'Ext.data.Store',
    requires: 'AdminPanel.model.Mail',
    model: 'AdminPanel.model.Mail',
    autoLoad: false,
    autoSync: true,
    proxy: {
        type: 'BaseProxy',
        domains: null,
        url: '/domains/{domains}/mails'
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
            Ext.example.msg(name, Ext.String.format("{0} Mail: {1}", verb, record.get('name')));

        }
    }     
});