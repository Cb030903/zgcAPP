(function() {

	setTimeout(function() {
		var end, start, g, c = 1000,
			X, liw, val, maxl = 50000,
			miv;
		var awin = $(window).width() / 2;

		for(var i = 1; i <= 50; i++) {
			$('<li><span class="num">' + c * i + '</span></li>').appendTo('.main ul');
		}
		$('.main').find('li').width(awin / 2)
		var awi = awin / 2;
		var bwin = awi * 50;
		var sval = sessionStorage.getItem('sval') ? sessionStorage.getItem('sval') : '';
		if(sval !== '') {
			$('.in-bot-num').addClass('action')
			$('.in-bot-b').css('background', '#4F85F3')
			$('.in-bot-box').show().find('span').text(sval)
			$('.number').val(sval)

		}

		sval = sval / (c / awi) //获取平均值 得到移动值

		$('.main').css({
			'-webkit-transform': 'translateX(' + (awin - sval) + 'px)'
		}).attr('value', awin - sval);

		$('.main ul').css('width', bwin)

		$('.number').on('input porpertychange', function() {
			end = $(this).val();
			miv = $(this).val();
			end = end.toString().substring(0) == '.' ? '' : end;
			end = end.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符  
			end = end.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的  
			end = end.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
			end = end.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数  
			if(end.indexOf(".") < 0 && end != "") { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
				end = parseFloat(end);
			}

			miv = end
			miv = miv > maxl ? maxl : miv;
			end = end > maxl ? maxl : end;
			$('.number').val(end)
			sessionStorage.setItem('sval', end)

			end === '' ? $('.in-bot-num').removeClass('action') && $('.in-bot-box').hide() && $('.in-bot-b').css('background', ' #c7d6f6') : $('.in-bot-num').addClass('action') && $('.in-bot-box').show().find('span').text(miv) && $('.in-bot-b').css('background', '#4F85F3');

			end = end / (c / awi) //获取平均值 得到移动值

			$(".main").css({
				'-webkit-transform': 'translateX(' + (awin - end) + 'px)'
			}).attr('value', awin - end)
		});

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
			if(X > awin || X <= -bwin) {
				return false
			}
			liw = -bwin + awin;

			$('.in-bot-b').css('background', '#4F85F3')
			$('.in-bot-num').addClass('action');

			X = X < liw ? liw : X;

			$(this).parent(".main").css({
				'-webkit-transform': 'translateX(' + X + 'px)'
			}).attr('value', X)

			val = Math.abs(X - awin) * (c / awi);

			$('.number').val(Math.round(val / 100) * 100);

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
				$('.number').val('');

			} else if(X <= liw) {

				$(this).parent(".main").css({
					'-webkit-transform': 'translateX(' + liw + 'px)'
				}).attr('value', liw)
				$('.number').val(maxl);
				$('.in-bot-box').show().find('span').text(maxl)

			} else {
				var vale = $(this).closest(".row").find('.number').val();
				sessionStorage.setItem('sval', vale)
				vale = vale / (c / awi) //获取平均值 得到移动值
				setTimeout(function() {

					$(this).parent(".main").css({

						'-webkit-transform': 'translateX(' + vale + 'px)'
					})
				}, 300);

				//			$(this).closest(".row").find('.number').val(Math.round(val / 100) * 100);

			}

		});
	}, 200);

})()