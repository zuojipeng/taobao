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


      // 设置放大镜
      //samll的move事件
          $('#small').mousemove(function(e){
               //move big显示
               $('#move,#big').show();
               //move的坐标=鼠标位置-small的偏移值-move的宽高一半
               var x=e.pageX-$(this).offset().left-($('#move').width()/2);
               var y=e.pageY-$(this).offset().top-($('#move').height()/2);
               //console.log(x,y);
               
               //判断边界
               if(x<=0){
                    x=0
               }else if(x>=$('#small').width()-$('#move').width()){
                    x=$('#small').width()-$('#move').width();
               }
               
               if(y<=0){
                    y=0;
               }else if(y>=$('#small').height()-$('#move').height()){
                    y=$('#small').height()-$('#move').height();
               }
               //move绑定坐标
               $('#move').css({left:x,top:y});
               //大图显示移动距离
               //大小图片比例
               var scale=$('#big>img').width()/$('#small>img').width();
               //console.log(scale);
               
               //设置big的移动距离
               $('#big').scrollLeft(x*scale);
               $('#big').scrollTop(y*scale);
               //big大图=samll图 src
               $('#big>img').attr('src',$('#small>img').attr('src'));
          }).mouseout(function(){
               //隐藏
               $('#move,#big').hide();
          })
          //点击toggle li 更换图片
          $('#toggle>li>img').click(function(){
               $('#small>img').attr('src',$(this).attr('src'));
          })


       //li标签的移入移出事件
     $('.tab ul li').mouseenter(function(){

          //显示当前li蓝色  其余li的背景不是蓝色
          $(this).addClass('selected').siblings().removeClass('selected');
          //找到当前li的下标
          var index=$(this).index();
          //alert(index)

          //设置对应的div显示 其余隐藏
          $('.cont>div').eq(index).show().siblings().hide();

     })

})