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
	// 侧边的登录按钮点击登录、注册按钮 的时候跳转对应的页面
	$(".userlogin").click(function(){
		location.href = "../html/login.html";
	})
	$(".usersign").click(function(){
		location.href = "../html/register.html";
	})
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
	// 点击二级导航最后一个跳转到商品列表页面
	$(".ui-category-list").eq(8).find("dl").first().find("dt").click(function(){
		location.href = "../html/goodList.html";
	});
	
	
})
//__________头部广告
$("#ad_top span img").click(function(){
	$("#ad_top").css("display","none");
});
//__________nav小导航
// _________phonebox运动
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
// 搜索框获得焦点的时候label隐藏
$("#s-combobox label").click(function(){
	$(this).css("display","none");
})
$("#s-combobox input").blur(function(){
	$("#s-combobox label").css("display","block");
})

//___________小二级导航(封装的函数fSsn)
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
		
// _______________________________________________________________________________________
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

// ___________nav 直邮专区
// $(".ui-nav-bar-list li").eq(2).hover(function(){ //吸顶菜单的
// 	$(this).addClass("haiT-nav-hover");
// 	$(this).find(".haiT-child").css("display","block");
// },function(){
// 	$(this).removeClass("haiT-nav-hover");
// 	$(this).find(".haiT-child").css("display","none");
// })
// $(".ui-nav-bar .ui-nav-bar-list .haiT-nav").hover(function(){
// 	$(this).find(".haiT-child").css("display","block");
// },function(){
// 	$(this).find(".haiT-child").css("display","none");
// })
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

// _______________________________________________________________________________________
// ___________大轮播图(使用插件定时器，每秒干什么)
$(document).ready(function(){
	// 自动轮播
	var i=1;//记录当前索引
	$("#slideArea").hover(function(){
		$("#slideArea").stopTime('slideA');//当鼠标移上的时候关闭大轮播图的定时器slideA
	},function(){
		$("#slideArea").everyTime('3s','slideA',function(){ //每隔4秒执行一次向左移动的动画
			$("#slideArea").animate({left:-1090*i+"px"},500,function(){
				i++;
				if(i==6){
					i=0;
				}
			})
			$($("#slide_btnArea span").get(i)).addClass("bannercur").siblings().removeClass("bannercur");	
		});
	})
	$("#slide_btnArea span").hover(function(){
		$(this).addClass("bannercur").siblings().removeClass("bannercur");
		i = $(this).index();
		$("#slideArea").stop().animate({left:-1090*i+"px"},500);
	})
})
// _______________________________________________________________________________________
// ___________小轮播图(倒计时部分)

	$("#arr-left").hover(function(){
		$(this).addClass("on");
	},function(){
		$(this).removeClass("on");
	})
	$("#arr-right").hover(function(){
		$(this).addClass("on");
	},function(){
		$(this).removeClass("on");
	})
// ___________小轮播图(遮罩部分)
	$("#everyDayPromo li").hover(function(){
		$(this).find(".ui-overlayBg").css({"opacity":"0.3","zIndex":"4"});
		$(this).find(".ui-overlay").css({"opacity":"1","zIndex":"5"});
		$(this).find(".ui-overlay").stop().animate({top:"30%"},100);
	},function(){
		$(this).find(".ui-overlayBg").css({"opacity":"0","zIndex":"3"});
		$(this).find(".ui-overlay").css({"opacity":"0","zIndex":"0"});
		$(this).find(".ui-overlay").stop().animate({top:"0"},100);
	})
