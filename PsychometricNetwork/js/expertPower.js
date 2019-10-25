//li元素的宽（包括padding，margin，border）
var liW = $('.box_ul li').outerWidth(true)
var len = $('.box_ul li').length
$('.box_ul').css("width",liW*len)
var flag = true
$(".btn_left").click(function(){
	if(flag){
		flag = false
		$('.box_ul').find("li").eq(len-1).prependTo($('.box_ul'))
		$('.box_ul').css({"marginLeft":-liW}).delay(8).queue(function(){
			$('.box_ul').animate({"marginLeft":0})
			flag = true
			$(this).dequeue();
		})
	}
})

$(".btn_right").click(function(){
	if(flag){
		flag = false
		$('.box_ul').animate({"marginLeft":-liW}).delay(8).queue(function(){
			$('.box_ul').find("li").eq(0).appendTo($('.box_ul'))
			$('.box_ul').css({"marginLeft":0})
			flag = true
			$(this).dequeue();
		})
	}
})


//切换分辨率的大小  自动刷新页面
$(window).resize(function(){
    location.reload()
    //这里你可以写你的刷新代码！
});
