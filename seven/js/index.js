window.onload = function() {

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
			}, 200)
		}

		//1 未登录  2 未签约 3已签约  4已签约账户为0
		function iss(data) {

			var stm = $('#index2').length == 1 || $('#index3').length == 1 || $('#index4').length == 1 ? '' : 'html/';
			if(data.signingAndLogin == 1 && $('#index1').length != 1) {
//				window.location.href = '../index.html';		
				summer.openWin({
    id:data.signingAndLogin,
    url:"../index.html",
    "addBackListener":"true"
});
			} else if(data.signingAndLogin == 2 && $('#index2').length != 1) {
//				window.location.href = stm + 'wdl.html';
								summer.openWin({
    id:data.signingAndLogin,
    url:stm + 'wdl.html',
    "addBackListener":"true"
});
				
				
			} else if(data.signingAndLogin == 3 && $('#index3').length != 1) {
//				window.location.href = stm + 'yqy.html';
								summer.openWin({
    id:data.signingAndLogin,
    url:stm + 'yqy.html',
    "addBackListener":"true"
});
			} else if(data.signingAndLogin == 4 && $('#index4').length != 1) {
//				window.location.href = stm + 'htprocol.html';
								summer.openWin({
    id:data.signingAndLogin,
    url:stm + 'htprocol.html',
    "addBackListener":"true"
});

			}
		}
		
		//在当前index页面中去打开main页面，则需要在main页面中定义keyBack方法

//在main页面中定义全局的keyBack函数
function keyBack(){
    summer.closeWin();
}

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
			if(a != '' && a != 0) {
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
					'isShowTabbar': "NO",
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

		function mt(data) {
			var retflag = data.result_data;
			var str = JSON.parse(retflag)
			$('.in-cen-right').text(str.SYS_HEAD.RET_STATUS)

		}

		$('.in-hb-tite span').click(function() {
			$('.in-bottom').show();
		})
		$('.in-bottom li').first().click(function() {
			$('.in-bottom').hide();
		})
		$('.in-bottom li').last().click(function() {
            		summer.callService(
					"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
					{

						'tab': 1
																																
					}, //参数
					false //异步（true 同步）
				)
		})
		
		$('.in-header-bod h2 i').click(function(){
			$(this).is('.active')?$(this).removeClass('active')&&$('.in-header-bod span').text('* * * * *')&&$('.in-header-body-span').text('* * * * *')&&$('.in-header-body-spa').text('* * * * *'):$(this).addClass('active')&&$('.in-header-bod span').text(345345345)&&$('.in-header-body-span').text(345345345)&&$('.in-header-body-spa').text(345345345);
			
		})
	})