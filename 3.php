<?php

	//声明数组 模拟数据
	$data=[
		["pic"=>"image/".mt_rand(1,70).".jpg"],
		["pic"=>"image/".mt_rand(1,70).".jpg"],
		["pic"=>"image/".mt_rand(1,70).".jpg"],
		["pic"=>"image/".mt_rand(1,70).".jpg"],	
	];
	
	//输出json数据
	echo json_encode($data);
