window.onload = function() {
		var num, num1, num2,num3;

		if(document.getElementById('index') != undefined) {

			setTimeout(function() {

				summer.callService(
					"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
					{
						'isShowTabbar': "YES",
						'tab': 0,
						//							'issigning': "1"//1是未登录     2登录未签约   3登录已签约    4签约账户为0
						"callback": iss,
					}, //参数
					false //异步（true 同步）
				)
			}, 500)
		}
	
				$('.indexmi').eq(summer.getStorage("num3")).show().siblings().hide()
		//0 未登录  1 未签约 2已签约  3已签约账户为0
		function iss(data) {
			var retflag = data.result_data;
			var str = JSON.parse(retflag)
			if(str!=null){				
			num = str.BODY.balance;
			num1 = str.BODY.past_proceed;
			num2 = str.BODY.total_proceed;
		summer.setStorage("num",num);
		summer.setStorage("num1",num1);
		summer.setStorage("num2",num2);
		summer.setStorage("hxcjsdiv1-1",str.BODY.proceed_rate);
		summer.setStorage("num3",data.signingAndLogin);

			$('.in-cen-left p').text(str.BODY.proceed_rate+'%')

			$('.in-header-box p').text(str.BODY.home_word)
			if(data.signingAndLogin == 0) {
				$('.indexmi').eq(data.signingAndLogin).show().siblings().hide()

			} else if(data.signingAndLogin == 1) {

				$('.indexmi').eq(data.signingAndLogin).show().siblings().hide()

			} else if(data.signingAndLogin == 2) {

				$('.indexmi').eq(data.signingAndLogin).show().siblings().hide()

				summer.callService(
					"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
					{
						'isShowTabbar': "YES",
						'tab': 5,
						'requestdata':{'txcode': '1900012','acc_kind':'CNY','start_page':'1','page_conut':'10','branch_id':'90001'},
						"callback": accountdetails,
					}, //参数
					false //异步（true 同步）
				)

			} else if(data.signingAndLogin == 3) {
				//				window.location.href = stm + 'htprocol.html';
				$('.indexmi').eq(data.signingAndLogin).show().siblings().hide()

			}
			}else{
				return 
			}
			
		}

//账户详情
function accountdetails(data) {
			var retflag = data.result_data;
			var str = JSON.parse(retflag);
			var bodydata=str.BODY.UserInfoOut_list;
			if(bodydata != undefined && bodydata.length > 0) {
					var strall = '';
					$('.countul li').remove();
					for(var i = 0; i < bodydata.length; i++) {
						
							strall+='<li data-val="' + bodydata[i].deposit_money + '&' + bodydata[i].deposit_days + '&' + bodydata[i].deposit_date + '&' + bodydata[i].user_name + '">'+
								'<h3>存款金额</h3>'+
								'<div>'+
								'<h4 class="countnum">'+bodydata[i].deposit_money+'</h4>'+
								'<p>已存<span class="daynum">'+bodydata[i].deposit_days+'</span>天</p>'+
								'</div>'+
							    '</li>';

						
					}

					$(strall).appendTo('.countul');
				}

		}
			$('.hxcjsdiv1-1 span').text(summer.getStorage("hxcjsdiv1-1"));
			//点击查看账户详情
$('.countul').on('click', 'li', function() {
	var detail = $(this).attr('data-val');
	summer.setStorage('detail', detail);
	window.location.href = "html/accountdetails.html";
})
	},



	$(function() {
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
		$('.in-header-box').click(function() {

			summer.callService(
				"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
				{
					'tab': 1
				}, //参数
				false //异步（true 同步）
			)
		})

		$('.in-bot-b').click(function() {
			var a = $('.number').val();
			if(a != '' && a >= 0 ) {
				summer.callService(
					"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
					{
						'transtype': a,
						'tab': 1,
						//'sign':{'member_acc': 'Y','cur_no':'Y','pass_wd':'Y','client_random':'Y','cif_no':'Y','verify_code':'Y','verify_no':'Y'},																															
						//'balan':{'sof_member_no': 'Y','acc_no':'Y','currency':'Y'}																															
					}, //参数
					false //异步（true 同步）
				)
			}

		})
		$('.in-cen-right').click(function() {
			//								window.location.href='html/yqy.html';
			summer.callService(
				"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
				{

					//							'tab':'1', //页面各种跳转的状态       1签约     2解约   3累计收益接口   4 5账户详情
					'transtype': "netWork",
					'must': {
						'cif_no': 'Y',
						'acc_no': 'Y',
						'acc_kind': 'Y',
						'start_page': 'Y',
						'page_conut': 'Y'
					},
					"callback": mt

				}, //参数
				false //异步（true 同步）
			)

		})
		//点击立即转入
		$('.transferbtn').click(function() {	
				summer.callService(
					"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
					{
						'tab': 6,
																																				
					}, //参数
					false //异步（true 同步）
				)
		})
		function mt(data) {
			var retflag = data.result_data;
			var str = JSON.parse(retflag)
			$('.in-cen-right').text(str.SYS_HEAD.RET_STATUS)

		}

		$('.in-tgin').click(function() {
			$('.in-bottom').show();
		})
		$('.in-bottom li').first().click(function() {
			$('.in-bottom').hide();
		})
		$('.in-bottom li,.in-tgi').last().click(function() {
			summer.callService(
				"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
				{

					'tab': 2

				}, //参数
				false //异步（true 同步）
			)
		})
       var tex=$('.in-header-bod span').text();
       parseFloat(tex).toString() !== "NaN" ?$('.in-header-bod h2 i').addClass('active'):$('.in-header-bod h2 i').removeClass('active')
		$('.in-header-bod h2 i').click(function() {
			var _this = $(this).is('.active');
				var a = $('.in-header-bod span');
			var b = $('.in-header-body-span');
			var c = $('.in-header-body-spa');
			_this ? $(this).removeClass('active')&&a.text('* * * * *')&&b.text('* * * ')&&c.text('* * * ') : $(this).addClass('active')&&a.text(summer.getStorage("num"))&&b.text(summer.getStorage("num1"))&&c.text(summer.getStorage("num2"));
		
		})
	})