// ___________小轮播图(轮播部分)
$(document).ready(function(){
	$("#arr-right").click(function(){
		$(this).addClass("on");
		$("#arr-left").removeClass("on");
		$("#everyDayPromo").stop().animate({marginLeft:-1104+"px"},500);
	})
	$("#arr-left").click(function(){
		$(this).addClass("on");
		$("#arr-right").removeClass("on");
		$("#everyDayPromo").stop().animate({marginLeft:0+"px"},500);
	})
	// 自动轮播(bug：原网站鼠标移上去不会停止轮播)
	var i=0;//记录当前索引 0代表左  1代表右
	$("#everyDayPromo li").hover(function(){  //鼠标移上停止轮播
		$("#everyDayPromo").stopTime('slideB');
	},function(){
		$("#everyDayPromo").everyTime('3s','slideB',function(){ //每隔4秒执行一次向左移动的动画
			$("#everyDayPromo").animate({marginLeft:-1104*i+"px"},500,function(){
				i++;
				if(i==2){
					i=0;
				}
			})
			if(i==0){
				$("#arr-left").addClass("on");
				$("#arr-right").removeClass("on");
			}else{
				$("#arr-right").addClass("on");
				$("#arr-left").removeClass("on");
			}
		});
	})
	
})
// _______________________________________________________________________________________
// ___________商标集合
	$(".ui-brand-box ul li a").hover(function(){
		$(this).css({"borderColor":"#ff9900"});
	},function(){
		$(this).css({"borderColor":"#ccc"});
	})

// _______________________________________________________________________________________
// ___________左边固定区域
// 广告关闭

	$(".fixLeftImg .fixLeftAd .fixLeftAd_close").click(function(){
		$(".fixLeftImg .fixLeftAd").css("display","none");
	});

// 楼梯效果(滚动的时候第二层的高度会改变)
	var iSpecialProductTop =  $("#specialProduct").offset().top-58;
	var iHotProductTop = $("#hotProduct").offset().top-58;

	$(".fixLeftImg .fixLeftTop .area-hotProductCon").click(function(){
		$("html, body").stop().animate({scrollTop:iSpecialProductTop}, 500);
	})
	$(".fixLeftImg .fixLeftTop .area-specialProductCon").click(function(){
		$("html, body").stop().animate({scrollTop:iHotProductTop}, 500);
	})

// _______________________________________________________________________________________
// ___________吸顶效果
	$(document).ready(function(){
		var iEveryDayAreaBoxTop = $("#everyDayAreaBox").offset().top;
		$(window).scroll(function(){
			if($(this).scrollTop()>=iEveryDayAreaBoxTop){
				$("#ui-fixed-top").css("display","block");
			}else{
				$("#ui-fixed-top").css("display","none");
			}
		})
	})
// _______________________________________________________________________________________
// ___________右边竖条登录

	$(".level-close").click(function(){
		$(this).parent().parent().css({"display":"none"});
	})
	// 实现右边鼠标移上动画的函数
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

//__________遮罩广告
	$("#popup_container .close").click(function(){
		$("#overlay").css("display","none");
		$("#easyDialogBox").css("display","none");
	});

