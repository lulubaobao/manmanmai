var url=window.location.href;
var arr=url.split('?')[1].split('&').map(function(v){
    return v.split('=')[1];
});
var brandtitleId=arr[0];
$(function(){
    //品牌的请求
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrand',
        data:{brandtitleid:brandtitleId},
        dataType:'json',
        success:function(brand){
            console.log(brand);
            var html=template('getbrand',brand);
            $('.row').find('ul').html(html);
        }
    })
//    销量的请求
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        data:{
            brandtitleid:brandtitleId,
            pagesize:4
        },
        dataType:'json',
        success:function(brandproductlist){
            img=brandproductlist.result[0].productImg;
            name=brandproductlist.result[0].productName;
            res=brandproductlist.result[0].productId;
            console.log(res);
            console.log(brandproductlist);
            var html=template('getbrandproductlist',brandproductlist);
            $('.product-list').find('ul').html(html);

      //    评论的请求
            $.ajax({
                type:'get',
                url:'http://127.0.0.1:9090/api/getproductcom',
                data:{productid :res},
                dataType:'json',
                success:function(productcom){
                    console.log(productcom);
                    var html=template('getproductcom',productcom);
                    $('.product-com').find('ul').html(html);
                    $('.pic').html(img);
                    $('.tit').html(name);
                }
            })
        }
    })
})
