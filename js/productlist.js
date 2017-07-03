
var url=location.href;
console.log(url);
var arr = url.split('?')[1].split('&').map(function(v){
    return v.split('=')[1];
})
console.log(arr);
var title=decodeURI(arr[1])+'>';
$('#listTitle').html(title);

var categoryid=arr[0];
var pageId=arr[2];
console.log(pageId);
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductlist',
        data:{
            categoryid:categoryid,
        },
        dataType:'json',
        success:function(productlist){
            var html=template('tmp',productlist);
            $('.product').html(html);
            console.log(productlist);
        }
    })
    //点击事件
    $('.page').find('span:first').on('click','a',function(){
        console.log(1323);
        pageId--;
        console.log(pageId);
        console.log(categoryid);
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getproductlist',
            data:{
                categoryid:categoryid,
                pageid:pageId
            },
            dataType:'json',
            success:function(productlist){
                console.log(666);
                console.log(productlist);
                var html=template('tmp1',productlist);
                $('.product').html(html);
            }
        })
    })