/*----------------------------- 热门搜索、特卖、精选的Ajax-----------------------------*/
$(document).ready(function(){
	// 热门搜索
	var aHotWords = $("#mallSearch ul li");
	$.ajax({
             type: "get",
             url: "../data/HotSearch.json",        
             success: function(json){
                aHotWords.first().siblings().each(function(){
                	$(this).find("a").html(json["hotWords_"+$(this).index()]);
                })
             },
             error: function(){
                 console.log('mallSearch fail');
             }
         });
	// 小轮播图
	var aEveryDayPromo = $("#everyDayPromo li");
	$.ajax({
             type: "get",
             url: "../data/EveryDayPromo.json",        
             success: function(json){
                aEveryDayPromo.each(function(){
                	$(this).find("a").find("img").attr("src",json["g"+($(this).index()+1)].img);
                	$(this).find("a").find("span").eq(0).html(json["g"+($(this).index()+1)].title);
                	$(this).find("a").find("span").eq(1).html(json["g"+($(this).index()+1)].price);
                	$(this).find("a").find("span").eq(2).html(json["g"+($(this).index()+1)].sale);
                })
             },
             error: function(){
                 console.log('everyDayPromo fail');
             }
         });
	//当日抢购，三张展示

	//特惠专场
	var iclientHeight = document.documentElement.clientHeight||document.body.clientHeight;
	function getSpecialProductTop(){ //实时获取所有li的高度
		return $("#hotProductCon").offset().top -$("#specialProduct>div>div").height()-iclientHeight-298;
	}
	function getHotProductTop(){ //实时获取所有li的高度
		return $("#uiBrandAreaBox").offset().top -$("#hotProductCon>div>div").height()-iclientHeight-298;
	}
	var isp=0;
	var ihp=0;

	$(window).scroll(function(){
		if($(this).scrollTop()>=iclientHeight){ //当滚动到一定高度的时候左边广告和楼梯出现
			$(".fixLeftImg").css("display","block");
		}else{
			$(".fixLeftImg").css("display","none");
		}
		
		iSpecialProductTop =  $("#specialProduct").offset().top-58;
		iHotProductTop = $("#hotProduct").offset().top-58;
		if($(this).scrollTop()>=getSpecialProductTop()){
			if(isp<14){
				specialProductLoading(isp++);
			}
		}
		if($(this).scrollTop()>=getHotProductTop()){
			if(ihp<3){
				hotProductLoading(ihp++);
			}
		}
	})

	function specialProductLoading(iNow){ //加载li
		$.ajax({
             type: "get",
             url: "../data/specialProduct.json",        
             success: function(json){
             	$("#specialProduct>div").append('<div class="mb20 site-hot-item" >'+
						'<div class="site-hot-item-fl">'+
							'<a href="##" class="newstats">'+
								'<img src='+json["g"+iNow].img+'>'+
							'</a>'+
							'<div class="soldoutPro item-soldout" style="display: none;"></div>'+
							'<img src="../img/index/ad_top2.png" style="width:auto; height:auto;z-index:2;position: absolute;border-radius:0; bottom:10px;top:undefined; right:10px">'+
						'</div>'+

						'<div class="site-hot-item-fr">'+
							'<h2 class="site-hot-row-two">'+
								'<a href="##" class="newstats">'+json["g"+iNow].h2+'</a>'+
							'</h2>'+
							'<div class="site-hot-row-three">'+
								'<span class="product-words">'+
                                 json["g"+iNow].title  
								+'</span>'+
							'</div>'+
							'<div class="site-hot-row-four">'+
								'<div class="fl">'+
									'<div class="promo-price">'+
										'<div class="price">'+
											'<p style="font-size: 32px;" data-type="price">'+
												'<b style="font-size: 18px;font-weight: bold;vertical-align: 2px;margin-right: 3px">'+json["g"+iNow].b1+'</b>'+
												json["g"+iNow].price
												+'<b style="font-size: 16px;font-weight: bold;vertical-align: 3px;margin-left: 3px">'+json["g"+iNow].b2+'</b>'+
											'</p>'+
										'</div>'+
									'</div>'+
								'</div>'+
								'<a href="##" class="viewbtn">点击进入</a>'+
								'<div class="clear"></div>'+
							'</div>'+
						'</div>'+
						'<div class="clear"></div>'+
					'</div>');
             },
             error: function(){
                 console.log('everyDayPromo fail');
             }
        });
	}
	function hotProductLoading(iNow){
		$.ajax({
            type: "get",
            url: "../data/specialProduct.json",        
            success: function(json){
             	$("#hotProductCon>div").append('<div class="mb20 site-hot-item">'+

								'<div class="site-hot-item-fl">'+
									'<a href="##" class="newstats">'+
										'<img src='+json["g"+iNow].img+'>'+
									'</a>'+
									'<div class="soldoutPro item-soldout" style="display: none;"></div>'+
									'<img src="../img/index/ad_top2.png" style="width:auto; height:auto;z-index:2;position: absolute;border-radius:0; bottom:10px;top:undefined; right:10px">'+
								'</div>'+

								'<div class="site-hot-item-fr">'+
									'<div class="site-hot-row-one">'+
										'<div class="fl">'+
											'<span class="inblock" style="height: 45px;"></span>'+
										'</div>'+
										'<div class="clear"></div>'+
									'</div>'+
									'<h2 class="site-hot-row-two">'+
										'<a href="##" class="newstats">'+json["g"+iNow].h2+'</a>'+
									'</h2>'+
									'<div class="site-hot-row-three">'+
										'<span class="product-words">'+
										json["g"+iNow].title
										+'</span>'+
									'</div>'+
									'<div class="fahuo-cang" style="height: 18px;">'+
										'<i></i>'+
										'母婴之家发货'+
									'</div>'+
									'<div class="site-hot-row-four">'+
										'<div class="fl">'+
											'<div class="promo-price">'+
												'<div class="price">'+
													'<p style="font-size: 32px;" data-type="price">'+
														'<b style="font-size: 18px;font-weight: bold;vertical-align: 2px;margin-right: 3px">'+json["g"+iNow].b1+'</b>'+
														json["g"+iNow].price
														+'<b style="font-size: 16px;font-weight: bold;vertical-align: 3px;margin-left: 3px">'+json["g"+iNow].b2+'</b>'+
													'</p>'+
												'</div>'+
											'</div>'+
										'</div>'+
										'<a href="##" class="viewbtn">点击进入</a>'+
										'<div class="clear"></div>'+
									'</div>'+
								'</div>'+
								'<div class="clear"></div>'+
							'</div>');
             },
             error: function(){
                 console.log('everyDayPromo fail');
             }
        });
	}
})

