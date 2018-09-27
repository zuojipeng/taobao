//失去焦点
	div_num2.onblur=function(){
		var uname=this.value;
		//alert(uname)
		
		//发送 获取信息
		Ajax().post('5.php','uuu='+uname,function(msg){
			//console.log(msg);	
			if(msg=='y'){
				//表示以注册
				info.innerHTML='对不起，密码错误！';
			}else{
				//表示可以注册
				info.innerHTML='登录成功';
			}
		});
	}
