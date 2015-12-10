Ext.define('AdminPanel.store.FtpUsers', {
    extend: 'Ext.data.Store',
    requires: 'AdminPanel.model.FtpUser',
    model: 'AdminPanel.model.FtpUser',
    autoLoad: false,
    autoSync: true,
    proxy: {
        type: 'BaseProxy',
        domains: null,
        url: '/domains/{domains}/ftpusers'
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
            Ext.example.msg(name, Ext.String.format("{0} Ftp User: {1}", verb, record.get('username')));

        }
    }     
});