/*--------------------------二三级导航的Ajax------------------------------------*/
// var aNavThreeDl = []; //dl数组
//二级导航渲染
	$.ajax({
	    type: "get",
	    url: "../data/NavTwo.json",        
	    success: function(json){
	        var aNavTwo = $(".ui-nav .ui-category ul li");
	        // var iNowTwo = [];
	        aNavTwo.each(function(){
	        	var iNowTwo = $(this).index();
	        	$(this).find("a").eq(0).html(
	        		'<i class="ui-cate-icon ui-cate-icon'+($(this).index()+1)+'"></i>'+
					'<i class="ui-cate-arr"></i>'+json["two_"+$(this).index()]);
	        	fThreeNav(iNowTwo);
			})
		},
	    error: function(){
	        console.log('NavTwo fail');
	    }
	});
	function fThreeNav(iNow){
		$.ajax({
	     	type: "get",
	     	url: "../data/NavThree"+iNow+".json",        
	     	success: function(json){
	     		// 获取第一个二级导航下面所有的dl
	     	   	var aNavThreeDl = $(".ui-cate-left").eq(iNow).find("dl");
	     	   	aNavThreeDl.each(function(){
	     	   	var obName = json["three_"+$(this).index()].name;
	     	   	var obVal = json["three_"+$(this).index()].val;
	     		for(var i in obVal){
					$(this).find("dd").append('<a href="##">'+(obVal[i])+'</a>'+' | ');
				}
				$(this).find("dt a").html(obName);
	     	   })
	   				
	     	},
	     	error: function(){
	     	    console.log('NavTwo fail');
	     	}
		});
		return false;
	}
/*------------------------倒计时----------------------------*/
	$(document).ready(function(){
		var iSec = 60;
		var iMin = 60;
		var iHour = 15;
		$("#sec").everyTime('1s','tSec',function(){
			if(iSec <=0){
				iSec=60;
				if(iMin<=0){
					iMin=60;
					if(iHour<=0){
						$("#sec").stopTime('tSec');
						$("#hour").html("00");
						$("#min").html("00");
						$("#sec").html("00");
					}else{
						iHour--;
						$("#hour").html(iHour);
					}
				}else{
					iMin--;
					$("#min").html(iMin);
				}
			}else{
				$("#sec").html(iSec);
				iSec--;
			}
		})
	})