Ext.application({
    name: 'AdminPanel',
    appFolder: '/plugins/extjs/js/app',
    autoCreateViewport: 'AdminPanel.view.Viewport',
    
    models: ['Vhost','Domain','Mail','Record','FtpUser'],
    stores: ['Vhosts','Domains','Mails','Records','FtpUsers']
});