<?php
    $OSS_URL = 'https://zjoke-bak.oss-cn-hangzhou.aliyuncs.com/Hardy-Heron/';
?>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
	<meta content="telephone=no" name="format-detection">
	<title></title>
	<link rel="stylesheet" type="text/css" href="<?=$OSS_URL?>css/reset.css">
	<link rel="stylesheet" href="<?=$OSS_URL?>css/smd.css">
	<link rel="stylesheet" href="<?=$OSS_URL?>css/small.css">
</head>
	<body class="oh">
		<div class="container page0">
			<div class="loadBg">
			  <div class="color-red">
			    <div class="progress">
			      <div class="inner">
			        <div class="percent"><span>0</span>%</div>
			        <div class="water"></div>
			        <div class="glare"></div>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
		<iframe class="main" frameborder="0"></iframe>
		<audio id="audio" preload="auto" loop="loop" autoplay src="<?=$OSS_URL?>bg.mp3"></audio>
	</body>
	<script src="<?=$OSS_URL?>js/zepto.min.js"></script>
	<script src="<?=$OSS_URL?>js/zepto.touch.js"></script>
	<script src="<?=$OSS_URL?>js/jweixin-1.0.0.js"></script>
	<script src="<?=$OSS_URL?>js/wechat.js"></script>
	<script src="<?=$OSS_URL?>js/prefixfree.min.js"></script>
	<script src="<?=$OSS_URL?>js/common.js"></script>
	<script src="<?=$OSS_URL?>js/index.js"></script>
</html>