$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        dataType:'json',
        success:function(info){
            var html=template('tmp', info);
            $('.category').html(html);

            $('.lulu').on('click',function () {
                var titleId = $(this).find('a').data('title-id');
                $(this).find('.category-content').toggleClass('hide');
                var self=$(this);
                $(function(){
                    $.ajax({
                        type:'get',
                        url:'http://127.0.0.1:9090/api/getcategory',
                        dataType:'json',
                        data:{ titleid:titleId },
                        success:function(inf){
                            console.log(inf);
                            if(inf.result.length>=0){
                                var html=template('categorytmp', inf);
                                console.log(html)
                                self.find('.category-content').html(html);
                            }
                        }
                    })
                });
            })
    }
    })
});




