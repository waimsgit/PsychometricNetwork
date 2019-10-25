$(document).ready(function(e) {
			CalendarHandler.initialize();  //初始化日历插件
			setActivity.readActivity();   //选择生命周期第一次调用
		});
		
		var setActivity = {
			day:{"1":[3,4,5],"2":[4,5,6],"3":[7,8,9],"4":[10,11,12],"5":[13,14,15],"6":[16,17,18],"7":[19,20,21],"8":[22,23,24],"9":[21,22,23,24,25,26,27],"10":[1,2,3],"11":[4,5,6],"12":[7,8,9]},
			readActivity:function(){
				var that = this;
                //获取当前显示月份				
				//alert($(".selectMonth").text());
				var showMonth = ($(".selectMonth").text());// month月
				showMonth = showMonth.replace(/[^0-9]/ig,"");
				//console.log($("").text());
				var arr = that.day;
				var arrs = [1,2,3];
				for(var key in arr){
					if(key == showMonth){
						//遍历获取每一天			
						var days = arr[key];
						$(".nowItem a").each(function(){
							for(var i =0; i<days.length; i++){
								if(days[i] == $(this).text()){
									$(this).parent().attr("class","item currentItem");
								}
							}
							
						});
					}
				}
				$(".currentItem").on("click",function(){
				     //alert("触发点击事件");
				     var curyear = $(".selectYear").text();
				     var curmonth = $(".selectMonth").text();
				     var curday = $(this).text();
				     //alert(curyear+curmonth+curday+"日")
				     //console.log($("#showtime"));
				     $("#showtime").html(curyear+curmonth+curday+"日");
				     var selectDay = [];
				     var i = 0;
				     $(".currentItem a").each(function(){
				      selectDay[i] = $(this).text();
				      i++;
				     });
				     //alert(selectDay);
				     //alert($(this).children().text());
				     if($(this).children().text() == selectDay[0]){
				      $("#first").css("display","block")
				      $("#second").css("display","none")
				      $("#third").css("display","none")
				     }
				     if($(this).children().text() == selectDay[1]){
				      $("#first").css("display","none")
				      $("#second").css("display","block")
				      $("#third").css("display","none")
				     }
				     if($(this).children().text() == selectDay[2]){
				      $("#first").css("display","none")
				      $("#second").css("display","none")
				      $("#third").css("display","block")
				     }
				     
				});
			}
		}
		
		var CalendarHandler = {
			currentYear: 0,
			currentMonth: 0,
			isRunning: false,
			showYearStart:2009,
			tag:0,
			initialize: function() {
				$calendarItem = this.CreateCalendar(0, 0, 0);
				$("#Container").append($calendarItem);

				$("#context").css("height", $("#CalendarMain").height() - 65 + "px");
				$("#center").css("height", $("#context").height() - 30 + "px");
				$("#selectYearDiv").css("height", $("#context").height() - 30 + "px").css("width", $("#context").width() + "px");
				$("#selectMonthDiv").css("height", $("#context").height() - 30 + "px").css("width", $("#context").width() + "px");
				$("#centerCalendarMain").css("height", $("#context").height() - 30 + "px").css("width", $("#context").width() + "px");

				$calendarItem.css("height", $("#context").height() - 30 + "px"); //.css("visibility","hidden");
				$("#Container").css("height", "0px").css("width", "0px").css("margin-left", $("#context").width() / 2 + "px").css("margin-top", ($("#context").height() - 30) / 2 + "px");
				$("#Container").animate({
					width: $("#context").width() + "px",
					height: ($("#context").height() - 30) * 2 + "px",
					marginLeft: "0px",
					marginTop: "0px"
				}, 300, function() {
					$calendarItem.css("visibility", "visible");
				});
				$(".dayItem").css("width", $("#context").width() + "px");
				var itemPaddintTop = $(".dayItem").height() / 6;
				$(".item").css({
					"width": $(".week").width() / 7 + "px",
					"line-height": itemPaddintTop + "px",
					"height": itemPaddintTop + "px"
				});
				$(".currentItem>a").css("margin-left", ($(".item").width() - 25) / 2 + "px").css("margin-top", ($(".item").height() - 25) / 2 + "px");
				$(".week>h3").css("width", $(".week").width() / 7 + "px");
				this.RunningTime();
			},
			CreateSelectYear: function(showYearStart) {
				CalendarHandler.showYearStart=showYearStart;
				$(".currentDay").show();
				$("#selectYearDiv").children().remove();
				var yearindex = 0;
				for (var i = showYearStart; i < showYearStart+12; i++) {
					yearindex++;
					if(i==showYearStart){
						$last=$("<div>往前</div>");
						$("#selectYearDiv").append($last);
						$last.click(function(){
							CalendarHandler.CreateSelectYear(CalendarHandler.showYearStart-10);
						});
						continue;
					}
					if(i==showYearStart+11){
						$next=$("<div>往后</div>");
						$("#selectYearDiv").append($next);
						$next.click(function(){
							CalendarHandler.CreateSelectYear(CalendarHandler.showYearStart+10);
						});
						continue;
					}
					
					if (i == this.currentYear) {
						$yearItem=$("<div class=\"currentYearSd\" id=\"" + yearindex + "\">" + i + "</div>")
					
					}
					else{
						 $yearItem=$("<div id=\"" + yearindex + "\">" + i + "</div>");
					}
					$("#selectYearDiv").append($yearItem);
					$yearItem.click(function(){
						$calendarItem=CalendarHandler.CreateCalendar(Number($(this).html()),1,1);
						$("#Container").append($calendarItem);
						CalendarHandler.CSS()
					    CalendarHandler.isRunning = true;
					    $($("#Container").find(".dayItem")[0]).animate({
						height: "0px"
					    }, 300, function() {
						$(this).remove();
						CalendarHandler.isRunning = false;
					    });
						$("#centerMain").animate({
						marginLeft: -$("#center").width() + "px"
					}, 500);
					});
					if (yearindex == 1 || yearindex == 5 || yearindex == 9) $("#selectYearDiv").find("#" + yearindex).css("border-left-color", "#fff");
					if (yearindex == 4 || yearindex == 8 || yearindex == 12) $("#selectYearDiv").find("#" + yearindex).css("border-right-color", "#fff");
					
				}
				$("#selectYearDiv>div").css("width", ($("#center").width() - 4) / 4 + "px").css("line-height", ($("#center").height() - 4) / 3 + "px");
				$("#centerMain").animate({
					marginLeft: "0px"
				}, 300);
			},
			//触发月份调用显示日期的函数
			CreateSelectMonth: function() {
				$(".currentDay").show();
				$("#selectMonthDiv").children().remove();
				for (var i = 1; i < 13; i++) {
					if (i == this.currentMonth) $monthItem=$("<div class=\"currentMontSd\" id=\"" + i + "\">" + i + "月</div>");
					else  $monthItem=$("<div id=\"" + i + "\">" + i + "月</div>");
					$("#selectMonthDiv").append($monthItem);
					$monthItem.click(function(){
						$calendarItem=CalendarHandler.CreateCalendar(CalendarHandler.currentYear,Number($(this).attr("id")),1);
						$("#Container").append($calendarItem);
						CalendarHandler.CSS()
					    CalendarHandler.isRunning = true;
					    $($("#Container").find(".dayItem")[0]).animate({
						height: "0px"
					    }, 300, function() {
						$(this).remove();
						CalendarHandler.isRunning = false;
					    });
						$("#centerMain").animate({
						marginLeft: -$("#center").width() + "px"
					}, 500);
					setActivity.readActivity();
					});
					if (i == 1 || i == 5 || i == 9) $("#selectMonthDiv").find("#" + i).css("border-left-color", "#fff");
					if (i == 4 || i == 8 || i == 12) $("#selectMonthDiv").find("#" + i).css("border-right-color", "#fff");
				}
				$("#selectMonthDiv>div").css("width", ($("#center").width() - 4) / 4 + "px").css("line-height", ($("#center").height() - 4) / 3 + "px");
				$("#centerMain").animate({
					marginLeft: -$("#center").width() * 2 + "px"
				}, 300);
				setActivity.readActivity();
			},
			IsRuiYear: function(aDate) {
				return (0 == aDate % 4 && (aDate % 100 != 0 || aDate % 400 == 0));
			},
			CalculateWeek: function(y, m, d) {
				var arr = "7123456".split("");
				with(document.all) {
					var vYear = parseInt(y, 10);
					var vMonth = parseInt(m, 10);		
					var vDay = parseInt(d, 10);
				}
				var week =arr[new Date(y,m-1,vDay).getDay()];
				return week;
			},
			CalculateMonthDays: function(m, y) {
				var mDay = 0;
				if (m == 0 || m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
					mDay = 31;
				} else {
					if (m == 2) {
						//判断是否为芮年
						var isRn = this.IsRuiYear(y);
						if (isRn == true) {
							mDay = 29;
						} else {
							mDay = 28;
						}
					} else {
						mDay = 30;
					}
				}
				return mDay;
			},
			//创建日历
			CreateCalendar: function(y, m, d) {
//日 div				
				$dayItem = $("<div class=\"dayItem\"></div>");
				//获取当前月份的天数
				var nowDate = new Date();
//判断是否为当前月，是否显示今天
				if(y==nowDate.getFullYear()&&m==nowDate.getMonth()+1||(y==0&&m==0))
				$(".currentDay").hide();
//根据传入值创建日期
				var nowYear = y == 0 ? nowDate.getFullYear() : y;
				this.currentYear = nowYear;
				var nowMonth = m == 0 ? nowDate.getMonth() + 1 : m;
				this.currentMonth = nowMonth;
				var nowDay = d == 0 ? nowDate.getDate() : d;
//动态写入选择的年月
				$(".selectYear").html(nowYear + "年");
				$(".selectMonth").html(nowMonth + "月");
				var nowDaysNub = this.CalculateMonthDays(nowMonth, nowYear);
				//获取当月第一天是星期几
				var nowWeek = parseInt(this.CalculateWeek(nowYear, nowMonth, 1));
				//获取上个月的天数
				var lastMonthDaysNub = this.CalculateMonthDays((nowMonth - 1), nowYear);
				if (nowWeek != 0) {
					//生成上月剩下的日期
					for (var i = (lastMonthDaysNub - (nowWeek - 1)); i < lastMonthDaysNub; i++) {
						$dayItem.append("<div class=\"item lastItem\"><a>" + (i + 1) + "</a></div>");
					}
					
				}

				//生成当月的日期
				for (var i = 0; i < nowDaysNub; i++) {
//去掉当前日期
					if (i == (nowDay - 1)) $dayItem.append("<div class=\"item nowItem\"><a>" + (i + 1) + "</a></div>");
					else $dayItem.append("<div class=\"item nowItem\"><a>" + (i + 1) + "</a></div>");
				}

				//获取总共已经生成的天数
				var hasCreateDaysNub = nowWeek + nowDaysNub;
				//如果小于42，往下个月推算
				if (hasCreateDaysNub < 42) {
					for (var i = 0; i <= (42 - hasCreateDaysNub); i++) {
						$dayItem.append("<div class=\"item lastItem\"><a>" + (i + 1) + "</a></div>");
					}
				}
				return $dayItem;
			},
			CSS: function() {
				var itemPaddintTop = $(".dayItem").height() / 6;
				$(".item").css({
					"width": $(".week").width() / 7 + "px",
					"line-height": itemPaddintTop + "px",
					"height": itemPaddintTop + "px"
				});
				$(".currentItem>a").css("margin-left", ($(".item").width() - 25) / 2 + "px").css("margin-top", ($(".item").height() - 25) / 2 + "px");
			},
			CalculateNextMonthDays: function() {
				if (this.isRunning == false) {
					$(".currentDay").show();
					var m = this.currentMonth == 12 ? 1 : this.currentMonth + 1;
					var y = this.currentMonth == 12 ? (this.currentYear + 1) : this.currentYear;
					var d = 0;
					var nowDate = new Date();
					if (y == nowDate.getFullYear() && m == nowDate.getMonth() + 1) d = nowDate.getDate();
					else d = 1;
					$calendarItem = this.CreateCalendar(y, m, d);
					$("#Container").append($calendarItem);

					this.CSS();
					this.isRunning = true;
					$($("#Container").find(".dayItem")[0]).animate({
						height: "0px"
					}, 300, function() {
						$(this).remove();
						CalendarHandler.isRunning = false;
					});
				}
				setActivity.readActivity();
			},
			CalculateLastMonthDays: function() {
				if (this.isRunning == false) {
					$(".currentDay").show();
					var nowDate = new Date();					
					var m = this.currentMonth == 1 ? 12 : this.currentMonth - 1;
					var y = this.currentMonth == 1 ? (this.currentYear - 1) : this.currentYear;
					var d = 0;
					
					if (y == nowDate.getFullYear() && m == nowDate.getMonth() + 1) d = nowDate.getDate();
					else d = 1;
					$calendarItem = this.CreateCalendar(y, m, d);
					$("#Container").append($calendarItem);
					var itemPaddintTop = $(".dayItem").height() / 6;
					this.CSS();
					this.isRunning = true;
					$($("#Container").find(".dayItem")[0]).animate({
						height: "0px"
					}, 300, function() {
						$(this).remove();
						CalendarHandler.isRunning = false;
					});
				}
				setActivity.readActivity();
			},
			CreateCurrentCalendar: function() {
				if (this.isRunning == false) {
					$(".currentDay").hide();
					$calendarItem = this.CreateCalendar(0, 0, 0);
					$("#Container").append($calendarItem);
					this.isRunning = true;
					$($("#Container").find(".dayItem")[0]).animate({
						height: "0px"
					}, 300, function() {
						$(this).remove();
						CalendarHandler.isRunning = false;
					});
					this.CSS();
					$("#centerMain").animate({
						marginLeft: -$("#center").width() + "px"
					}, 500);
				}
			},
			RunningTime: function() {
				var mTiming = setInterval(function() {
					var nowDate = new Date();
					var h=nowDate.getHours()<10?"0"+nowDate.getHours():nowDate.getHours();
					var m=nowDate.getMinutes()<10?"0"+nowDate.getMinutes():nowDate.getMinutes();
					var s=nowDate.getSeconds()<10?"0"+nowDate.getSeconds():nowDate.getSeconds();
					var nowTime = h + ":" + m + ":" + s;
					$("#footNow").html("本地时间 "+nowTime);
				}, 1000);

			}
		}