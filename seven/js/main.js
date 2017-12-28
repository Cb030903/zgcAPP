var nati = {

	service: function(isShow, tab, mjso, a) {

		var callback = !$('.in-box-a').eq(0).is(":hidden") ? accountdetails : iss;
		summer.callService(
			"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
			{
				'isShowTabbar': isShow,
				'tab': tab,
				'requestdata': mjso,
				'transtype': a,
				//                   'issigning': "1"//1是未登录     2登录未签约   3登录已签约    4签约账户为0
				"callback": callback,
				"error": errorback

			}, //参数
			false //异步（true 同步）
		)
	}
}


function iss(data) {
	if(data.signingAndLogin != null) {
		var sia = data.signingAndLogin;
		var ind = $('.indexmi');
		if(sia <= 1) {
			ind.eq(0).show().siblings().hide();
			$('.in-box').eq(sia).show().siblings().hide();
		} else{
			ind.eq(1).show().siblings().hide()
			$('.in-box-a').eq(sia - 2).show().siblings().hide();
		}

	}

	if(data.signingAndLogin == 0 && $('.in-header-wu').is(":hidden")) {

		sessionStorage.removeItem('bodydata')

	}
	sessionStorage.setItem("num", data.signingAndLogin)
	var retflag = data.result_data;

	if(retflag != undefined && retflag != null) {

		var str = JSON.parse(retflag)
		sessionStorage.setItem("str", JSON.stringify(str))
		str = str != null ? str : null;
		if(str.BODY.balance != null) {
			var a = $('.in-header-bod span');
			var b = $('.in-header-body-span');
			var c = $('.in-header-body-spa');

			!$('.in-header-bod h2 i').is('.active') ? a.text('* * * * *') && b.text('* * * ') && c.text('* * * ') && $('.in-header-bod h2 i').removeClass('active') : a.text(str.BODY.balance) && b.text(str.BODY.past_proceed) && c.text(str.BODY.total_proceed) && $('.in-header-bod h2 i').addClass('active');
			$('.in-hb-tite p').text('零钱：' + str.BODY.sof_bal + '元')
		}
		if(str.BODY.proceed_rate != null) {
			$('.in-cen-left p').text(str.BODY.proceed_rate + '%')
			$('.in-header-box p').text(str.BODY.home_word)
		}

	}

}

//账户详情
function accountdetails(data) {
	var retflag = data.result_data;
	if(retflag != undefined && retflag.length > 0) {
		var str = JSON.parse(retflag);
		var bodydata = str.BODY.UserInfoOut_list;
		bodydata = JSON.parse(sessionStorage.getItem('bodydata')) ? JSON.parse(sessionStorage.getItem('bodydata')) : bodydata;
		if(bodydata != null && bodydata.length > 0) {
			$('.countul').empty();

			for(var i = 0; i < bodydata.length; i++)
				$('<li><h3>存款金额</h3><div><h4 class="countnum">' + bodydata[i].deposit_money + '</h4><p>已存<span class="daynum">' + bodydata[i].deposit_days + '</span>天</p></div></li>').appendTo('.countul');

		}
		sessionStorage.setItem('bodydata', JSON.stringify(bodydata))

	}

}

function errorback(data) {
	alert(data)
}

window.onload = function() {

	var tru = sessionStorage.getItem('tru') ? sessionStorage.getItem('tru') : true;
	var numt = tru == true ? 500 : 100;
	setTimeout(function() {
		nati.service("YES", 0)

		tru = false;
		sessionStorage.setItem('tru', tru)
	}, numt)

	//0 未登录  1 未签约 2已签约  3已签约账户为0

	if(!$('.in-box-a').eq(0).is(":hidden")) {
		var mjso = {
			'txcode': '1900012',
			'acc_kind': 'CNY',
			'start_page': '1',
			'page_conut': '10',
			'branch_id': '90001'
		};
		nati.service("YES", 5, mjso, null)

	}

};