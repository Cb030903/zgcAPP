$(function() {
	var xxx=0;
//	页面切换
// $('.in-a').click(function(){
// 	var pag=$(this).attr('datt');
//
//summer.openWin({
//					id:pag,
//					url:"html/"+pag+".html"
//				});
// 	
// })
// $('.um-back').click(function(){				 
//					summer.closeWin();
//				});
//	页面切换
	
	
	//	点击拷贝
	function copy() {
		const range = document.createRange();
		range.selectNode(document.getElementById('cor'));

		const selection = window.getSelection();
		if(selection.rangeCount > 0) selection.removeAllRanges();
		selection.addRange(range);
		document.execCommand('copy');
	}
	$('.in-crop').on('click', function() {
		copy();
		$('.in-up').show().stop(true, true);
		if($('.in-up').css('display') == 'block') {
			setTimeout(function() {
				$('.in-up').hide();

			}, 2400)
		}
	})
	//    document.getElementsByClassName('in-crop')[0].addEventListener('click', copy, false);
	//	点击拷贝

	$('.in-fot-back,.in-gr-for a').click(function() {
		sw();
		return false
	})
	$('.in-eng h3,.in-footer-fx').click(function() {
		sw()
	})
	if($('#container').length == 1) {
		var scv = '<script src="../js/highcharts.js" type="text/javascript" charset="utf-8"></script><script src="../js/zzt.js" type="text/javascript" charset="utf-8"></script>';
		$('body').append(scv)
	}
	//	if($('.in-del').length == 1) {
	//		$.getScript("../js/zsgc.js");
	//	}

	//function Person(name,age,job){
	//  this.name = name;
	//  this.age = age;
	//  this.job = job;
	//  this.getName = function () {
	//      return this.name;
	//  }
	//  
	//}
	//
	//var person1 = new Person('Jack', 19, 'SoftWare Engineer');
	//
	//var person2 = new Person('Liye', 23, 'Mechanical Engineer');
	//
	//

	$('.in-foot').click(function() {

		$('.in-boa ul').animate({
			height: 0
		}, 500, function() {
			$('.in-boa li').remove();

		})
		//$(this).fadeOut(1100);

	})

});

//全选

(function() {
	var i = 0;

	// function xx(k,l){
	// 	 alert(arguments[0]+arguments[1])关键字传参下标
	// }
	//	xx(9,44)
	$('.in-sp li').click(function() {
		var a = $(this).find('label');
		!a.is('.active') ? a.addClass('active') && i++ : a.removeClass('active') && i--;

		if(i != $('.in-sp li').length) {

			$('.in-footer-sp figure').find('label').removeClass('active')

		}
	})

	$('.in-footer-sp figure').click(function() {
		var a = $(this).find('label');
		var b = $('.in-sp');
		if(!a.is('.active')) {
			a.addClass('active');
			b.find('label').addClass('active');
			i = b.find('.active').length;
		} else {
			a.removeClass('active');
			b.find('label').removeClass('active');
			i = 0;
		}
	})

	function enj() {
		if($('.in-sp').find('label').is('.active')) {
			sw();

		}
	}
	$('.in-footer-sp-a').click(function() {
		enj()
		$('.in-bottom-dele p').text('确定审批拒绝？');
		$('.in-bottom-dele span').text('您将对选中的' + i + '条申请，审批拒绝');

	})
	$('.in-footer-sp-b').click(function() {
		enj()

		$('.in-bottom-dele p').text('确定审批通过？');
		$('.in-bottom-dele span').text('您将对选中的' + i + '条申请，审批通过');

	})
})();

//全选
function sw() {
	var a = $('.in-bottom');
	$(a).is(':hidden') ? 　$(a).show() : $(a).hide();

}

function swx() {
	var a = $('.in-footer-btn');
	$(a).is(':hidden') ? 　$(a).show() : $(a).hide();

}
(function() {

	var a,
		b,
		c;
	b = $('.in-header-bod h2');

	$('.in-header-bod h2').click(function() {

		b.find('i').toggleClass('active');
		b.find('i').is('.active') ? b.find('span').text('********') : b.find('span').text('30,622.26');
		a = b.find('span').text();
		localStorage.setItem('mon', a);

		//		localStorage.removeItem('pagecount')

	})
	a = b.find('span').text();
	c = localStorage.getItem('mon');
	//	var re = /^[0-9]+.?[0-9]*$/;判断是否为数字
	//如果是一个空串或是一个空格，而isNaN是做为数字0进行处理的，而parseInt与parseFloat是返回一个错误消息，这个isNaN检查不严密而导致的。
	//parseFloat(inputData).toString() == "NaN"
	c ? parseFloat(c).toString() !== "NaN" ? b.find('i').removeClass('active') : b.find('i').addClass('active') && b.find('span').text(c) : localStorage.setItem('mon', a);
})();
//成员删除

