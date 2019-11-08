


// 引入公共部分侧导航和头部
$(function(){
	$("#side").load("side.html",function(){
		getlogin();
 		$("#icon1").attr("src","img/icon1_1.png");
 	});
})



//合作单位
$(function(){
	var liW = $('.box_ul li').outerWidth(true)
	var len = $('.box_ul li').length
	$('.box_ul').css("width",liW*len)
	var flag = true
	$(".btn_left").click(function(){
		if(flag){
			flag = false
			$('.box_ul').find("li").eq(len-1).prependTo($('.box_ul'))
			$('.box_ul').css({"marginLeft":-liW}).delay(9).queue(function(){
				$('.box_ul').animate({"marginLeft":0})
				flag = true
				$(this).dequeue();
			})
		}
	})
	
	$(".btn_right").click(function(){
		if(flag){
			flag = false
			$('.box_ul').animate({"marginLeft":-liW}).delay(9).queue(function(){
				$('.box_ul').find("li").eq(0).appendTo($('.box_ul'))
				$('.box_ul').css({"marginLeft":0})
				flag = true
				$(this).dequeue();
			})
		}
	})
			
})


