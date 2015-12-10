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
            text: 'Enable Google Authenticator',
            handler: function() {
                Ext.Ajax.request({
                    url: 'users/genGAqr',
                    method: 'GET',
                    params: {
                        _token: getToken()
                    },
                    success: function(response){
                        var r = Ext.JSON.decode(response.responseText.trim());
                        Ext.create('Ext.window.Window', {
                            title: 'Google Authenticator QR Code',
                            height: 400,
                            width: 400,
                            layout: 'fit',
                            items: {  // Let's put an empty grid in just to illustrate fit layout
                                xtype: 'container',
                                html: '<img src=\''+r.data+'\' alt="QR Code">'
                            }
                        }).show();
                        // process server response here
                    }
                });
            }
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
