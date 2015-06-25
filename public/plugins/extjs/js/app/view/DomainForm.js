Ext.define('AdminPanel.view.DomainForm', {
    extend:'Ext.form.Panel',
    domainStore: null,
    alias: 'widget.DomainForm',
    title: 'Add Domain',
    bodyPadding: 5,
    width: 350,

    // The form will submit an AJAX request to this URL when submitted
    url: '/domains',

    method: 'POST',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Domain',
        name: 'name',
        allowBlank: false
    },{
        xtype: 'hiddenfield',
        name: '_token',
        value: getToken()
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Submit',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                //form.owner.domainStore.insert(0,  Ext.createByAlias('widget.Domain', {name: form.findField('name').getValue()}));
                form.submit({
                    success: function(form, action) {
                       Ext.Msg.alert('Success', 'Domain created successfully');
                       form.owner.up('window').close();
                       form.owner.domainStore.reload();
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Failed', 'Domain creation failed');
                    }
                });
            }
        }
    }]
});