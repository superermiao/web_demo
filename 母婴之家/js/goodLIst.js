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
	// 点击nav购物车跳转购物车页面
	$("#wfc_gwc_eleG dt").click(function(){
		location.href = "../html/shopCar.html";
	})
	//nav购物车结算按钮(事件绑定)
	$("#wfc_head_gwc_div").on("click","#jiesuan",function(){
		if($.cookie("username")){
			$(this).find("a").attr("href","order.html");
			location.href = ""
		}else{
			var isLogin = confirm("您还没有登录，点击确认跳转登录页面！")
			if(isLogin){
				$(this).find("a").attr("href","login.html");
			}else{
				$(this).find("a").attr("href","##");
			}
		}
	})
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

	// 热门搜索
	var aHotWords = $(".new_search ul li");
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
	//二级导航渲染
	$.ajax({
	    type: "get",
	    url: "../data/NavTwo.json",        
	    success: function(json){
	        var aNavTwo = $(".ui-nav .ui-category ul li");
	        // var iNowTwo = [];
	        aNavTwo.each(function(){
	        	var iNowTwo = $(this).index();
	        	$(this).find("a").eq(0).html('<i class="ui-cate-icon ui-cate-icon'+($(this).index()+1)+'"></i>'+
										'<i class="ui-cate-arr"></i>'+
										json["two_"+$(this).index()]);
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
	 	   	var ob = json["three_"+$(this).index()];
	 	   	// console.log(ob.val);
	 		for(var i in ob.val){
	 			// console.log(ob.val[i]);
				$(this).find("dd").append('<a href="##">'+(ob.val[i])+'</a>'+' | ');
			}
			$(this).find("dt a").html(ob.name);
	 	   })
	 	},
	 	error: function(){
	 	    console.log('NavTwo fail');
	     	}
		});
		return false;
	}

})
// 商品名称信息展开收起
$(".select_f").children().children().eq(2).click(function(){
	$(this).toggleClass("close");
	if($(this).prev().css("height")=="36px"){
		$(this).prev().css("height","auto");
	}else{
		$(this).prev().css("height","36px");
	}	
});
// 商品展示

$.ajax({
    type: "get",
 	url: "../data/goodList.json",        
 	success: function(json){
 			for(var i in json){
 				fGoodList(json[i]);
 			}
 	},
 	error: function(){
 	    console.log('goodList fail');
     	}
	});
