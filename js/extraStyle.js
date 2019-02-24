$(document).ready(function (){
	$(window).scroll (function(){
		if ($(this).scrollTop() > 100){
			$(".jumpMenu").css("top",0)
		}
		else{
			$(".jumpMenu").css("top","-500")
		}
	});
	$(window).resize(function(){
		 jumpMenu = $(".headContainer").offset();
		var jumpMenuMargin = jumpMenu.left -10;
		 $(".jumpmenu").css ("left",jumpMenuMargin);
	});
		 jumpMenu = $(".headContainer").offset();
		var jumpMenuMargin = jumpMenu.left -10;
		 $(".jumpmenu").css ("left",jumpMenuMargin);
		 
});