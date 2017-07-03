
$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType:'json',
        success:function(baicaijiatitle){
            console.log(baicaijiatitle);
            var html=template('getbaicaijiatitle',baicaijiatitle);
            $('.tabs').html(html);
            //默认渲染第一页
            $('.tabs li:first').addClass('active');
            $.ajax({
                type:'get',
                url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
                data:{titleid:0},
                dataType:'json',
                success:function (baicaijiaproduct) {
                    console.log(baicaijiaproduct);
                    var html=template('getbaicaijiaproduct',baicaijiaproduct);
                    $('.bcj-list').find('ul').html(html);
                }
            })

            $('.tabs li a').on('click',function(){
                $(this).parent('li').addClass('active');
                $(this).parent('li').siblings('li').removeClass('active');
                var titleId=$(this).attr('data-tit');
                $.ajax({
                    type:'get',
                    url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
                    data:{titleid:titleId},
                    dataType:'json',
                    success:function (baicaijiaproduct) {
                        console.log(baicaijiaproduct);
                        var html=template('getbaicaijiaproduct',baicaijiaproduct);
                        $('.bcj-list').find('ul').html(html);
                    }
                })
            })
        }
    })
})