function sendThisGood(thisGoodId){
	$.cookie("thisGoodId",JSON.stringify(thisGoodId),{expires:1,path:"/"});
}
function fGoodList(json){
	$(".goods_list").append(
		'<li>'+
			'<dl class="hover">'+
				'<dt>'+
					'<a onclick="sendThisGood('+json.id+')" href="../html/goodDetail.html" class="landingStats" target="_blank">'+
						'<img src='+json.img+' title='+json.name+' width="160px" height="160px">'+
					'</a>'+
				'</dt>'+
				'<dd>'+
					
					'<p class="goods_name">'+
						'<a onclick="sendThisGood('+json.id+')" href="../html/goodDetail.html" class="traceCount landingStats" target="_blank" title='+json.name+'>'+
                        json.name
                            +'<span class="font-red" data-productmemo="title">'+json.span+'</span>'+
                    	'</a>'+
					'</p>'+
					
					'<p class="price_wrap">'+
						'<span class="price_now">￥ '+
							'<span>'+json.price+'</span>'+
						'</span>'+
					'</p>'+
					
					'<p>'+
						'<span class="btn_m btn_m_o">'+
							'<a class="list02_con_submit">'+
								'加入购物车'+
							'</a>'+
						'</span>'+
						'<span class="btn_m btn_m_g">'+
							'<a class="sc">'+
								'收藏'+
							'</a>'+
						'</span>'+
					'</p>'+
				'</dd>'+
			'</dl>'+
		'</li>');
}
/*------------------------------页面加载的时候读取购物车-------------------------------------*/
// 函数给nav上面的购物车添加商品信息
function fNavCar(){
	var allNum=0;//商品总数
	var allPrice=0;//总价格
	var allNumBefore=0;
	var goodsBefore = $.cookie("cars") ? JSON.parse($.cookie("cars")) : {};
	// 将cookie里面的所有商品信息添加到小购物车里
	$("#top_shoppingcartInfo tbody").find("tr").remove();
	for(var i in goodsBefore){
		allNum += goodsBefore[i].num;
		allPrice += goodsBefore[i].num*goodsBefore[i].price;
		$("#top_shoppingcartInfo tbody").append(
				'<tr>'+
		            '<td>'+
		            	'<img src='+goodsBefore[i].goodImg+' width="50" height="50">'+
		            '</td>'+
		        	'<td align="left">'+
		        		'<a href="##" style="color:#7d7d7d; width:170px; display:block; font-size:12px;margin-left: 3px;" class="goodsName">'+
		        			goodsBefore[i].goodName+
		        		'</a>'+
		        	'</td>'+
		        	'<td align="left">'+
		            	'<span style="color:#fa2a14;font-weight:bold;text-decoration:none; width:60px; display:block; font-size:12px;">'+goodsBefore[i].price+''+
		            		'<img src="../img/goodList/cheng.jpg" align="absmiddle">'+
		            		goodsBefore[i].num+
		            		'<span><br>'+
		                		'<a href="##" style="color:#7d7d7d;font-weight:normal;" class="goodsDel">'+
		                			'[ 删除 ]'+
		                		'</a>'+
		            		'</span>'+
		            	'</span>'+
		        	'</td>'+
		        '</tr>'
			);
	}	
	// 结算(判断取出来的cookie是否为空)
	if(jQuery.isEmptyObject(goodsBefore)){
		$("#top_shoppingcartInfo tbody").append('<tr style="border-bottom:none;">'+
					                        '<td width="50">'+
					                        	'<i class="sprite-icon icon-redcart"></i>'+
					                        '</td>'+
					                        '<td class="td_cart_empty">您的购物车是空的,去挑选喜欢的商品吧~</td>'+
					                        '<td></td>'+
				                        '</tr>');
	}else{
		$("#top_shoppingcartInfo tbody").append(
        '<tr style="height:52px;line-height:52px; border:none">'+
            '<td style="font-size: 12px; text-align:center; background:#f5f5f5;" colspan="3">'+
                '共 '+
                '<span id="top_gwc_saleQty">'+allNum+'</span> '+
                '件商品 合计: '+
                '<span id="top_gwc_saleAmount">¥'+allPrice+'</span>元 '+
                '<span class="btn" id="jiesuan">'+
                    '<a href="##" class="stats">'+
                    '立即结算'+
                    '</a>'+
                '</span>'+
            '</td>'+
        '</tr>')
	}

	//添加删除功能
	$("#top_shoppingcartInfo tbody").find("tr").each(function(){
		$(this).find(".goodsDel").click(function(){
			$(this).closest("tr").remove();
			var goods = $.cookie("cars") ? JSON.parse($.cookie("cars")) : {};
			delete goods[$(this).closest("tr").find(".goodsName").html()]; //删除对应的商品对象
			$.cookie("cars",JSON.stringify(goods),{expires:1,path:"/"}); //再讲删除后的对象car添加到cookie中覆盖原来的
			fNavCar();
		})
	})
	//竖条购物车的总数	
	$("#cartSlideNum").html("("+allNum+")");
	$("#top_gwc_saleQty_out").html(allNum);
}
// 页面刚加载的时候读取cookie里面的信息添加到购物车
$(document).ready(function(){
	fNavCar();
})
/*--------------------------------------加入购物车--------------------------------------------*/
// 事件代理
// 点击添加按钮添加到cookie
$(".goods_list").on("click",".list02_con_submit", function(){
	var goods = $.cookie("cars") ? JSON.parse($.cookie("cars")) : {};
	var goodName = $(this).closest("dd","#SubCategoryPrice").find(".goods_name a").contents().eq(0).text();
	var goodImg = $(this).closest("dd","#SubCategoryPrice").prev().find("img")[0].src;
	var goodPrice = $(this).closest("dd","#SubCategoryPrice").find(".price_now").contents().eq(1).html();
	if(goodName in goods){
		goods[goodName].num++;
	}else{
		goods[goodName] = {
		"goodName":goodName,
		"goodImg":goodImg,
		"price":goodPrice,
		"num":1
		}
	}
	$.cookie("cars",JSON.stringify(goods),{expires:1,path:"/"});
/*将当前商品信息保存下来(用于跳转到详情页面的时候 保存 改商品的名字，
详情页发ajax请求，把相同名字的那个商品信息扔到页面上*/
// $(".goods_list").on("click",".landingStats", function(){
// 	console.log($(this).attr("title"));
// 	// $.cookie("thisGood",JSON.stringify($(this).text().eq(0)),{expires:1,path:"/"});
// })
//给nav上面的购物车添加商品信息
fNavCar();
	
//点击加入购物车出现的遮罩
$("#shoppingDiv").css("display","block");
$("#shoppingDiv").wrap("<div id='dialog_box' style='margin: -115px 0px 0px -225px; padding: 0px; border: none; z-index: 1001; left: 50%; top: 50%; position: fixed;'></div>");
$("#dialog_box").before('<div id="overlay" style="margin: 0px; padding: 0px; border: none; width: 100%; height: 100%; opacity: 0.2; z-index: 1000; position: fixed; top: 0px; left: 0px; background: rgb(51, 51, 51);"></div>');
});


$(".mesCloseA").click(function(){
	$("#shoppingDiv").css("display","none");
	$("#overlay").remove();
	$("#shoppingDiv").unwrap();
});
$("#mesClose").click(function(){
	$("#shoppingDiv").css("display","none");
	$("#overlay").remove();
	$("#shoppingDiv").unwrap();
})
/*--------------------------------------加入购物车--------------------------------------------*/