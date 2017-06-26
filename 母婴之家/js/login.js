//___________小二级导航(封装的函数fSsn)
$(document).ready(function(){
	//如果是退出按钮退出当前的用户登录，不是退出跳转注册
	var username = $.cookie("username");
	if(username){
		$("#loginBtn").html(username);
		$("#regBtn").html("[退出]");
		$(".user-wel span").html("您好！");
		$(".userlogin").html(username);
		$(".usersign").css("display","none");
		$(".user-order").css("display","block");
		$("#loginBtn").attr("href","##");
		$("#regBtn").attr("href","##");
		$("#regBtn").click(function(){
			$("#loginBtn").html("[登录]");
			$("#regBtn").html("[免费注册]");
			$.cookie("username","",{expires: -1, path: "/"})
		})
	}else{
		$("#loginBtn").html("[登录]");
		$("#regBtn").html("[免费注册]");
		$("#loginBtn").attr("href","login.html");
		$("#regBtn").attr("href","register.html");
	};
	// 给侧条购物车添加商品总数
	var allNum = 0;
	var goods = $.cookie("cars") ? JSON.parse($.cookie("cars")) : {};
	for(var i in goods){
		allNum += goods[i].num;
		$("#cartSlideNum").html("("+allNum+")");
	}
	// 点击侧条的购物车按钮跳转到购物车页面
	$("#cartSlideNum").parent().click(function(){
		location.href = "../html/shopCar.html";
	});
	
	/*  phonebox运动 */
	$("#phonebox").hover(
		function(){
			$("#phonebox i").css("backgroundPosition","-320px -265px");
			$("#phonebox a").css("color","#ff9900");
			$("#phonehidediv").css("display","block");
			$("#phonehidediv").addClass("hoverphonediv");
		},function(){
			$("#phonebox i").css("backgroundPosition","-320px -240px");
			$("#phonebox a").css("color","black");
			$("#phonehidediv").css("display","none");
			$("#phonehidediv").removeClass("hoverphonediv");
		});
	$("#phonebox").prev().hover(function(){
			$("#phonebox").prev().css("color","#ff9900");
		},function(){
			$("#phonebox").prev().css("color","black");
		}
	);
	/*  二级显示 */

	function fSsn(id,Theader){  //id="#ssn-home"  Theader="#Theader_down01"
		$(id).hover(function(){
			$(id).addClass("ssn-hover ssn-home-hover");
			$(Theader).css("display","block");
			$(id+" .ssn-hover-div b").css({"borderColor":"transparent transparent #ff9900","top":"-5px"});
		},function(){
			$(id).removeClass("ssn-hover ssn-home-hover");
			$(Theader).css("display","none");
			$(id+" .ssn-hover-div b").css({"borderColor":"#666666 transparent transparent","top":"0px"});
		})
	}

	fSsn("#ssn-home","#Theader_down01");
	fSsn("#ssn-mybrand","#Theader_down02");
	fSsn("#ssn-sitemap","#Theader_down03");
	/*  右边竖条登录 */

	$(".level-close").click(function(){
		$(this).parent().parent().css({"display":"none"});
	})
	/*  实现右边鼠标移上动画的函数 */
	function fRightAnimate(target){
		$(target).hover(function(){
			$(this).children().eq(1).css({"display":"block"});
			$(this).children().eq(1).animate({"right":"31px"},100);
		},function(){
			$(this).children().eq(1).css({"display":"none","right":"55px"});
		})
	}
	fRightAnimate("#myzone");
	fRightAnimate("#mycollect");
	fRightAnimate("#myservice");
	fRightAnimate("#gototop");
	
	$(".level-2 .level-dt a").hover(function(){
		$(this).children().css("color","#fff");
	},function(){
		$(this).children().css("color","#ff9900");
	})
	$("#gototop").click(function(){
		$("html, body").stop().animate({scrollTop:0}, 500);
	})
})
/*----邮箱验证 /^1[34578]\d{9}$|^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/---------*/
var reUser = /^1[34578]\d{9}$|^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
$("#login-email").focus(function(){
	$(this).removeClass("g-ipt");
	$(this).removeClass("g-ipt-err");
	$(this).addClass("g-ipt-active");
	$("#login-emailTip").css("display","none");
})

