$(function() {





	var detail = JSON.parse(sessionStorage.getItem('bodydata'));
	
	if(detail != undefined && detail != null) {
		var ind=sessionStorage.getItem('inde')
			$('.hxcjsdiv1-1 span').text(JSON.parse(sessionStorage.getItem("str")).BODY.proceed_rate);
	
		
		$('.deposit').text(detail[ind].deposit_money);
		$('.myday').text(detail[ind].deposit_days);
		var allpdetailStr = '<li class="clearfix"><span class="left">存入时间：</span><span class="right">' + detail[ind].deposit_date.substr(0, 4) + '年' + detail[ind].deposit_date.substr(4, 2) + '月' + detail[ind].deposit_date.substr(6, 2) + '日</span></li>' +
			'<li class="clearfix"><span class="left">账户号：</span><span class="right">' + detail[ind].user_name +'-'+detail[ind].user_num +'</span></li>';
		$(allpdetailStr).appendTo('.accountdiv2');
	}
})