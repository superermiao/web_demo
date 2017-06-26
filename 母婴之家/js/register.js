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
/*-------------------------手机号的验证----------------------------*/
var rePhone = /^1[34578]\d{9}$/;
$("#email").focus(function(){
	$(this).removeClass("g-ipt");
	$(this).removeClass("g-ipt-err");
	$(this).addClass("g-ipt-active");
	$("#emailTip").css("display","none");
})

$("#email").blur(function(){
	fPhone();
})
function fPhone(){
		if(rePhone.test($("#email").val()) && $("#email").val()){
			$("#email").removeClass("g-ipt-active");
			$("#email").addClass("g-ipt-cor");
			$("#emailTip").find("p").removeClass("noticeWrap-err");
			$("#emailTip").find("p").addClass("noticeWrap-suc");
			$("#emailTip").find("b").removeClass("ico-warning")
			$("#emailTip").find("b").addClass("ico-succ");
			$("#emailTip").find(".txt-err").html("");
		}else if($("#email").val()==""){
			$("#email").removeClass("g-ipt-active");
			$("#email").toggleClass("g-ipt-err");
			$("#emailTip").find("p").removeClass("noticeWrap-suc");
			$("#emailTip").find("p").addClass("noticeWrap-err");
			$("#emailTip").find("b").removeClass("ico-succ");
			$("#emailTip").find("b").addClass("ico-warning");
			$("#emailTip").find(".txt-err").html("账户不能为空！");
		}else{
			$("#email").removeClass("g-ipt-active");
			$("#email").toggleClass("g-ipt-err");
			$("#emailTip").find("p").removeClass("noticeWrap-suc");
			$("#emailTip").find("p").addClass("noticeWrap-err");
			$("#emailTip").find("b").removeClass("ico-succ");
			$("#emailTip").find("b").addClass("ico-warning");
			$("#emailTip").find(".txt-err").html("手机号码格式不正确！");
		}
		$("#emailTip").css("display","block");	
	}
/*------------------密码格式验证 /^[a-zA-Z0-9]{6,10}$/ -------------------*/
var rePwd = /^[a-zA-Z0-9]{6,20}$/ ;
$("#password1").focus(function(){
	$(this).removeClass("g-ipt");
	$(this).removeClass("g-ipt-err");
	$(this).addClass("g-ipt-active");
})
$("#password1").blur(function(){
	fPwd1();
})
function fPwd1 (){
		if(rePwd.test($("#password1").val()) && $("#password1").val()){
			$("#password1").removeClass("g-ipt-active");
			$("#password1").addClass("g-ipt-cor");
			$("#password1Tip").find("p").removeClass("noticeWrap-err");
			$("#password1Tip").find("p").addClass("noticeWrap-suc");
			$("#password1Tip").find("b").removeClass("ico-warning")
			$("#password1Tip").find("b").addClass("ico-succ");
			$("#password1Tip").find(".txt-err").html("");
		}else if($("#password1").val()==""){
			$("#password1").removeClass("g-ipt-active");
			$("#password1").toggleClass("g-ipt-err");
			$("#password1Tip").find("p").removeClass("noticeWrap-suc");
			$("#password1Tip").find("p").addClass("noticeWrap-err");
			$("#password1Tip").find("b").removeClass("ico-succ");
			$("#password1Tip").find("b").addClass("ico-warning");
			$("#password1Tip").find(".txt-err").html("密码不能为空！");
		}else{
			$("#password1").removeClass("g-ipt-active");
			$("#password1").toggleClass("g-ipt-err");
			$("#password1Tip").find("p").removeClass("noticeWrap-suc");
			$("#password1Tip").find("p").addClass("noticeWrap-err");
			$("#password1Tip").find("b").removeClass("ico-succ");
			$("#password1Tip").find("b").addClass("ico-warning");
			$("#password1Tip").find(".txt-err").html("密码长度为6-20位字符");
		}
		$("#password1Tip").css("display","block");
	}
