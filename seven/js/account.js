summerready=function(){
	setTimeout(function(){
	summer.callService(
					"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
					{
						'isShowTabbar': "NO",
					}, //参数
					false //异步（true 同步）
				)
	},1000)
	
		var detail=summer.getStorage('detail');
		if(detail!=undefined&&detail.indexOf('&')>=0){
		$('.deposit').text(detail.split('&')[0]);
		$('.myday').text(detail.split('&')[1]);
		/*$('.mytime').text(detail.split('&')[2].substr(0,4)+'年'+detail.split('&')[2].substr(4,2)+'月'+detail.split('&')[2].substr(6,2)+'日');
		$('.mycountnum').text(detail.split('&')[3]);*/
		var allpdetailStr='<li class="clearfix"><span class="left">存入时间：</span><span class="right">'+ detail.split('&')[2].substr(0,4)+'年'+detail.split('&')[2].substr(4,2)+'月'+detail.split('&')[2].substr(6,2)+'日' + '</span></li>'+
				'<li class="clearfix"><span class="left">账户号：</span><span class="right">'+detail.split('&')[3]+'</span></li>';
		$(allpdetailStr).appendTo('.accountdiv2');
	}
}