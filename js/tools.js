//获取id
(function () {
    var tools = {
        getid:function (name) {
            var reg = new RegExp("(^|&)" +
                name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    }
    window.tools = tools;
})(window);


