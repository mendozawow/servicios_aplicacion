<!-- REQUIRED JS SCRIPTS -->
<script type="text/javascript">
    $_token = "{{ csrf_token() }}";
    function getToken(){
        return $_token;
    }
</script>
<!-- ExtJS -->
<script src="/plugins/extjs/build/include-ext.js?theme=neptune&debug=1" type="text/javascript"></script>
<script src="/plugins/extjs/js/shared.js" type="text/javascript"></script>
<script src="/plugins/extjs/js/app/app.js" type="text/javascript"></script>
