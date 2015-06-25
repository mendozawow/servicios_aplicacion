<head>
    <meta charset="UTF-8">
    <title> AdminLTE 2 with Laravel - @yield('htmlheader_title', 'Your title here') </title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- Bootstrap 3.3.4 -->
    <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <!-- Font Awesome Icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- Ionicons -->
    <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    <!-- Theme style -->
    <link href="/css/AdminLTE.css" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
          page. However, you can choose any other skin. Make sure you
          apply the skin class to the body tag so the changes take effect.
    -->
    <link href="/css/skins/skin-blue.css" rel="stylesheet" type="text/css" />
    <!-- iCheck -->
    <link href="/plugins/iCheck/square/blue.css" rel="stylesheet" type="text/css" />

    <style type="text/css">
        .extjs-item-add {
            background-image: url('/plugins/extjs/examples/shared/icons/fam/add.gif') !important;
        }

        .extjs-item-remove {
            background-image: url('/plugins/extjs/examples/shared/icons/fam/delete.gif') !important;
        }
        
        .msg .x-box-mc {
            font-size:14px;
        }
        #msg-div {
            position:absolute;
            left:50%;
            top:10px;
            width:400px;
            margin-left:-200px;
            z-index:20000;
        }
        #msg-div .msg {
            border-radius: 8px;
            -moz-border-radius: 8px;
            background: #F6F6F6;
            border: 2px solid #ccc;
            margin-top: 2px;
            padding: 10px 15px;
            color: #555;
        }
        #msg-div .msg h3 {
            margin: 0 0 8px;
            font-weight: bold;
            font-size: 15px;
        }
        #msg-div .msg p {
            margin: 0;
        }        
    </style>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>