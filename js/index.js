$(function(){
	var D = {
		baseUrl: 'https://zjoke-bak.oss-cn-hangzhou.aliyuncs.com/Hardy-Heron/',
		loadBg: $('.loadBg'),
		colorInc: 100 / 3,
	    main : $('.main')
	};
	var i = 0;
    var height = $(window).height();
	var load = {
	    imgs: [
	    	'1@2x.jpg',
	    	'2@2x.jpg',
	    	'3@2x.jpg',
	    	'4@2x.jpg',
	    	'7@2x.jpg',
	    	'8@2x.jpg',
	    	'9@2x.jpg',
	    	'10@2x.jpg',
	    	'11@2x.jpg',
	    	'12@2x.jpg',
	    	'13@2x.jpg',
	    	'14@2x.jpg',
	    	'15@2x.jpg',
	    	'16@2x.jpg',
	    	'17@2x.jpg',
	    	'18@2x.jpg',
	    	'19@2x.jpg',
	    	'20@2x.jpg',
	    	'21@2x.jpg',
	    	'23@2x.jpg',
	    ],
	    len : 0,
	    preLoadImg: function() { //图片预先加载
	        var t = this;
	        if (t.imgs.length) {
				var img = new Image();
				img.src = D.baseUrl + 'images/' + t.imgs.shift();
	            img.onload = function() {
	                var imgProg = t.imgs.length / t.len;
	                var percent = Math.ceil( (t.len - t.imgs.length) / t.len * 100);
	                t.updatePercent(percent);
	        		time([500],[
						function(){
							t.preLoadImg();
	        			}
        			]);
				 };
	        }else{
		   //     	D.main.attr('src','default.html');
		   //     	time([500, 1000],[
	    //    			function(){
	    //    				D.loadBg.parents('.page0').addClass('active');
	    //    				D.main.show();
					// },
					// function(){
					// 	D.loadBg.parents('.page0').remove();
					// 	autoPlay(document.getElementById('audio'));

	    //    			}
	    //    		],true);
	        };
	    },
	    updatePercent: function(val){
	    	var valOrig = val;
			      val = 100 - val;

			      if(valOrig == 0)
			      {
			        $(".progress .percent").text(0 + "%");
			      }
			      else $(".progress .percent").text(valOrig + "%");

			      $(".progress").parent().removeClass();
			      $(".progress .water").css("top", val + "%");

			      if(valOrig < D.colorInc * 1)
			        $(".progress").parent().addClass("color-red");
			      else if(valOrig < D.colorInc * 2)
			        $(".progress").parent().addClass("color-orange");
			      else
			        $(".progress").parent().addClass("color-green");
	    },
	    init: function() {
	        this.len = this.imgs.length;
	       	this.preLoadImg();
	    }
	};
	function  autoPlay(audio){
		var ua = window.navigator.userAgent.toLowerCase();
		var isWeixin = ua.match(/MicroMessenger/i) == 'micromessenger';
		if(isWeixin){
			document.addEventListener('WeixinJSBridgeReady',function (){
				audio.play();
			});
			document.addEventListener('touchstart',function play(){
				audio.play();
			},false);
			audio.play();
		}else{
			document.addEventListener('touchstart',function play(){
				if(audio.paused){
					audio.play();
				};
			},false);
		};
	};
	function init() {
		setTimeout(function(){
			load.init(); // 必要图片预加载
		},300);
		autoPlay(document.getElementById('audio'));
	};
	var timer = setInterval(function(){
		if( !!wechat && !!wx){
			wechat.Handler();
			init();
			clearInterval(timer)
		};
	},500);
});