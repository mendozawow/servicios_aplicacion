Ext.define('AdminPanel.model.Process', {
    extend: 'Ext.data.Model',
    alias: 'widget.Process',
    fields: ['pid','ppid','pcpu','pmem','nice','start_time','stat','tty','user','args'],
    idProperty: 'pid',
    validators: [{
        type: 'length',
        field: 'nice',
        min: 1
    }]
});