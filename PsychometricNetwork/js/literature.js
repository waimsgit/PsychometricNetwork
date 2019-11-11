$(function(){
	//引入公共部分侧导航及头部
	$("#side").load("side2.html",function(){
		getlogin();
 		$("#icon2").attr("src","img/icon2_2.png");
 });
})
