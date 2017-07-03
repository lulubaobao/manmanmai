$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        data:{pageid:0},
        dataType:'json',
        success:function(moneyctrl){
            var html=template('getmoneyctrl',moneyctrl);
            $('.money-list').find('ul').html(html);
            console.log(moneyctrl);
        }
    })
})
