<?php
	//接收传递来的值
	$uuu=$_POST['uuu'];
	//echo $uuu;
	
	//声明已有的数据
	$arr=["19961001"];
	//数据对比
	if(in_array($uuu,$arr)){
		//输出 y
		echo 'n';
	}else{
		echo 'y';
	}