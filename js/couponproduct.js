var url=location.href;
var arr=url.split('?')[1].split('&').map(function(v){
    return v.split('=')[1];
})

var couponId=arr[0];
$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data:{couponid:couponId},
        dataType:'json',
        success:function(couponproduct){
            console.log(couponproduct);
            var html=template('getcouponproduct',couponproduct);
            $('.coupon-list').find('ul').html(html);
        }
    })
})