$("#login-email").blur(function(){
	fUser();
})
function fUser(){
		if(reUser.test($("#login-email").val()) && $("#login-email").val()){
			$("#login-email").removeClass("g-ipt-active");
			$("#login-email").addClass("g-ipt-cor");
			$("#login-emailTip").find("p").removeClass("noticeWrap-err");
			$("#login-emailTip").find("p").addClass("noticeWrap-suc");
			$("#login-emailTip").find("b").removeClass("ico-warning")
			$("#login-emailTip").find("b").addClass("ico-succ");
			$("#login-emailTip").find(".txt-err").html("");
		}else if($("#login-email").val()==""){
			$("#login-email").removeClass("g-ipt-active");
			$("#login-email").toggleClass("g-ipt-err");
			$("#login-emailTip").find("p").removeClass("noticeWrap-suc");
			$("#login-emailTip").find("p").addClass("noticeWrap-err");
			$("#login-emailTip").find("b").removeClass("ico-succ");
			$("#login-emailTip").find("b").addClass("ico-warning");
			$("#login-emailTip").find(".txt-err").html("账户不能为空！");
		}else{
			$("#login-email").removeClass("g-ipt-active");
			$("#login-email").toggleClass("g-ipt-err");
			$("#login-emailTip").find("p").removeClass("noticeWrap-suc");
			$("#login-emailTip").find("p").addClass("noticeWrap-err");
			$("#login-emailTip").find("b").removeClass("ico-succ");
			$("#login-emailTip").find("b").addClass("ico-warning");
			$("#login-emailTip").find(".txt-err").html("账户格式不正确！");
		}
		$("#login-emailTip").css("display","block");	
	}
/*------------------密码格式验证 /^[a-zA-Z0-9]{6,10}$/ -------------------*/
var rePwd = /^[a-zA-Z0-9]{6,20}$/ ;
$("#password").focus(function(){
	$(this).removeClass("g-ipt");
	$(this).removeClass("g-ipt-err");
	$(this).addClass("g-ipt-active");
})
$("#password").blur(function(){
	fPwd();
})
function fPwd (){
		if(rePwd.test($("#password").val()) && $("#password").val()){
			$("#password").removeClass("g-ipt-active");
			$("#password").addClass("g-ipt-cor");
			$("#passwordTip").find("p").removeClass("noticeWrap-err");
			$("#passwordTip").find("p").addClass("noticeWrap-suc");
			$("#passwordTip").find("b").removeClass("ico-warning")
			$("#passwordTip").find("b").addClass("ico-succ");
			$("#passwordTip").find(".txt-err").html("");
		}else if($("#password").val()==""){
			$("#password").removeClass("g-ipt-active");
			$("#password").toggleClass("g-ipt-err");
			$("#passwordTip").find("p").removeClass("noticeWrap-suc");
			$("#passwordTip").find("p").addClass("noticeWrap-err");
			$("#passwordTip").find("b").removeClass("ico-succ");
			$("#passwordTip").find("b").addClass("ico-warning");
			$("#passwordTip").find(".txt-err").html("密码不能为空！");
		}else{
			$("#password").removeClass("g-ipt-active");
			$("#password").toggleClass("g-ipt-err");
			$("#passwordTip").find("p").removeClass("noticeWrap-suc");
			$("#passwordTip").find("p").addClass("noticeWrap-err");
			$("#passwordTip").find("b").removeClass("ico-succ");
			$("#passwordTip").find("b").addClass("ico-warning");
			$("#passwordTip").find(".txt-err").html("密码长度为6-20位字符");
		}
		$("#passwordTip").css("display","block");
	}