/*------------------密码确认 /^[a-zA-Z0-9]{6,10}$/ -------------------*/
$("#password2").blur(function(){
	fPwd2();
})
function fPwd2 (){
		if(rePwd.test($("#password2").val()) && $("#password2").val() && ($("#password1").val()==$("#password2").val())){
			$("#password2").removeClass("g-ipt-active");
			$("#password2").addClass("g-ipt-cor");
			$("#password2Tip").find("p").removeClass("noticeWrap-err");
			$("#password2Tip").find("p").addClass("noticeWrap-suc");
			$("#password2Tip").find("b").removeClass("ico-warning")
			$("#password2Tip").find("b").addClass("ico-succ");
			$("#password2Tip").find(".txt-err").html("");
		}else if($("#password2").val()==""){
			$("#password2").removeClass("g-ipt-active");
			$("#password2").toggleClass("g-ipt-err");
			$("#password2Tip").find("p").removeClass("noticeWrap-suc");
			$("#password2Tip").find("p").addClass("noticeWrap-err");
			$("#password2Tip").find("b").removeClass("ico-succ");
			$("#password2Tip").find("b").addClass("ico-warning");
			$("#password2Tip").find(".txt-err").html("确认密码不能为空！");
		}else if(!(rePwd.test($("#password2").val()))){
			$("#password2").removeClass("g-ipt-active");
			$("#password2").toggleClass("g-ipt-err");
			$("#password2Tip").find("p").removeClass("noticeWrap-suc");
			$("#password2Tip").find("p").addClass("noticeWrap-err");
			$("#password2Tip").find("b").removeClass("ico-succ");
			$("#password2Tip").find("b").addClass("ico-warning");
			$("#password2Tip").find(".txt-err").html("确认密码长度为6-20位字符！");
		}else if($("#password1").val()!=$("#password2").val()){
			$("#password2").removeClass("g-ipt-active");
			$("#password2").toggleClass("g-ipt-err");
			$("#password2Tip").find("p").removeClass("noticeWrap-suc");
			$("#password2Tip").find("p").addClass("noticeWrap-err");
			$("#password2Tip").find("b").removeClass("ico-succ");
			$("#password2Tip").find("b").addClass("ico-warning");
			$("#password2Tip").find(".txt-err").html("两次输入的密码不一样！");
		}
		$("#password2Tip").css("display","block");
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
/*-------------------------- 短信验证--------------------------------------*/
$("#message").blur(function(){
	fYzmess();
})
function fYzmess(){
	if(reYzm.test($("#message").val()) && $("#message").val()){
		$("#message").removeClass("g-ipt-active");
		$("#message").addClass("codetxt");
		$("#messageTip").find("p").removeClass("noticeWrap-err");
		$("#messageTip").find("p").addClass("noticeWrap-suc");
		$("#messageTip").find("b").removeClass("ico-warning")
		$("#messageTip").find("b").addClass("ico-succ");
		$("#messageTip").find(".txt-err").html("");
	}else if($("#message").val()==""){
		$("#message").removeClass("g-ipt-active");
		$("#message").toggleClass("g-ipt-err");
		$("#messageTip").find("p").removeClass("noticeWrap-suc");
		$("#messageTip").find("p").addClass("noticeWrap-err");
		$("#messageTip").find("b").removeClass("ico-succ");
		$("#messageTip").find("b").addClass("ico-warning");
		$("#messageTip").find(".txt-err").html("验证码不能为空！");
	}else{
		$("#message").removeClass("g-ipt-active");
		$("#message").toggleClass("g-ipt-err");
		$("#messageTip").find("p").removeClass("noticeWrap-suc");
		$("#messageTip").find("p").addClass("noticeWrap-err");
		$("#messageTip").find("b").removeClass("ico-succ");
		$("#messageTip").find("b").addClass("ico-warning");
		$("#messageTip").find(".txt-err").html("请输入正确的验证码！");
	}
	$("#messageTip").css("display","block");
}
/*-------------------------- 协议勾选验证 --------------------------------------*/
	$("#agreement").click(function(){
		$("#agreementTip").css("display","block");
		if($("#agreement").get(0).checked){
			$("#agreementTip").find("p").removeClass("noticeWrap-err");
			$("#agreementTip").find("p").addClass("noticeWrap-suc");
			$("#agreementTip").find("b").removeClass("ico-warning");
			$("#agreementTip").find("b").addClass("ico-succ");
			$("#agreementTip").find(".txt-err").html("");
			$("#reg_btn").removeAttr("disabled");
		}else{
			$("#agreementTip").find("p").removeClass("noticeWrap-suc");
			$("#agreementTip").find("p").addClass("noticeWrap-err");
			$("#agreementTip").find("b").removeClass("ico-succ");
			$("#agreementTip").find("b").addClass("ico-warning");
			$("#agreementTip").find(".txt-err").html("您还没有同意用户协议！");
			$("#reg_btn").attr("disabled","disabled");
		}
		// console.log();
	})
	
/*-------------------------- 登录验证 --------------------------------------*/
$("#reg_btn").click(function(){
	fLogin();
})
function fLogin(){
	fPhone();
	fPwd1();
	fPwd2();
	fYzm();
	fYzmess();
	var phoneTip = $("#emailTip").find(".txt-err").html();
	var pwd1Tip = $("#password1Tip").find(".txt-err").html();
	var pwd2Tip = $("#password2Tip").find(".txt-err").html();
	var yzmTip = $("#get-codeTip").find(".txt-err").html();
	var messageTip = $("#messageTip").find(".txt-err").html();
	var phone = $("#email").val();
	var pwd = $("#password2").val();

	if(phoneTip){
		$("#errTip").css("display","inline-block");
		$("#errTip").find("p").removeClass("noticeWrap-suc");
		$("#errTip").find("p").addClass("noticeWrap-err");
		$("#errTip").find("b").removeClass("ico-succ")
		$("#errTip").find("b").addClass("ico-warning");
		$("#errTip").find(".txt-err").html(phoneTip);
	}else if(pwd1Tip){
		$("#errTip").css("display","inline-block");
		$("#errTip").find("p").removeClass("noticeWrap-suc");
		$("#errTip").find("p").addClass("noticeWrap-err");
		$("#errTip").find("b").removeClass("ico-succ")
		$("#errTip").find("b").addClass("ico-warning");
		$("#errTip").find(".txt-err").html(pwd1Tip);
	}else if(pwd2Tip){
		$("#errTip").css("display","inline-block");
		$("#errTip").find("p").removeClass("noticeWrap-suc");
		$("#errTip").find("p").addClass("noticeWrap-err");
		$("#errTip").find("b").removeClass("ico-succ")
		$("#errTip").find("b").addClass("ico-warning");
		$("#errTip").find(".txt-err").html(pwd2Tip);
	}else if(yzmTip){
		$("#errTip").css("display","inline-block");
		$("#errTip").find("p").removeClass("noticeWrap-suc");
		$("#errTip").find("p").addClass("noticeWrap-err");
		$("#errTip").find("b").removeClass("ico-succ")
		$("#errTip").find("b").addClass("ico-warning");
		$("#errTip").find(".txt-err").html(yzmTip);
	}else if(messageTip){
		$("#errTip").css("display","inline-block");
		$("#errTip").find("p").removeClass("noticeWrap-suc");
		$("#errTip").find("p").addClass("noticeWrap-err");
		$("#errTip").find("b").removeClass("ico-succ")
		$("#errTip").find("b").addClass("ico-warning");
		$("#errTip").find(".txt-err").html(messageTip);
	}else{
		fRegister(phone,pwd);
		location.href="../html/login.html";
	}
}
function fRegister(phone,pwd){
	var userInfo = {};
	userInfo={
		"name":phone,
		"password":pwd
	}
	$.cookie("newUserInfo",JSON.stringify(userInfo), {expires: 7, path: "/"})
}