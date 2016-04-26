<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MyLayout.aspx.cs" Inherits="SAB.layouts.MyLayout" %>
<%@ Register TagPrefix="sc" Namespace="Sitecore.Web.UI.WebControls" Assembly="Sitecore.Kernel" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Angular 2 Sitecore</title>

    <script src="/dist/lib/es6-shim.min.js"></script>
    <script src="/dist/lib/system-polyfills.js"></script>
    <script src="/dist/lib/shims_for_IE.js"></script>
    <script src="/dist/lib/angular2-polyfills.js"></script>
    <script src="/dist/lib/system.src.js"></script>
    <script src="/dist/lib/Rx.js"></script>
    <script src="/dist/lib/angular2.dev.js"></script>
    <script src="/dist/lib/router.dev.js"></script>
</head>
<body>
    <div>
            <sc:Placeholder runat="server" Key="Content" />  
    </div>
</body>
    <script>
        System.config({
            map: {
                app: '/dist'
            },
            packages: {
            app: {
            format: 'register',
            defaultExtension: 'js'
            }
        }
        });
        System.import('/dist/app/main')
            .then(null, console.error.bind(console));
    </script>
</html>
