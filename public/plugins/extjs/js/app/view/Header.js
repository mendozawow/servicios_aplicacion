document.title = 'Admin Panel';

Ext.define('AdminPanel.view.Header', {
    extend: 'Ext.Container',

    xtype: 'app-header',

    title: document.title,
    cls: 'app-header',
    height: 52,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [{
        xtype: 'component',
        cls: 'app-header-logo'
        },{
            xtype: 'component',
            cls: 'app-header-title',
            html: document.title,
            flex: 1
        },{
            xtype: 'button',
            text: 'Logout',
            handler: function() {
                Ext.Msg.confirm('logout?', 'are you sure you want to logout?', function(answer) {
                    if (answer === "yes") {
                        //refreshes the page, erasing memory proxy
                        window.location.href = "/auth/logout";
                    }
                });
            }
    }]
});
