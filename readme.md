## Hosting Services Admin Panel

Admin panel web application to manage multiple users which could control the registration of multiple domains, e-mails, DNS entries for each domain, HTTP Virtual Hosts and FTP access.
Administrative users also have access to an embedded SSH web console to connect and save sessions to any host.
The app backend was written in PHP using the Laravel 5 framework. For the frontend ExtJS was used, and the backend and frontend connections was through a REST API.
To increase its security the app was secured with double authentication using Google Authenticator.

## Dependencies

The panel was built to work with the following software:
**Apache 2 web server with MySQL support for virtual hosts**
**MySQL**
**Postfix configured with MySQL support**
**PowerDNS**
**GateOne**
**Courier IMAP**
**VSFTPD**

## Official Documentation

Work in progress

### License

Open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
