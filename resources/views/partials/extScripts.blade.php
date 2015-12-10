<!-- REQUIRED JS SCRIPTS -->
<script type="text/javascript">
    var $_token = "{{ csrf_token() }}";
    function getToken(){
        return $_token;
    }
    

    var $_roles = new Array();
    @foreach ($user_roles as $role) $_roles.push('{{$role}}'); @endforeach
    function hasRole(name){
        for (var i = 0; i < $_roles.length; i++){
            if ($_roles[i] == name) return true;
        }
        return false;
    }
</script>
<!-- ExtJS -->
<script src="/plugins/extjs/build/include-ext.js?theme=neptune&debug=1" type="text/javascript"></script>
<script src="/plugins/extjs/app/Application.js" type="text/javascript"></script>

<!-- Bootloader development
<script id="microloader" type="text/javascript" src="/plugins/extjs/bootstrap.js"></script>
-->
<!-- GateOne -->
<script id="gateone" type="text/javascript" src="/plugins/gateone/gateone.js"></script>
