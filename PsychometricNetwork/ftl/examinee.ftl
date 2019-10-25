<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>首页-被试</title>
<link rel="stylesheet" type="text/css" href="../css/css1.css">
<link rel="Shortcut Icon" href="../img/LOGO.png" type="image/x-icon" />

<link rel="stylesheet" type="text/css" href="../css/easyui.css">
<link rel="stylesheet" type="text/css" href="../css/style.css">
<link rel="stylesheet" type="text/css" href="../css/page.css">


<script src="../js/jquery-1.11.0.min.js"></script>
<script src="../js/jquery.easyui.min.js"></script>
<script src="../js/page.js"></script>
<script type="text/javascript" src="../js/common/layer/layer.js"></script>
<script>
</script>
</head>

<body>
<div class="bigone">
       <div class="bignav">
             <div class="nav">
                 <div class="navleft">
                     <ul class="nl">
                       <li><a href="#"  style=" background-color:rgb(16,160,178); color:white;font-weight:bold;">主页</a>
                       </li>
                     </ul>
                 </div>
                 <div class="navright">
                     <ul class="nr">
                       <li><a href="/examinee/load/account">本人账户</a></li>
                       <@shiro.hasRole name="100001">
			   			   <li>
                       		<a href="/examinee/member/addAccount">添加主试</a>
	                       </li>
	                       <li>
                       		<a href="/examinee/member/list">主试列表</a>
	                       </li>
		   			   </@shiro.hasRole>
                       <!--<li><a href="#">资源库</a></li>
                       <li><a href="#">通知</a></li>
                       <li><a href="#">反馈</a></li>
                       <li><a href="#">帮助</a></li>-->
                       <li><a href="/examinee/u/logout">退出</a></li>
                     </ul>
                 </div>
             </div>
         
          </div>
          
          <div class="neir">
             <div class="neinav">
                  <ul>
                    <li><a href="../evaluate/examinee.html" style="font-weight:bold; background-color:grb(11,89,126); color:white;">被试</a>  </li>
                  </ul>
                  <a href="" onclick="javascript:history.back(-1);" class="back">返回></a>
                  <div class="neidibu">
                  </div>
              </div>
              
         <div class="tjbs">
           <a href="/examinee/c/person">添加被试</a>
           <!--<a href="#">修改</a>
           <a href="#">创建组</a>
           <a href="#" style="width:120px;">分配到新的评估</a>
           <a href="#">更多</a>
           <a href="#">筛选</a>
           <button>重新排序</button>-->
         </div>          
          
<div class="queryBox">

<!-- 列表-->
<div class="queryList" style="margin-left:0">
	<table class="easyui-datagrid" cellspacing="0" cellpadding="0" width="100%"  height="318px"
		   data-options="
			singleSelect: true,
			collapsible: true,
			fitColumns: true,
			url: '',
			method: 'get',
			onLoadSuccess: function(){
				$(this).datagrid('freezeRow');
			}" >
		<thead data-options="frozen:true">
		<tr>
			<th data-options="frozen:true,field:'name'">序号</th>
			<th data-options="frozen:true,field:'operate'">操作</th>
			<th data-options="frozen:true,field:'sex'">姓名</th>
			<th data-options="frozen:true,field:'birth'">ID</th>
		</tr>
		</thead>
		<thead>
		<tr class="listTit tabTh">
			<th data-options="frozen:true,field:'file'">性别</th>
			<th data-options="frozen:true,field:'number'">手机号</th>
			<th data-options="frozen:true,field:'tel'">婚姻状态</th>
			<th data-options="frozen:true,field:'mobile'">籍贯</th>
			<th data-options="frozen:true,field:'people'">居住地</th>
			<th data-options="frozen:true,field:'date'">出生日期</th>
			<th data-options="frozen:true,field:'sftx'">预约时间</th>
			<th data-options="frozen:true,field:'way'">民族</th>
			
		</tr>
		</thead>

		<tbody id="content" class="easyui-panel" style="height:318px"
			   data-options="href:''">
		<#list tests as test>
		<tr class="listTr">
			<td>${test.id}</td>
			<td><img src="../img/images/rep_2.png"/ style="vertical-align:middle"><a href="/examinee/f/report?testid=${test.testid}" class="lookBtn" style="cursor: pointer;" id="report">报告
             </a> /
			 <img src="../img/images/rep.png"/ width="15" style="vertical-align:middle">
             <a href="/examinee/e/score?testid=${test.testid}" style="cursor: pointer;" class="lookBtn">录入成绩
            </a>
            <@shiro.hasRole name="100001">
		  		/
            <a  href="/examinee/member/delete?testid=${test.testid}" style="cursor: pointer;" class="lookBtn">删除</a>
  			</@shiro.hasRole>
            	
            </td>
			<td>${test.name}</td>
			<td id="testid">${test.testid}</td>
			<td>${test.sex}</td>
			<td>${test.phonenum}</td>
			<td>${test.iswedding}</td>
			<td>${test.nativeplace}</td>
			<td>${test.place}</td>
			<td>${test.birth}</td>
			<td>${test.time}</td>
			<td>${test.remark}</td>
		</tr>
		</#list>
		</tbody>
	</table>
</div>

<ul class="page" id="page"></ul>
</div>
  <script type="text/javascript">

    function tt(dd){
        //alert(dd);
    }
    var GG = {
        "kk":function(mm){
            //alert(mm);
            //console.log("hellos");
            window.location.href="index?pageNow="+mm;
            }
    }
    $("#page").initPage(${totalCount},${pageNow},GG.kk);
</script>
         
          
</div>
     <div class="sabe"></div>
</div>
</body>
</html>
