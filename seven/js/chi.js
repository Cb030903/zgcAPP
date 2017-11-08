(function() {
	var end, start, g, c = 1000,
		X, liw, maxl = 50000,
		miv;
	var awin = $(window).width() / 2;

	$('.main').css({
		'-webkit-transform': 'translateX(' + awin + 'px)'
	}).attr('value', awin);

	for(var i = 1; i <= 50; i++) {
		$('<li><span class="num">' + c * i + '</span></li>').appendTo('.main ul');
	}
	var awi = $('.main').find('li').width();

	$('.number').on('input porpertychange', function() {
		end = $(this).val();
		miv = $(this).val();
		miv = miv > maxl ? maxl : miv;
		end = end > maxl ? maxl : end;
		$(this).val(end)
		end = end / (c / awi)
		end == '' ? $('.in-bot-num').removeClass('action') && $('.in-bot-box').hide() && $('.in-bot-b').css('background', ' #c7d6f6') : $('.in-bot-num').addClass('action') && $('.in-bot-box').show().find('span').text(miv) && $('.in-bot-b').css('background', '#4F85F3');
		$(".main").css({
			'-webkit-transform': 'translateX(' + (awin - end) + 'px)'
		}).attr('value', awin - end)
	});
	var bwin = awi * 50;
	$('.main').width(bwin + 15)

	$('body').on('touchend,touchmove,touchstart', function(e) {
		e.preventDefault();
	})
	$('.ruler ul').on("touchstart", function(e) {
		var initial = $(this).parent(".main").attr('value');
		e.stopPropagation();
		startX = e.originalEvent.changedTouches[0].pageX - initial;
	});

	$('.ruler ul').on("touchmove", function(e) {

		moveX = e.originalEvent.changedTouches[0].pageX;
		X = moveX - startX;
		liw = -bwin + awin;

		$(this).parent(".main").css({
			'-webkit-transform': 'translateX(' + X + 'px)'
		})
		$('.in-bot-b').css('background', '#4F85F3')
		$('.in-bot-num').addClass('action');

		X = X < liw ? liw : X;

		val = Math.abs(X - awin) * (c / awi).toFixed(0);

		$(this).closest(".row").find('.number').val(Math.round(val / 100) * 100);
		$('.in-bot-box').show().find('span').text(Math.round(val / 100) * 100)
		e.preventDefault();
	});

	$('.ruler ul').on("touchend", function(e) {

		e.stopPropagation();

		moveEndX = e.originalEvent.changedTouches[0].pageX;

		X = moveEndX - startX;
		if(X >= awin) {

			$(this).parent(".main").css({
				'-webkit-transform': 'translateX(' + awin + 'px)'
			}).attr('value', awin)
			$('.in-bot-num').removeClass('action');
			$('.in-bot-box').hide();
			$('.in-bot-b').css('background', ' #c7d6f6');
			$(this).closest(".row").find('.number').val($('.number').attr('placeholder'));

		} else if(X <= liw) {

			$(this).parent(".main").css({
				'-webkit-transform': 'translateX(' + liw + 'px)'
			}).attr('value', liw)
			$(this).closest(".row").find('.number').val(maxl);

		} else {
			$(this).parent(".main").css({
				'-webkit-transform': 'translateX(' + X + 'px)'
			}).attr('value', X)
			$(this).closest(".row").find('.number').val(Math.round(val / 100) * 100);

		}

	});
})()