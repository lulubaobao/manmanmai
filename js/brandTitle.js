$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrandtitle',
        dataType:'json',
        success:function(brandtitle){
            console.log(brandtitle);
            var html=template('getbrandtitle',brandtitle);
            $('.row').find('ul').html(html);
        }
    })
})
