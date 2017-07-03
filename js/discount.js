var url=location.href;

var arr=url.split('?')[1].split('&').map(function(v){
    return v.split('=')[1];
})
var productId=arr[0];
$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getdiscountproduct',
        data:{productid:productId},
        dataType:'json',
        success:function(info) {
            var html = template('tmp', info);
            $('.container').html(html);
            console.log(info);
        }
    })
})