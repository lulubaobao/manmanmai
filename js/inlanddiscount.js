$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getinlanddiscount',
        dataType:'json',
        success:function(inlanddiscount){
            console.log(inlanddiscount);
            var html=template('getinlanddiscount' ,inlanddiscount);
            $('.inland-discount-list').find('ul').html(html);
        }
    })
})
