window.onload = function(){
//  var box = document.getElementById("userbox");
//	var info = document.getElementById("userinfo");
//	box.onmouseover = function(){
//	    info.style.display = "block";
//	};
//	box.onmouseout = function(){
//  	info.style.display = "none";
//  };
    
    
    
    function getBrowser() {
	var ua = window.navigator.userAgent;
	var isIE = window.ActiveXObject != undefined && ua.indexOf("MSIE") != -1;
	var isFirefox = ua.indexOf("Firefox") != -1;
	var isOpera = window.opr != undefined;
	var isChrome = ua.indexOf("Chrome") && window.chrome;
	var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
	if(isIE) {
		return "IE";
	} else if(isFirefox) {
		return "Firefox";
	} else if(isOpera) {
		return "Opera";
	} else if(isChrome) {
		return "Chrome";
	} else if(isSafari) {
		return "Safari";
	} else {
		return "Unkown";
	}
}

var linkNode = document.createElement("link"),
	scriptNode = document.createElement("script");
linkNode.setAttribute("rel", "stylesheet");
linkNode.setAttribute("type", "text/css");
scriptNode.setAttribute("type", "text/javascript");

if(getBrowser() == "IE") {
	linkNode.setAttribute("href", "css/IE.css");
	scriptNode.setAttribute("src", "js/index-ie.js");
} else if(getBrowser() == "Firefox") {
	linkNode.setAttribute("href", "css/index-firefox.css");
	scriptNode.setAttribute("src", "");
} else if(getBrowser() == "Opera") {
	linkNode.setAttribute("href", "css/index-opera.css");
	scriptNode.setAttribute("src", "");
} else if(getBrowser() == "Chrome") {
	linkNode.setAttribute("href", "css/ft-carousel.css");
	scriptNode.setAttribute("src", "");
} else if(getBrowser() == "Safari") {
	linkNode.setAttribute("href", "css/Safari.css");
	scriptNode.setAttribute("src", "");
}
document.head.appendChild(linkNode);
document.head.appendChild(scriptNode);
    
    
};


