$(function() {

	if(navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1) {

		$('.number').attr('type', 'tel')

	}
	//	系统判断
	//页面跳转
	if(sessionStorage.getItem("num") != null) {
		var sia = sessionStorage.getItem("num");
		var ind = $('.indexmi');

		if(sia == 0 || sia == 1) {
			ind.eq(0).show().siblings().hide();
			$('.in-box').eq(sia).show().siblings().hide();

		} else if(sia == 2 || sia == 3) {
			ind.eq(1).show().siblings().hide()
			$('.in-box-a').eq(sia - 2).show().siblings().hide();

		}

	}

	//页面跳转
	var tex, tex1, tex2;
	var strm = JSON.parse(sessionStorage.getItem("str"));
	if(strm != null && strm != undefined) {
		$('.in-cen-left p').text(strm.BODY.proceed_rate + '%')
		$('.in-hb-tite p').text('零钱：' + strm.BODY.sof_bal + '元')
		$('.in-header-box p').text(strm.BODY.home_word)
	}
	var bodydata = JSON.parse(sessionStorage.getItem('bodydata'));
	if(bodydata != null && bodydata.length > 0) {
		$('.countul').empty();
		for(var i = 0; i < bodydata.length; i++)
			$('<li><h3>存款金额</h3><div><h4 class="countnum">' + bodydata[i].deposit_money + '</h4><p>已存<span class="daynum">' + bodydata[i].deposit_days + '</span>天</p></div></li>').appendTo('.countul');

	}
	//点击查看账户详情
	$('.countul').on('click', 'li', function() {
		sessionStorage.setItem('inde', $(this).index())
		summer.callService(
			"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
			{
				'isShowTabbar': "NO"
			}, //参数
			false //异步（true 同步）
		)

		window.location.href = "html/accountdetails.html";
	})

	//点击立即转入
	$('.transferbtn').click(function() {
		summer.callService(
			"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
			{
				'isShowTabbar': "YES",

				'tab': 6

			}, //参数
			false //异步（true 同步）
		)
	})

	$('.in-bot-c,.in-cen,.in-bot-a a,.in-header-body a').click(function() {

		summer.callService(
			"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
			{
				'isShowTabbar': "NO"
			}, //参数
			false //异步（true 同步）
		)
	})
	$('.in-header-box a').click(function() {

		summer.callService(
			"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
			{
				'isShowTabbar': "YES",

				'tab': 1
			}, //参数
			false //异步（true 同步）
		)
	})

	$('.in-bot-b').click(function() {
		var a = $(this).closest('.row').find('.number').val();
		if(a !== '') {


		summer.callService(
			"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
			{
				'isShowTabbar': "YES",

				'transtype': a,
				'tab': 1
			}, //参数
			false //异步（true 同步）
		)
		}
	})
	$('.in-hb-tite span').click(function() {
		summer.callService(
			"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
			{
				'isShowTabbar': "YES",
				'tab': 2

			}, //参数
			false //异步（true 同步）
		)
	})

	$('.in-header-bod h2 span').click(function() {
		$('.in-header-bod h2 span').toggleClass('active');
		var strt = JSON.parse(sessionStorage.getItem("str"));
		var a = $('.in-header-bod span');
		var b = $('.in-header-body-span');
		var c = $('.in-header-body-spa');
		!$('.in-header-bod h2 span').is('.active') ? a.text('* * * * *') && b.text('* * * ') && c.text('* * * ') : a.text(strt.BODY.balance) && b.text(strt.BODY.past_proceed) && c.text(strt.BODY.total_proceed);
		tex = $(this).closest('header').find('h2 span').text();
		tex1 = $(this).closest('header').find('.in-header-body-span').text();
		tex2 = $(this).closest('header').find('.in-header-body-spa').text();
		sessionStorage.setItem("tex", tex);
		sessionStorage.setItem("tex1", tex1);
		sessionStorage.setItem("tex2", tex2);

	})

	parseFloat(sessionStorage.getItem("tex")).toString() !== "NaN" ? $('.in-header-bod span').text(sessionStorage.getItem("tex")) && $('.in-header-body-span').text(sessionStorage.getItem("tex1")) && $('.in-header-body-spa').text(sessionStorage.getItem("tex2")) && $('.in-header-bod h2 span').addClass('active') : sessionStorage.setItem("tex", tex) && sessionStorage.setItem("tex1", tex1) && sessionStorage.setItem("tex2", tex2) && $('.in-header-bod h2 span').removeClass('active');

})