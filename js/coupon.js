$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcoupon',
        dataType:'json',
        success:function(coupon){
            console.log(coupon);
            var html=template('getcoupon',coupon);
            $('.clearfix').html(html);
        }
    })
})
