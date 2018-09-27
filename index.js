// 设置导航栏地区选项卡样式
$(function(){
	$('.navli_one').mouseenter(function(){
		$('.diqu').show();
	}).mouseleave(function(){
		$('.diqu').hide();
	})


   // 设置我的淘宝的选项卡
     $('.navli_two').mouseenter(function(){
     	$('.baobei').show();
     }).mouseleave(function(){
     	$('.baobei').hide();
     })

     $('.baobei li').hover(
     	function(){
     	$(this).addClass('hover');
     },function(){
     	$(this).removeClass('hover');
     },

     )
     // 设置收藏夹的选项卡
     $('.navli_three').mouseenter(function(){
     	$('.shoucang').show();
     }).mouseleave(function(){
     	$('.shoucang').hide();
     })

     $('.shoucang li').hover(
     	function(){
     	$(this).addClass('hover');
     },function(){
     	$(this).removeClass('hover');
     },

     )

     // 设置卖家中心对应的选项卡
     $('.navli_four').mouseenter(function(){
     	$('.maijia').show();
     }).mouseleave(function(){
     	$('.maijia').hide();
     })

     $('.maijia li').hover(
     	function(){
     	$(this).addClass('hover');
     },function(){
     	$(this).removeClass('hover');
     },

     )

     // 设置客服对应的选项卡
     $('.navli_five').mouseenter(function(){
     	$('.kefu').show();
     }).mouseleave(function(){
     	$('.kefu').hide();
     })

     $('.kefu li').hover(
     	function(){
     	$(this).addClass('hover');
     },function(){
     	$(this).removeClass('hover');
     },

     )

     // 设置网页导航对应的选项卡

     $('.navli_six').mouseenter(function(){
     	$('.wangzhan').show();
     }).mouseleave(function(){
     	$('.wangzhan').hide();
     })

      $('.wz>ul>li').hover(
     	function(){
     	$(this).addClass('hover');
     },function(){
     	$(this).removeClass('hover');
     },

     )

      // 隐藏的搜索栏 选项卡
      $('.nav2_tb').mouseenter(function(){
      	$('.nav2_tberzi').show();
      }).mouseleave(function(){
      	$('.nav2_tberzi').hide();
      })

        $('.nav2_tberzi>li').hover(
     	function(){
     	$(this).addClass('nav2_tberzi1');
     },function(){
     	$(this).removeClass('nav2_tberzi1');
     },

     )
     
     // 设置选项卡移入移出的样式

        $('.daohang_ul>li>a').hover(
     	function(){
     	$(this).addClass('daohang_a');
     },function(){
     	$(this).removeClass('daohang_a');
     },

     )


     // 设置主题部分选项卡移入移出
      $('.daohang_nvzh').mouseenter(function(){
      	$('.nvzhuang_xuan').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan').hide();
      })

       $('.daohang_nvzh1').mouseenter(function(){
      	$('.nvzhuang_xuan1').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan1').hide();
      })
       $('.daohang_nvzh2').mouseenter(function(){
      	$('.nvzhuang_xuan2').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan2').hide();
      })
       $('.daohang_nvzh3').mouseenter(function(){
      	$('.nvzhuang_xuan3').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan3').hide();
      })

       $('.daohang_nvzh4').mouseenter(function(){
      	$('.nvzhuang_xuan4').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan4').hide();
      })

        $('.daohang_nvzh5').mouseenter(function(){
      	$('.nvzhuang_xuan5').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan5').hide();
      })

        $('.daohang_nvzh6').mouseenter(function(){
      	$('.nvzhuang_xuan6').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan6').hide();
      })

        $('.daohang_nvzh7').mouseenter(function(){
      	$('.nvzhuang_xuan7').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan7').hide();
      })

        $('.daohang_nvzh8').mouseenter(function(){
      	$('.nvzhuang_xuan8').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan8').hide();
      })

        $('.daohang_nvzh9').mouseenter(function(){
      	$('.nvzhuang_xuan9').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan9').hide();
      })

        $('.daohang_nvzh10').mouseenter(function(){
      	$('.nvzhuang_xuan10').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan10').hide();
      })

        $('.daohang_nvzh11').mouseenter(function(){
      	$('.nvzhuang_xuan11').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan11').hide();
      })

        $('.daohang_nvzh12').mouseenter(function(){
      	$('.nvzhuang_xuan12').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan12').hide();
      })

        $('.daohang_nvzh13').mouseenter(function(){
      	$('.nvzhuang_xuan13').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan13').hide();
      })

        $('.daohang_nvzh14').mouseenter(function(){
      	$('.nvzhuang_xuan14').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan14').hide();
      })

        $('.daohang_nvzh15').mouseenter(function(){
      	$('.nvzhuang_xuan15').show();
      }).mouseleave(function(){
      	$('.nvzhuang_xuan15').hide();
      })


      // 设置轮播图效果

      // 声明一个全局变量
      var m=0;
      function pao(){
      	  timer=setInterval (function(){
                m++;
                if(m>4){
                   m=0;
                }

				$('.img li').eq(m).addClass('show').siblings('li').removeClass('show')
				$('.num li').eq(m).addClass('on').siblings('li').removeClass('on')

      	  },2000)
      }

      pao();

      $('#box').mouseenter(function(){
		
			clearInterval(timer);
			$('.lr').show();
			$('.num li').mouseenter(function(){
				m=$(this).index();
				//显示当前图片 和数字 隐藏其余
				$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
				$('.num li').eq(m).addClass('on').siblings('li').removeClass('on');
			});
		
		}).mouseleave(function(){
			pao();
			$('.lr').hide();
		})


		$('.lr .right').click(function(){
			m++;
			if(m>4){
				m=0;
			}
			$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
			$('.num li').eq(m).addClass('on').siblings('li').removeClass('on');
		})
	
		//left 点击事件 显示上一张 
		$('.lr .left').click(function(){
			m--;
			if(m<0){
				m=4;
			}
			$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
			$('.num li').eq(m).addClass('on').siblings('li').removeClass('on');
		})

    // 设置第二个轮播图
     // 声明一个全局变量
      var i=0;
      function dong(){
      	  kaishi=setInterval (function(){
                i++;
                if(i>6){
                   i=0;
                }
				$('.tianmao_img li').eq(i).addClass('tianmao_show').siblings('li').removeClass('tianmao_show')
				$('.tianmao_num li').eq(i).addClass('tianmao_on').siblings('li').removeClass('tianmao_on')

      	  },2000)
      }

      dong();

       $('#main_tianmao').mouseenter(function(){
		
			clearInterval(kaishi);
			$('.tianmao_lr').show();
			$('.tianmao_num li').mouseenter(function(){
				i=$(this).index();
				//显示当前图片 和数字 隐藏其余
				$('.tianmao_img li').eq(i).addClass('tianmao_show').siblings('li').removeClass('tianmao_show');
				$('.tianmao_num li').eq(i).addClass('tianmao_on').siblings('li').removeClass('tianmao_on');
			});
		
		}).mouseleave(function(){
			dong();
			$('.tianmao_lr').hide();
		})

		// 设置公告的选项卡
		$('.denglu_gg>ul>li').mouseenter(function(){
			$(this).addClass('gg_one').siblings().removeClass('gg_one');
			var index=$(this).index();

			$('.gonggao_gg>ul').eq(index).show().siblings().hide();
		})
         // 设置电话费移入移出
         $('.denglu_jingl>ul>.jingL_chf').eq(0).mouseenter(function(){
         	$('.denglu_jingl>.dih_xuanxk').eq(0).show();
         })
         console.log($('.denglu_jingl.dih_xuanxk').eq(0));
		// 设置充话费的选项卡
		$('.dih_xuanxk>.dengl_chliul>ul>li').mouseenter(function(){
			$(this).addClass('chliul_lil').siblings().removeClass('chliul_lil');
			var index=$(this).index();
			$('.dlu_chonghuafei>div').eq(index).show().siblings().hide();
		})

		// 设置充话费点差关闭的效果
		$('.dlu_X').click(function(){
			$('.dih_xuanxk').hide();
		})




      // 设置生活圈移入移出事件
         $('.main_shenghuo>ul>li').hover(
     	function(){
     	$(this).addClass('shenghhuo');
     },function(){
     	$(this).removeClass('shenghhuo');
     },

     )

     // 设置好货商品以及爱逛街的移入移出事件
     $('.main_you>ul>li>div').hover(function(){
     	$(this).addClass('aigoudiv');
     },function(){
        $(this).removeClass('aigoudiv');
     },)

     $('.main_you ul li p').hover(function(){
     	$(this).addClass('aigP');
     },function(){
        $(this).removeClass('aigP');
     },)


     // 设置每日好店和淘宝直播移入移出样式
     $('.main_haodian>ul>li>div').hover(function(){
     	$(this).addClass('aigoudiv');
     },function(){
        $(this).removeClass('aigoudiv');
     },)

     $('.main_zhibo>ul>li>div').hover(function(){
     	$(this).addClass('aigoudiv');
     },function(){
        $(this).removeClass('aigoudiv');
     },)

     // 设置时尚爆料王移入移出事件

      $('.main_baoliao>ul>li').hover(function(){
     	$(this).addClass('divbiankuan');
     },function(){
        $(this).removeClass('divbiankuan');
     },)

       $('.main_xinpin').hover(function(){
     	$(this).addClass('divbiankuan');
     },function(){
        $(this).removeClass('divbiankuan');
     },)

       // 设置品质特色的移入移出的事件
        $('.main_pinzhi>ul>li>div').hover(function(){
     	$(this).addClass('pzborder');
     },function(){
        $(this).removeClass('pzborder');
     },)

     // 设置实惠专业户和热卖单品移入移出
       $('.main_shihui>ul>li').hover(function(){
     	$(this).addClass('pzborder');
     },function(){
        $(this).removeClass('pzborder');
     },)

    // 设置楼层

    //li点击滚动到指定楼层
	$('.judui li').click(function(){
		//获取当前li下标
		var index=$(this).index();
		
		//查看楼层自己偏移值
		console.log($('.floor').eq(index).offset().top);
		
		//声明变量
		var top=$('.floor').eq(index).offset().top;
		
		//设置滚动指定的位置
		//$('html').scrollTop(top);
		
		//加动画
		$('html').animate({scrollTop:top},500);
		
	})

	//声明数组获取所有floor的高度
	var  heights=[];
	$('.floor').each(function(){
		heights.push($(this).offset().top);
	})
	console.log(heights);

	//判断高度找到对应的楼层 滚动事件
	$(window).scroll(function(){
		//获取当前的滚动距离
		var top=$(window).scrollTop();
		console.log(top);
		
		//声明变量
		var index;
		//遍历
		for(var k=0;k<heights.length;k++){
			//判断top的值
			if(top>=heights[k] && top<heights[k+1]){
				index=k;
				//找到对应的F楼层
				$('.judui li').eq(index).css('background','red').siblings().css('background','#ff6b05')
			}else if(top>=heights[heights.length-1]){
				index=heights.length-1;
				$('.judui li').eq(index).css('background','red').siblings().css('background','#ff6b05')
			}
		}
	
	
	})

   // 设置文档滚动事件
   $(window).scroll(function(){
       var scrollmax=$(window).scrollTop();
       if (scrollmax>300) {
          $('.nav2').show()
       }else if(scrollmax<300){
          $('.nav2').hide()
       }
   })

})

// 设置倒计时
//声明定时器 
	setInterval(function(){
		//获取当前与指定时间的差值
		var d1=new Date();
		var d2=new Date('2018/9/18');
		//获取差值
		var cha=d2.getTime()-d1.getTime();
		//var cha=d2.valueOf()-d1.valueOf();
		console.log(cha);
		
		//小时
		var hour=Math.floor(cha/(1000*60*60))
		console.log(hour);
		cha%=1000*60*60;
		
		//分
		var minute=Math.floor(cha/(1000*60))
		console.log(minute);
		cha%=1000*60;
		
		//秒
		var second=Math.floor(cha/(1000))
		console.log(second);
	
		//获取节点
		var tao_dajis1=document.getElementsByClassName('tao_dajis1')[0];
		var tao_dajis2=document.getElementsByClassName('tao_dajis2')[0];
		var tao_dajis3=document.getElementsByClassName('tao_dajis3')[0];
		console.log(tao_dajis1);
		
		// innerHTML赋值时间
		tao_dajis1.innerHTML=""+hour+"";
		tao_dajis2.innerHTML=""+minute+"";
		tao_dajis3.innerHTML=""+second+"";
	},1000)
