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
		$(".login").css("display","none");
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
	// 购物车显示
	$("#wfc_gwc_eleG").hover(function(){
		$("#wfc_head_gwc_div").css({"display":"block","overflow":"hidden","marginTop":"0px","marginBottom":"0px","paddingTop":"0px"});
		// $("#wfc_head_gwc_div").animate({height:"120px"},100);
	},function(){
		$("#wfc_head_gwc_div").css({"display":"none"});
		// $("#wfc_head_gwc_div").animate({height:"0px"},100);
	})
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
	// ___________大二级导航
	$("#ui-silder-nav").hover(function(){
		$("#ui-silder-nav").addClass("ui-silder-hover");
		$("#ui-silder-nav .ui-silder-all i").css("backgroundPosition","-117px -74px");
		$(".ui-category").css("display","block");
	},function(){
		$("#ui-silder-nav").removeClass("ui-silder-hover");
		$("#ui-silder-nav .ui-silder-all i").css("backgroundPosition","-110px -65px");
		$(".ui-category").css("display","none");
	})

	$(".ui-category-list").hover(function(){
		$(this).addClass("ui-category-list-hover");
		$(this).find(".ui-category-third").css({"display":"block","zIndex":"99"});
	},function(){
		$(this).removeClass("ui-category-list-hover");
		$(this).find(".ui-category-third").css("display","none");
	})
	//___________nav 广告播放动画
	$("#ui-new ul").hover(function(){
		$(this).stop();
	},function(){
		newAnimate();
	})
	function newAnimate(){
				$("#ui-new ul").stop().animate({marginTop:"-25px"},2000,function(){
				$("#ui-new ul").css("marginTop","25px");
				newAnimate();
			});
	}
	newAnimate();
});

/*---------------------------旁边竖条购物车数量变化--------------------------------*/
$(document).ready(function(){
	function fCarList(){
		$(".cart3_list").find("li").remove();
		var allNum=0;//商品总数
		var allPrice=0;//总价格
		var goods = $.cookie("cars") ? JSON.parse($.cookie("cars")) : {};
		for(var i in goods){
			allNum += goods[i].num;
			allPrice += goods[i].num*goods[i].price;
			$(".cart3_list").append(
				'<li class="cart3_prod select item_group">'+
					'<a class="pic inblock stats" href="##"> '+
	                    '<img src='+goods[i].goodImg+' alt='+goods[i].goodName+'> '+
	                '</a>'+
	                '<span class="tit inblock"> '+
	                        '<a class="stats" href="##">'+goods[i].goodName+'</a>'+
	                '</span>'+
	                '<span class="price inblock">'+
	                    '<ins>'+goods[i].price+'</ins><br>'+
	                    '<ins class="del grey">¥'+parseInt(goods[i].price+300)+'</ins>'+
	                '</span>'+
	                '<span class="num inblock"> '+
	                    '<a class="minus" id="minus"><span></span></a>'+
	                    '<input type="text" maxlength="3" value="'+goods[i].num+'" id="goodNum" class="inblock inputTip">'+
	                    '<a rel="add" class="add" id="add"><span></span><em></em></a>'+
	                '</span>'+
	                '<span class="inblock count">'+
	                	'<strong>￥'+(goods[i].price*goods[i].num)+'</strong>'+
	                '</span>'+
	                '<span class="action inblock">'+
	                    '<a class="btn_del" id="btn_del">'+
	                    	'删除'+
	                    '</a>'+
	                '</span>'+
	                '<em class="line"></em>'+
				'</li>'
			)
		}
		$("#cartSlideNum").html("("+allNum+")");
		$("#BuyTotalCount").html(allNum);
		$("#totCash").html(allPrice+".00");
		$(".cart_check").find("span").eq(2).html(allPrice+".00");
	}
	fCarList();
	fEmpty()
	// 删除功能
	$(".cart3_list").on("click",".btn_del", function(){
		$(this).closest("li",".cart3_list").remove();
		var goods = $.cookie("cars") ? JSON.parse($.cookie("cars")) : {};
		delete goods[$(this).closest("li",".cart3_list").find(".stats").eq(1).html()]; //删除对应的商品对象
		$.cookie("cars",JSON.stringify(goods),{expires:1,path:"/"}); //再讲删除后的对象car添加到cookie中覆盖原来的
		fCarList();
		fEmpty()
	})
	// 数量减少功能
	$(".cart3_list").on("click",".add", function(){
		var iNum = parseInt($(this).closest("li",".cart3_list").find("#goodNum").val()) + 1;
		var goods = $.cookie("cars") ? JSON.parse($.cookie("cars")) : {};
		$(this).closest("li",".cart3_list").find("#goodNum").val(iNum);
		goods[$(this).closest("li",".cart3_list").find(".stats").eq(1).html()].num = iNum;
		$.cookie("cars",JSON.stringify(goods),{expires:1,path:"/"});
		fCarList();
		fEmpty()
	})
	//数量增加功能
	$(".cart3_list").on("click",".minus", function(){
		var iNum = $(this).closest("li",".cart3_list").find("#goodNum").val() -1;
		var goods = $.cookie("cars") ? JSON.parse($.cookie("cars")) : {};
		if(iNum==0){
			var isDel = confirm("是否要删除本商品？");
			if(isDel){
				$(this).closest("li",".cart3_list").remove();
				delete goods[$(this).closest("li",".cart3_list").find(".stats").eq(1).html()]; //删除对应的商品对象
				$.cookie("cars",JSON.stringify(goods),{expires:1,path:"/"}); //再讲删除后的对象car添加到cookie中覆盖原来的
				fCarList();
				fEmpty()
			}else{
				$(this).closest("li",".cart3_list").find("#goodNum").val(1);
				goods[$(this).closest("li",".cart3_list").find(".stats").eq(1).html()].num = 1;
				$.cookie("cars",JSON.stringify(goods),{expires:1,path:"/"});
				fCarList();
				fEmpty()
			}
		}else{
			$(this).closest("li",".cart3_list").find("#goodNum").val(iNum);
			goods[$(this).closest("li",".cart3_list").find(".stats").eq(1).html()].num = iNum;
			$.cookie("cars",JSON.stringify(goods),{expires:1,path:"/"});
			fCarList();
			fEmpty()
		}
	})
	function fEmpty(){ //如果为空li就显示去购物
		var iLi = $(".cart3_list").find("li").length;
		if(iLi==0){
			$(".cart3_list").parent().parent().parent().css("display","none");
			$("#cart3_bott_box").parent().css("display","none");
			$(".emptyCart").css("display","block");
		}
	};
	//清空购物车的功能
	$("#delete_All").click(function(){
		$.cookie("cars","",{expires:-1,path:"/"});
		fCarList();
		fEmpty()
		// console.log(111);
	});
	//购物车显示为空的时候点击去购物跳转到首页
	$(".emptyCart .btn").click(function(){
		location.href = "../html/index.html";
	});
	//两个登录按钮
	$("#cartLoginBtn").click(function(){
		location.href = "../html/login.html";
	})
	$("#loginBtn").click(function(){
		location.href = "../html/login.html";
	})
	//结算按钮
	$("#submitOrder").click(function(){
		if($.cookie("username")){
			location.href = "../html/order.html";
		}else{
			var isLogin = confirm("请先登录在添加订单！")
			if(isLogin){
				location.href = "../html/login.html";
			}
		}
	})
});
