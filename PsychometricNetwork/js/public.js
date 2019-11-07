var globalurl="http://192.168.1.145:8886";
//var globalurl="http://localhost:8886";
function geturl(){
	return globalurl;
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
