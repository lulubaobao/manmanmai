$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getsitenav',
        dataType:'json',
        success:function(sitenav){
            console.log(sitenav);
            var html=template('getsitenav',sitenav);
            $('.link').html(html);
        }
    })
})
