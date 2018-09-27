$(function(){
    // 设置我的淘宝的选项卡
     $('.navli_two').mouseenter(function(){
     	$('.baobei').show();
     }).mouseleave(function(){
     	$('.baobei').hide();
     })


     // 设置收藏夹的选项卡
     $('.navli_three').mouseenter(function(){
     	$('.shoucang').show();
     }).mouseleave(function(){
     	$('.shoucang').hide();
     })


     // 设置卖家中心对应的选项卡
     $('.navli_four').mouseenter(function(){
     	$('.maijia').show();
     }).mouseleave(function(){
     	$('.maijia').hide();
     })

     // 设置客服对应的选项卡
     $('.navli_five').mouseenter(function(){
     	$('.kefu').show();
     }).mouseleave(function(){
     	$('.kefu').hide();
     })


     // 设置网页导航对应的选项卡

     $('.navli_six').mouseenter(function(){
     	$('.wangzhan').show();
     }).mouseleave(function(){
     	$('.wangzhan').hide();
     })


})

// 设置遮罩
$(function(){
		
		//a标签的点击事件
		$('#main>.zhe_a>a').eq(0).click(function(){
			$('#bar').css({width:$(document).width(),height:$(document).height()});
			$('#bar').show();
			$('#show').show();
		})
	
		//小叉叉的点击隐藏
		$('button').eq(0).click(function(){
			$('#bar').fadeOut();
			$('#show').fadeOut();
		})
		
		//show的拖拽
		$('#show').mousedown(function(e){
			//添加鼠标箭头
			$(this).css('cursor','move');
			//获取鼠标与show不变的距离
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;
			//console.log(x,y);
			
			//文档的移动事件
			$(document).mousemove(function(ev){
				//获取移动的距离=当前鼠标坐标-与show不变的距离
				var ll=ev.pageX-x;
				var tt=ev.pageY-y;
			//	console.log(ll,tt);
				
				//判断边界
				if(ll<=0){
					ll=0
				}else if(ll>=$(document).width()-$('#show').width()){
					ll=$(document).width()-$('#show').width()
				}
				
				if(tt<=0){
					tt=0
				}else if(tt>=$(document).height()-$('#show').height()){
					tt=$(document).height()-$('#show').height()
				}	
				
				//show left top 赋值
				$('#show').css({left:ll,top:tt});
			
			})
	
		
		})
		
		//取消拖拽
		$(document).mouseup(function(){
			//取消鼠标箭头
			$('#show').css('cursor','');
			$(this).off('mousemove');
		})
	
	})
 

 // 设置号码正则匹配

 //声明正则表达式 1    2 3  8
	var pattern=/^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/;
	console.log('aaaaa')
	//获取节点
	var num=document.getElementById('num');
	var cont=document.getElementById('cont');
	console.log(num)

	//num的失去焦点事件
	 num.onblur=function(){
	 	//获取用户输入的值
	 	var v=this.value;
	 	//alert(v)
		
	 	//test() 方法
		if(pattern.test(v)){
	 		//显示不正确
	 		cont.innerHTML='提交成功'
	 	}else{
	 		//显示不正确
			cont.innerHTML='提交失败'
	 	}
	 }
