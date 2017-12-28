$(function() {

	$('.row').mainchi()

	if(navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1) {

		$('.number').attr('type', 'tel')

	}
	//	系统判断
	//页面跳转
	if(sessionStorage.getItem("num") != null) {
		var sia = sessionStorage.getItem("num");
		var ind = $('.indexmi');

		if(sia <= 1) {
			ind.eq(0).show().siblings().hide();
			$('.in-box').eq(sia).show().siblings().hide();

		} else {
			ind.eq(1).show().siblings().hide()
			$('.in-box-a').eq(sia - 2).show().siblings().hide();

		}

	}

	//页面跳转
	var tex, tex1, tex2;
	var strm = JSON.parse(sessionStorage.getItem("str"));
		if(strm != null) {
		if(strm.BODY.proceed_rate != null) {
			$('.in-cen-left p').text(strm.BODY.proceed_rate + '%')
			$('.in-header-box p').text(strm.BODY.home_word)
		}
		if(strm.BODY.sof_bal != null) {
			$('.in-hb-tite p').text('零钱：' + strm.BODY.sof_bal + '元')

		}
	}


	//点击查看账户详情
	$('.countul').on('click', 'li', function() {
		sessionStorage.setItem('inde', $(this).index())
		nati.service("NO")

		window.location.href = "html/accountdetails.html";
	})

	//点击立即转入
	$('.transferbtn').click(function() {
		nati.service("YES", 6)

	})

	//点击协议
	$('.in-bot-a').click(function() {
		$(this).toggleClass('active')
		var val = $('.number').val();
		val !== '' && !$(this).is('.active') ? $('.in-bot-b').css('background', '#4F85F3') : $('.in-bot-b').css('background', ' #c7d6f6');

	})
	//点击协议
	$('.in-bot-c,.in-cen,.in-bot-a a,.in-header-body a').click(function() {
		nati.service("NO")

	})
	$('.in-header-box a').click(function() {
		nati.service("YES", 1)

	})

	$('.in-bot-b').click(function() {
		var a = $(this).closest('.row').find('.number').val();
		if(a !== '' && !$('.in-bot-a').is('.active')) {

			nati.service("YES", 1, '', a)

		}
	})
	$('.in-hb-tite span').click(function() {
		nati.service("YES", 2)

	})


	$('.in-header-bod h2 i').click(function() {

		$('.in-header-bod h2 i').toggleClass('active');
		var strt = JSON.parse(sessionStorage.getItem("str"));
		var a = $('.in-header-bod span');
		var b = $('.in-header-body-span');
		var c = $('.in-header-body-spa');
		!$('.in-header-bod h2 i').is('.active') ? a.text('* * * * *') && b.text('* * * ') && c.text('* * * ') : a.text(strt.BODY.balance) && b.text(strt.BODY.past_proceed) && c.text(strt.BODY.total_proceed);
		tex = $(this).closest('header').find('h2 span').text();
		tex1 = $(this).closest('header').find('.in-header-body-span').text();
		tex2 = $(this).closest('header').find('.in-header-body-spa').text();
		sessionStorage.setItem("tex", tex);
		sessionStorage.setItem("tex1", tex1);
		sessionStorage.setItem("tex2", tex2);

	})

	parseFloat(sessionStorage.getItem("tex")).toString() !== "NaN" ? $('.in-header-bod span').text(sessionStorage.getItem("tex")) && $('.in-header-body-span').text(sessionStorage.getItem("tex1")) && $('.in-header-body-spa').text(sessionStorage.getItem("tex2")) && $('.in-header-bod h2 i').addClass('active') : sessionStorage.setItem("tex", tex) && sessionStorage.setItem("tex1", tex1) && sessionStorage.setItem("tex2", tex2) && $('.in-header-bod h2 i').removeClass('active');

})