/*-------------------------- 验证码 --------------------------------------*/
var reYzm = /^[a-zA-Z0-9]{6}$/ ;
$("#get-code").focus(function(){
	$(this).removeClass("g-ipt-err");
	$(this).removeClass("codetxt");
	$(this).addClass("g-ipt-active");
})
$("#get-code").blur(function(){
	fYzm();
})
function fYzm(){
	if(reYzm.test($("#get-code").val()) && $("#get-code").val()){
		$("#get-code").removeClass("g-ipt-active");
		$("#get-code").addClass("codetxt");
		$("#get-codeTip").find("p").removeClass("noticeWrap-err");
		$("#get-codeTip").find("p").addClass("noticeWrap-suc");
		$("#get-codeTip").find("b").removeClass("ico-warning")
		$("#get-codeTip").find("b").addClass("ico-succ");
		$("#get-codeTip").find(".txt-err").html("");
	}else if($("#get-code").val()==""){
		$("#get-code").removeClass("g-ipt-active");
		$("#get-code").toggleClass("g-ipt-err");
		$("#get-codeTip").find("p").removeClass("noticeWrap-suc");
		$("#get-codeTip").find("p").addClass("noticeWrap-err");
		$("#get-codeTip").find("b").removeClass("ico-succ");
		$("#get-codeTip").find("b").addClass("ico-warning");
		$("#get-codeTip").find(".txt-err").html("验证码不能为空！");
	}else{
		$("#get-code").removeClass("g-ipt-active");
		$("#get-code").toggleClass("g-ipt-err");
		$("#get-codeTip").find("p").removeClass("noticeWrap-suc");
		$("#get-codeTip").find("p").addClass("noticeWrap-err");
		$("#get-codeTip").find("b").removeClass("ico-succ");
		$("#get-codeTip").find("b").addClass("ico-warning");
		$("#get-codeTip").find(".txt-err").html("请输入正确的验证码！");
	}
	$("#get-codeTip").css("display","block");
}
$("#VerificationCode a").click(function(){
	var ranNum = Math.random();
	$("#VerificationCode img").attr("src","http://www.muyingzhijia.com/validate/imageRegisterCode.aspx?id="+ranNum);
})
$("#VerificationCode img").click(function(){
	var ranNum = Math.random();
	$(this).attr("src","http://www.muyingzhijia.com/validate/imageRegisterCode.aspx?id="+ranNum);
})
/*-------------------------- 登录验证 --------------------------------------*/
$("#login-btn").click(function(){
	fLogin();
	function fLogin(){
		fUser();
		fPwd();
		fYzm();
		var userNameTip = $("#login-emailTip").find(".txt-err").html();
		var pwdTip = $("#passwordTip").find(".txt-err").html();
		var yzmTip = $("#get-codeTip").find(".txt-err").html();
		var username = $("#login-email").val();
		var pwd = $("#password").val();

		if(userNameTip){
			$("#errTip").css("display","inline-block");
			$("#errTip").find("p").removeClass("noticeWrap-suc");
			$("#errTip").find("p").addClass("noticeWrap-err");
			$("#errTip").find("b").removeClass("ico-succ")
			$("#errTip").find("b").addClass("ico-warning");
			$("#errTip").find(".txt-err").html(userNameTip);
		}else if(pwdTip){
			$("#errTip").css("display","inline-block");
			$("#errTip").find("p").removeClass("noticeWrap-suc");
			$("#errTip").find("p").addClass("noticeWrap-err");
			$("#errTip").find("b").removeClass("ico-succ")
			$("#errTip").find("b").addClass("ico-warning");
			$("#errTip").find(".txt-err").html(pwdTip);
		}else if(yzmTip){
			$("#errTip").css("display","inline-block");
			$("#errTip").find("p").removeClass("noticeWrap-suc");
			$("#errTip").find("p").addClass("noticeWrap-err");
			$("#errTip").find("b").removeClass("ico-succ")
			$("#errTip").find("b").addClass("ico-warning");
			$("#errTip").find(".txt-err").html(yzmTip);
		}else{
			fGetUserInfo(username,pwd);
		}
		function fGetUserInfo(un,pw){
			$.ajax({
		     	type: "get",
		     	url: "../data/userInfo.json",        
		     	success: function(json){
		     		if((json.username == un) &&(json.pwd == pw)){
		     			var cookieUsername = $.cookie("username");
		     			if(json.username == cookieUsername){//判断是否重复登录
		     				$("#errTip").css("display","inline-block");
			     			$("#errTip").find("p").removeClass("noticeWrap-suc");
							$("#errTip").find("p").addClass("noticeWrap-err");
							$("#errTip").find("b").removeClass("ico-succ")
							$("#errTip").find("b").addClass("ico-warning");
			     			$("#errTip").find(".txt-err").html("登录失败！请勿重复登录！");
		     			}else{
		     				$("#errTip").css("display","inline-block");
			     			$("#errTip").find("p").removeClass("noticeWrap-err");
							$("#errTip").find("p").addClass("noticeWrap-suc");
							$("#errTip").find("b").removeClass("ico-warning")
							$("#errTip").find("b").addClass("ico-succ");
			     			$("#errTip").find(".txt-err").html("登录成功！");
			     			if(($("#remember")[0].checked)) {
			     				$.cookie("username",un,{"expires":30,"path":"/"});
			     			}else{
			     				$.cookie("username",un,{"path":"/"});
			     			};
			     			location.href = "../html/index.html";
		     			}
		     		}else{
		     			$("#errTip").css("display","inline-block");
		     			$("#errTip").find(".txt-err").html("账号密码错误！请重新输入！");
		     		}
		     	},
		     	error: function(){
		     	    console.log('userInfo fail');
		     	}
			});
		}
	}
})