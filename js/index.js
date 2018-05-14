// swiper初始化
	function swiperInit(){
		var swiperV = new Swiper('.swiper-container-v', {
			direction: 'vertical',
			on:{
				init: function(){
					swiperAnimateCache(this); //隐藏动画元素 
					swiperAnimate(this); //初始化完成开始动画
				}, 
				slideChangeTransitionEnd: function(){ 
					swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
				} 
			}
		});
		var swiperScrollbar = new Swiper('.swiper-container-scrollbar', {
			watchOverflow: true,
			scrollbar: '.swiper-container-scrollbar .swiper-scrollbar',
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			freeModeMomentum: false,
			freeModeMomentumBounce: false,
			nested: true,
		});

		$(".swiper-container-scrollbar .swiper-slide").on("touchmove",function(e) {
			var top = -$(this).find(".bg").offset().top ;
			var bgH = $(this).height();
			console.log(top/bgH)
			if (top/bgH>0.07) {
				$(".swiper-container-scrollbar .engine-title").addClass('animated bounceInDown').show();
			}
			if (top/bgH>0.12) {
				$(".swiper-container-scrollbar .motor").addClass('animated fadeIn').show();
				$(".swiper-container-scrollbar .motor-word").addClass('animated bounceInRight').show();
			}
			if (top/bgH>0.19) {
				$(".swiper-container-scrollbar .gearbox").addClass('animated fadeIn').show();
				$(".swiper-container-scrollbar .gearbox-word").addClass('animated bounceInLeft').show();
			}
			if (top/bgH>0.25) {
				$(".swiper-container-scrollbar .model-title").addClass('animated bounceInDown').show();
			}
			if (top/bgH>0.31) {
				$(".swiper-container-scrollbar .dw").addClass('animated fadeIn').show();
				$(".swiper-container-scrollbar .headlight-word").addClass('animated bounceInRight').show();
				$(".swiper-container-scrollbar .grille-word").addClass('animated bounceInRight').show();
			}
			if (top/bgH>0.38) {
				$(".swiper-container-scrollbar .up").addClass('animated fadeIn').show();
				$(".swiper-container-scrollbar .rack-word").addClass('animated bounceInDown').show();
				$(".swiper-container-scrollbar .taillight-word").addClass('animated bounceInRight').show();
				$(".swiper-container-scrollbar .hub-word").addClass('animated bounceInLeft').show();	
			}
			if (top/bgH>0.45) {
				$(".swiper-container-scrollbar .tent-title").addClass('animated bounceInDown').show();
			}
			if (top/bgH>0.50) {
				$(".swiper-container-scrollbar .atmosphere").addClass('animated fadeIn').show();
				$(".swiper-container-scrollbar .atmosphere-word").addClass('animated bounceInRight').show();
			}
			if (top/bgH>0.53) {
				$(".swiper-container-scrollbar .sunshade").addClass('animated fadeIn').show();
				$(".swiper-container-scrollbar .sunshade-word").addClass('animated bounceInLeft').show();
			}
			if (top/bgH>0.58) {
				$(".swiper-container-scrollbar .skylight").addClass('animated fadeIn').show();
				$(".swiper-container-scrollbar .skylight-word").addClass('animated bounceInRight').show();
			}
			if (top/bgH>0.70) {
				$(".swiper-container-scrollbar .sales").addClass('animated swing').show();
			}
		});
		$("#next_btn").on("click",function(){
			$("#order_page").fadeIn();
		});	
	}

	// 预加载
	function prestrain(){
		var imgs = document.getElementsByTagName("img");
		var mask = document.getElementById("mask");
		var p = document.getElementById("num");
		var percent = 0;
		var num = 0;

		for (var i = 0; i < imgs.length; i++) {
			var img = new Image();
			img.src = imgs[i].getAttribute("data-src");
			img.onload = function(){
				num++;
				percent = parseInt((num / imgs.length) * 100);
				p.innerText = percent;
				if(num == imgs.length){
					for (var j = 0; j < imgs.length; j++) {
						imgs[j].src = imgs[j].getAttribute("data-src");
					}
					setTimeout(
						function(){
							mask.style.display = "none";
							swiperInit();
						}
					,300)
				}
			}
		}
	}
	
	$(function(){
		/*按屏幕修改根文本尺寸*/
		var setRootFont=function(){
			var ww=$(document.body).width();
			ww=ww>1024?1024:ww;
			var f=Math.floor(ww/ 24);
			$("html").css("font-size",f+"px");
			$("body").css("font-size",f+"px");
			console.log("RFS:"+f+"  ("+$("body").width()+"x"+$("body").height()+")");
		};
		setRootFont();
		$(window).resize(function(){setRootFont();});
		prestrain();
		$("#return_btn").on("click",function(){
			$("#order_page").fadeOut();
		});
		$("#check_btn").on("click",function(){
			$(this).find("img").toggleClass("active");
		});
		$("#order_page .bg").on("click",function(e){
			e.preventDefault();
		});
	})