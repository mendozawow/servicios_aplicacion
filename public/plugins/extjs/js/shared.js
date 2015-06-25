/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getStoreParams(){
    return {_token: getToken()};
}

Ext.onReady(function(){
    Ext.Ajax.on('beforerequest', function (conn, options) {
       if (!(/^http:.*/.test(options.url) || /^https:.*/.test(options.url))) {
         if (typeof(options.headers) == "undefined") {
           options.headers = {'X-CSRFToken': Ext.util.Cookies.get('csrftoken')};
         } else {
           options.headers.extend({'X-CSRFToken': Ext.util.Cookies.get('csrftoken')});
         }                        
       }
    }, this);    
});

Ext.example = function(){
    var msgCt;

    function createBox(t, s){
       return '<div class="msg ' + Ext.baseCSSPrefix + 'border-box"><h3>' + t + '</h3><p>' + s + '</p></div>';
    }
    return {
        msg : function(title, format) {
            // Ensure message container is last in the DOM so it cannot interfere with
            // layout#isValidParent's DOM ordering requirements.
            if (msgCt) {
                document.body.appendChild(msgCt.dom);
            } else {
                msgCt = Ext.DomHelper.append(document.body, {id:'msg-div'}, true);
            }
            var s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
            var m = Ext.DomHelper.append(msgCt, createBox(title, s), true);
            m.hide();
            m.slideIn('t').ghost("t", { delay: 5000, remove: true});
        }
    };
}();
