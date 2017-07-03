 var url=location.href;
console.log(url);
var arr=url.split('?')[1].split('&').map(function(v){
    return v.split('=')[1];
});

var productid=arr[0];
 console.log(productid);




//商品图片的请求
$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproduct',
        data:{ productid: productid},
        dataType:'json',
        success:function(product){
            var html=template('getproduct',product);
            $('.bj').html(html);
            console.log(product);
        }
    })
});
//评论区域的请求
$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{ productid:productid},
        dataType:'json',
        success:function(productcom){
            var html=template('getproductcom',productcom);
            $('.com-list').find('ul').html(html);
            console.log(productcom);
        }
    })
});