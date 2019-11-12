var globalurl="http://192.168.1.145:8886";
//var globalurl="http://localhost:8886";
function geturl(){
	return globalurl;
}


function getlogin(){
	console.log("getlogin!!!!");
	var islogin = false;
	var username;
	islogin = window.localStorage.getItem("isLogin");
	var user = localStorage.getItem("user");
	var  jsonuser = eval("(" + user + ")");
	if(jsonuser){
		username = jsonuser.nickname;
	}
	console.log(islogin)
	if(islogin == "true"){
		console.log("进入了 true!")
		$("#userinf").html('<div class="right-top-right2" id="userbox" >'+
								'<a href=""> <span>'+ username +'</span> <img src="img/indexgrade.png"/> </a>'+
								'<div id="userinfo">'+
								'<ul><li><a href=""><img src="img/indexpersonal.png" alt="" />个人中心</a></li>'+
								'<li><a href="message.html"><img src="img/indexmessage.png" alt="" />消&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;息&nbsp;&nbsp;<span>99+</span></a></li>'+
								'<li><a href=""><img src="img/indexcollect.png" alt="" />收&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;藏 <span>&nbsp;(99+)</span></a></li>'+
								'<li><a href="orderManagement.html"><img src="img/indexdownload.png" alt="" />订&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单 </a></li>'+
								'<li><a href=""><img src="img/logout.png" alt="" />退出登录</a> </li></ul></div></div>');
	}else{
		$("#userinf").html('<div class="right-top-right1">'+
								'<a href="register_1.html">登录</a>'+
							'</div>')
	}
	
}


var HttpRequest = function (options) {
  var defaults = {
    type: 'post',
    headers: {},
    data: {},
    dataType: 'json',
    async: true,
    cache: false,
    beforeSend: null,
    success: null,
    complete: null
  };
  var o = $.extend({}, defaults, options);
  $.ajax({
    url: globalurl + o.url,
    type: o.type,
    headers: {
      'Content-Type': o.contentType,
      'token': o.token
    },
    data: o.data,
    dataType: o.dataType,
    async: o.async,
    beforeSend: function () {
      o.beforeSend && o.beforeSend();
    },
    success: function (res) {
      o.success && o.success(res);
    },
    complete: function () {
      o.complete && o.complete();
    }
  });
};

var loginHttp = function (options) {
  // 登入页无需携带token
  // 后台如果要求 Content-Type 
  if (options.type == 'post') {
    options.contentType = 'application/x-www-form-urlencoded';
  }
  HttpRequest(options);
}
var ajaxHttp = function (options) {
  if (options.type == 'post') {
    options.contentType = 'application/x-www-form-urlencoded';
  }
  // 每次请求携带token
  
  options.token = localStorage.getItem('token');
  
  HttpRequest(options);
}