(function() {

	var i = 0,
		a = 0,
		g = 0,
		b,
		f = '';

	$('.in-add li').click(function() {

		$('.in-delet').addClass('in-dele');

		if($(this).is('.in-add-a')) {
			i--;
			$(this).removeClass('in-add-a');
			g = $(this).find('img').attr('num');
			sele();
			$('.in-num').text('删除(' + i + ')')

			setTimeout(function() {

				if(i == 0) {
					$('.in-delet').removeClass('in-dele');

					$('.in-num').text('')
					$('.in-delete-text').text('请选择删除对象');
				}

			}, 10)

		} else {
			a++;
			i++;
			$(this).addClass('in-add-a');
			$(this).find('img').attr('num', a).clone().appendTo('.in-delete-box');

		}

		$('.in-delete-text').text('删除对象');
		$('.in-num').text('删除(' + i + ')')

	})

	function sele() {
		$('.in-delete-box img').each(function(e) {
			b = $('.in-delete-box img').eq(e).attr('num');
			if(b == g) {
				$(this).attr('num', a).remove();

			}

		})
	}

	$('.in-del').click(function() {

		$('.in-add-a').find('figcaption').each(function(e) {

			if(e <= 3) {

				var c = $('.in-add-a').eq(e).find('figcaption').text();

				f += '<span>' + c + '、</span>';

			} else {
				return
			}

		});

		i <= 4 ? $('.in-bottom-dele p').html('确定移除' + f + i + '位成员吗？') : $('.in-bottom-dele p').html('确定移除' + f + '等' + i + '位成员吗？');

		f = '';

		i == 1 ? $('.in-bottom-dele').css('height', '3.45rem') : $('.in-bottom-dele').css('height', '3.988rem');

		if($('.in-add li').is('.in-add-a')) {
			sw()
		}

	})

	$('.in-bottom-dele ul li, .in-bottom-back-btn li').first().click(function() {

		sw();
	})

	$('.in-bottom-dele ul li').last().click(function() {
		if($('.in-add li').is('.in-add-a')) {
			$('.in-delete-box img').remove();
			$('.in-add-a').remove();
			$('.in-delet').removeClass('in-dele');
			$('.in-delete-text').text('请选择删除对象');
			$('.in-bottom-dele p').text('');
			$('.in-num').text('')

		}
		sw()

		i = 0;

	})

})();
//成员删除
//num
(function() {
	var a = 0,
		b = 10,
		c, d;

	function num() {

		if(a <= b) {
			a++
		} else {
			window.clearTimeout(c);

			$('.in-fxx span').each(function(e) {
				d = $(this).attr('nuc');
				$('.in-fxx span').eq(e).text(d)
			})
			return

		}
		$('.in-fxx span').text(a * 0.01 + '%')
		c = window.setTimeout(num, 80)
	}
	$('.in-fxx').length == 1 ? num() : console.log('null');

})();
//num

(function($, doc) {
	$.plusReady(function() {
		//plus.screen.lockOrientation("portrait-primary");竖屏
		//				plus.screen.lockOrientation("landscape-primary");横屏
		var settings = app.getSettings();
		//				var regButton = doc.getElementById('reg');
		var boxrig = doc.getElementsByClassName('in-a');
		for(var i = 0; i < boxrig.length; i++) {
			boxrig[i].addEventListener('tap', function(event) {
				var bb = this.getAttribute('datt');

				$.openWindow({
					url: bb,
					id: bb,
					preload: true,
					show: {
						aniShow: 'pop-in'
					},
					styles: {
						popGesture: 'hide'
					},
					waiting: {
						autoShow: false
					}
				});
				return false
			}, false);
		}
	});

}(mui, document));

(function($, owner) {

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	}

}(mui, window.app = {}));