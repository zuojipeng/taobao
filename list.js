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



var main_div1=document.getElementsByClassName('main_div1')[0];
//window的滚动监听事件
	window.onscroll=function(){
	
		//文档总高度-可视区域的高度<=滚动到距离=到底
		
		//html总的高度
		var dh=document.documentElement.offsetHeight;
		console.log(dh)
		//获取可视区域高度
		var ch=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
		console.log(ch);
		//获取滚动的距离
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		console.log(st);
		
		
		//判断滚动条滚动到底部 加载数据
		if(dh-ch==st){
			//点击发送请求数据
			Ajax('JSON').get('liebiao.php',function(msg){
				//获取到请求的数据
				console.log(msg);	
				//声明空的字符串
				var str='';
				//遍历对象添加图片
				for(var i in msg){
					//console.log(msg[i]["pic"]);
					
					str+='<img src="'+msg[i]["pic"]+'"width="194" height="301">';
				}		
				//将获取到的数据添加到div中
				main_div1.innerHTML+=str;	
			})
		}
	}
	
