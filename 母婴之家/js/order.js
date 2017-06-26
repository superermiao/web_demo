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
$("#addNumNote").click(function(){
	if($("#write-info").css("display")=="none"){
		$("#write-info").css("display","block");
	}else{
		$("#write-info").css("display","none");
	}
})

$(document).ready(function(){
/*------------收货地址保存---------*/
	function fConsignee(){
			var consign = $.cookie("consign") ? JSON.parse($.cookie("consign")) : {};
			for(var i in consign){
				var name = consign[i].name;
				var addr = consign[i].addr;
				var mobile = consign[i].mob;
				$("#consignee-list").append(
				'<div class="item item-selected">'+
					'<input type="radio" checked="checked" class="hookbox" name="consignee_radio" id="consignee_radio">'+
					'<label style="width:70%">'+
			            '<b style="display: inline-block; width: 20%;">'+name+'</b>'+
			            '<span style="display: inline-block; width: 60%">'+
			                addr+
			            '</span>'+
			            '<span style="width: 20%">'+mobile+'</span>'+
			        '</label>'+
			        '<span class="item-action">'+
			        	'<span>'+
			                '<a href="##" value="59282294" style="display: none;">设为默认地址</a>'+
			                '<span style="color: rgb(0, 156, 42); margin: 0px 5px;">设为默认地址</span>'+
			            '</span>'+
			            '<a href="##" class="re_write">'+
			            	'编辑'+
			            '</a>'+
			            '<a href="##" class="del_consignee">'+
			            	'删除'+
			            '</a>'+
			        '</span>'+
				'</div>');
			}
		}
	//收货人姓名验证
	function checkName(){
		$("#consignee_name").blur(function(){
			if($(this).val() == ""){
				$("#name_div_error").html("请填写收货人姓名！");
				return false;
			}else{
				$("#name_div_error").html("");
				return true;
			}
		});
	}
	checkName();
	//详细地址的验证
	function checkAddr(){
		$("#consignee_address").blur(function(){
			if($("#s_province").val() == "省份" || $("#s_city").val() == "地级市" || $("#s_county").val() == "市、县级市"){
				$("#area_div_error").html("请填写收货地址！");
			}else{
				$("#area_div_error").html("");
			}
			if($(this).val() == ""){
				$("#address_div_error").html("请填写收货地址！");
			}else{
				$("#address_div_error").html("");
			}
		})
		if($("#area_div_error").html() == "" && $("#address_div_error").html() == ""){
			return true;
		}else{
			return false;
		}
	}
	checkAddr();
	// 手机号码的验证
	function checkPhone(){
		$("#consignee_mobile").blur(function(){
			if($(this).val() == ""){
				$("#call_div_error").html("请填写手机号码！");
				return false;
			}else{
				$("#call_div_error").html("");
				return true;
			}
		})
	}
	checkPhone();
	//地区选择的时候验证
	$("#s_province").change(function(){
		if($("#s_province").val() == "省份"){
			$("#area_div_error").html("请填写收货地址！");
		}else{
			$("#area_div_error").html("");
		}
	});
	$("#s_city").change(function(){
		if($("#s_city").val() == "地级市"){
			$("#area_div_error").html("请填写收货地址！");
		}else{
			$("#area_div_error").html("");
		}
	});
	$("#s_county").change(function(){
		if($("#s_county").val() == "市、县级市"){
			$("#area_div_error").html("请填写收货地址！");
		}else{
			$("#area_div_error").html("");
		}
	});
	// 点击提交验证
	fConsignee();
	$("#saveConsigneeTitleDiv").click(function(){
		var uName = $("#consignee_name").val();
		var province = $("#s_province").val();
		var city = $("#s_city").val();
		var county = $("#s_county").val();
		var address = $("#consignee_address").val();
		var mobile = $("#consignee_mobile").val();
		var all_addr = province + city + county + address;
		// 验证信息是否填完整
		// checkName();
		// checkAddr();
		// checkPhone();
		// if((checkName() && checkAddr())&&checkPhone()){
			
		var consign = $.cookie("consign") ? JSON.parse($.cookie("consign")) : {};
		consign[uName] = {
					name: uName,
					addr: all_addr,
					mob: mobile
				}
		$.cookie("consign", JSON.stringify(consign), {expires: 7, path: "/"});
		$("#consignee-list").append(
			'<div class="item item-selected">'+
				'<input type="radio" checked="checked" class="hookbox" name="consignee_radio" id="consignee_radio">'+
				'<label style="width:70%">'+
		            '<b style="display: inline-block; width: 20%;">'+uName+'</b>'+
		            '<span style="display: inline-block; width: 60%">'+
		                all_addr+
		            '</span>'+
		            '<span style="width: 20%">'+mobile+'</span>'+
		        '</label>'+
		        '<span class="item-action">'+
		        	'<span>'+
		                '<a href="##" value="59282294" type="default" style="display: none;">设为默认地址</a>'+
		                '<span style="color: rgb(0, 156, 42); margin: 0px 5px;">设为默认地址</span>'+
		            '</span>'+
		            '<a href="##" class="re_write">'+
		            	'编辑'+
		            '</a>'+
		            '<a href="##" class="del_consignee">'+
		            	'删除'+
		            '</a>'+
		        '</span>'+
			'</div>');
		$("#consignee_name").val("");
		$("#s_province").val("");
		$("#s_city").val("");
		$("#s_county").val("");
		$("#consignee_address").val("");
		$("#consignee_mobile").val("");
		// }

	})
	// 删除地址
	$("#consignee-list").on("click",".del_consignee",function(){
		$(this).closest("div").remove();
		var consign = $.cookie("consign") ? JSON.parse($.cookie("consign")) : {};
		delete consign[$(this).closest("div").find("b").html()];
		$.cookie("consign", JSON.stringify(consign), {expires: 7, path: "/"})
	})
	//重新编辑地址（绑定在consignee-list上面）
	// $("#consignee-list").on("click",".re_write",function(){
	// 	$("#consignee_name").val($(this).parent().prev().find("b"));
	// })
	


/*------------商品信息---------*/
	function fCarInfo(){
		$(".order-review-list").find("li").remove();
		var allNum=0;//商品总数
		var allPrice=0;//总价格
		var goods = $.cookie("cars") ? JSON.parse($.cookie("cars")) : {};
		for(var i in goods){
			allNum += goods[i].num;
			allPrice += goods[i].num*goods[i].price;
			$(".order-review-list").append(
				'<li name="Product" class="">'+
                    '<a class="pic inblock" href="##" target="_blank">'+
                       ' <img src='+goods[i].goodImg+'>'+
                    '</a>'+
                    '<span class="tit inblock">'+
                        '<a href="http://item.muyingzhijia.com/200309.html" target="_blank">'+
                        goods[i].goodName+
                        '</a>'+
                    '</span>'+
                    '<span class="price inblock">'+
                    	'<ins>¥'+goods[i].price+'</ins>'+
                    '</span>'+
                    '<span class="num inblock">'+
                    	'<ins>'+goods[i].num+'</ins>'+
                    '</span>'+
                    '<span class="count inblock">'+
                    	'<strong>¥'+allPrice+'.00</strong>'+
                    '</span>'+
                    '<div class="clear"></div>'+
                '</li>'
			)
		}
		$(".pro-totle").next().html("¥"+allPrice+".00");
		$("#SubTotalPrice_1").html("¥"+allPrice+".00");
		$("#span-skuNum").html(allNum);
		$("#warePriceId").html("¥"+allPrice+".00");
		$("#sumPayPriceId").html("¥"+allPrice+".00");
	}
	fCarInfo();
})