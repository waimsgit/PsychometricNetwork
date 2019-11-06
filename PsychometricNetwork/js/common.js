window.onload = function(){
//  var box = document.getElementById("userbox");
//	var info = document.getElementById("userinfo");
//	box.onmouseover = function(){
//	    info.style.display = "block";
//	};
//	box.onmouseout = function(){
//  	info.style.display = "none";
//  };
    
 };   
    

   
    
	// 只区分浏览器，不考虑版本
	function myBrowser(){
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1;
		//判断是否Opera浏览器
		if (isOpera) {
		    return "Opera"
		}; 
	
		//判断是否Firefox浏览器
		if (userAgent.indexOf("Firefox") > -1) {
		    return "FF";
		} 
	    if (userAgent.indexOf("Chrome") > -1){
			return "Chrome";
		}
	    
	    //判断是否Safari浏览器
	    if (userAgent.indexOf("Safari") > -1) {
	        return "Safari";
	    } 
	    
	    //判断是否IE浏览器
	    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	        return "IE";
	    }; 
	}
	
		
		//以下是调用上面的函数
		var mb = myBrowser();
		if ("IE" == mb) {
//		    alert("我是 IE");
		}
		
		//判断ie版本
		if (isIE) {
	        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
	        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
	        reIE.test(userAgent);
	        var fIEVersion = parseFloat(RegExp["$1"]);
	        IE8 = fIEVersion == 8.0;
	        var linkNode = document.createElement("link"),
			scriptNode = document.createElement("script");
			linkNode.setAttribute("rel", "stylesheet");
			linkNode.setAttribute("type", "text/css");
			scriptNode.setAttribute("type", "text/javascript");
	      
	        if (IE8) {
	            return "IE8";
	            linkNode.setAttribute("href", "css/all-ie-only.css");
				scriptNode.setAttribute("src", "");
	        }
		}//isIE end

		if ("FF" == mb) {
//		    alert("我是 Firefox");
		}
		if ("Chrome" == mb) {
//		    alert("我是 Chrome");
		}
		if ("Opera" == mb) {
//		    alert("我是 Opera");
		}
		if ("Safari" == mb) {
//		    alert("我是 Safari");
		}




