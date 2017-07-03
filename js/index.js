$(function () {
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
        success:function (info) {
            // console.log(info);
            var html = template('tmp',info);
            $('.search-big').html(html);
            $('.search').eq(7).nextAll().addClass('hide');
            $('.search a').eq(7).attr('href','javascript:;');
            $('.search').eq(7).click(function () {
                $(this).nextAll().toggleClass('hide');
            });
        }
    });
})







$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function(inf){
            var html = template('tm',inf);
            $('.sh ul').html(html);
            console.log(inf);
        }
    })
})




