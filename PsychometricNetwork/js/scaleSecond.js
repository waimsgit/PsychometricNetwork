$(function(){ 
				var articlePk = getQueryString("articlePk");
				$.ajax({
					"url": "http://192.168.1.145:8886/scale/get/article",
					"data":{"articlePk":articlePk},
					"datatype": "json",
					"success": function(result){
						vm.articleTitle = result.data.articleTitle;
						vm.articleContent = result.data.articleContent;
					}
				})
})

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

$(function(){
	//引入公共部分侧导航及头部
	$("#side").load("side.html",function(){
		getlogin();
 		$("#icon2").attr("src","img/icon2_2.png");
 	});
 	
 	
 	//分享量表介绍
 	window._bd_share_config={
      "common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},
      "share":{},
      "image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},  
      "selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}
    };
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src=
      'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

    
})
