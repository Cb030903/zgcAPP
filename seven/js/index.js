$(function(){
			//	页面切换
   $('.in-a').click(function(){
   	var pag=$(this).attr('datt');

summer.openWin({
					id:pag,
					url:"html/"+pag+".html"
				});
   	
   })
   $('.um-back').click(function(){				 
					summer.closeWin();
				});
//	页面切换	
})