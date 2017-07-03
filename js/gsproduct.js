
$(function(){
    //店铺的请求
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshop',
        dataType:'json',
        success:function(gsshop){
            console.log(gsshop);
            var html=template('getgsshop',gsshop);
            $('.popsort').find('ul').html(html);
        }
    })
//   地区的请求
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        dataType:'json',
        success:function(gsshoparea){
            console.log(gsshoparea);
            var html=template('getgsshoparea',gsshoparea);
            $('.popcat').find('ul').html(html);
        }
    })
//点击切换事件
$('.filter ul li:first').on('click',function(){
    console.log(123);
    $('.popsort').toggleClass('hide');
})
$('.filter ul li:eq(1)').on('click',function(){
        console.log(456);
        $('.popcat').toggleClass('hide');
    })
$('.filter ul li:eq(2)').on('click',function(){
        console.log(789);
        $('.popprice').toggleClass('hide');
    })

//默认渲染
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsproduct',
        data:{
            shopid:0,
            areaid :0
        },
        dataType:'json',
        success:function(gsproduct){
            console.log(gsproduct);
            var html=template('getgsproduct',gsproduct);
            $('.gs-product-list').find('ul').html(html);
        }
    })
//获取自定义属性
    var shopId=0;
    var areaId=0;
    //点击店铺时发起请求
    $('.popsort').on('click','a',function(){
       shopId=$(this).attr('data-shopid');
       var shopname=$(this).html();
       $('.filter').find('ul').find('li:first').html(shopname);
       $('.popsort').addClass('hide');
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                shopid:shopId,
                areaid :areaId
            },
            dataType:'json',
            success:function(gsproduct){
                console.log(gsproduct);
                var html=template('getgsproduct',gsproduct);
                $('.gs-product-list').find('ul').html(html);
            }
        })
    });
    //点击地区重新发起请求
    $('.popcat').on('click','a',function(){
        areaId=$(this).attr('data-areaid');
        var areaname=$(this).html();
        $('.filter').find('ul').find('li:eq(1)').html(areaname);
        $('.popcat').addClass('hide');
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                shopid:shopId,
                areaid :areaId
            },
            dataType:'json',
            success:function(gsproduct){
                console.log(gsproduct);
                var html=template('getgsproduct',gsproduct);
                $('.gs-product-list').find('ul').html(html);
            }
        })
    });
})

