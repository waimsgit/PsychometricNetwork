var name = "somoveLanguage";
function chgLang() {
  var value = $("#ddlSomoveLanguage").children('option:selected').val();
  SetCookie(name, value);
  console.log("come in chgLang" + name + value);
  location.reload();
}
function SetCookie(name, value) {
  var Days = 30; //此 cookie 将被保存 30 天
  var exp = new Date(); //new Date("December 31, 9998");
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){ //取cookies函数
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
  return null
}
$(function() {
  var uulanguage = (navigator.language || navigator.browserLanguage).toLowerCase();
  console.log("come in readly" + uulanguage);
 
  if (uulanguage.indexOf("en") > -1) {
    $("[data-localize]").localize("text", {  //**主要的代码** jquery.localize.js 底层实现切换逻辑
      pathPrefix: "lang",
      language: "en"
    });
     console.log("come in en");
  } else if (uulanguage.indexOf("ja") > -1) {
    $("[data-localize]").localize("text", {
      pathPrefix: "lang",
      language: "ja"
    });
     console.log("come in ja");
  } else {
    $("[data-localize]").localize("text", {
      pathPrefix: "lang",
      language: "en"
    });
    console.log("come in moren en");
  };
   //根据cookie选择语言
  if (getCookie(name) != "") {
    if (getCookie(name) == "ja") {
      $("[data-localize]").localize("text", {
        pathPrefix: "lang",
        language: "ja"
      });
      console.log("come in cookie ja");
    }
    if (getCookie(name) == "en") {
      $("[data-localize]").localize("text", {
        pathPrefix: "lang",
        language: "en"
      });
      console.log("come in cookie en");
    }
  }
});