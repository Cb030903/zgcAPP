window.onload = function() {
	setTimeout(function(){
	summer.callService(
					"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
					{
						'isShowTabbar': "YES",
						'tab': 5,
						'requestdata':{'txcode': '1900012','acc_kind':'CNY','start_page':'1','page_conut':'10'},
						"callback": accountdetails,
					}, //参数
					false //异步（true 同步）
				)
	},1000)
}
//账户详情
function accountdetails(data) {
			var retflag = data.result_data;
			var str = JSON.parse(retflag);
			var bodydata=str.BODY.UserInfoOut_list;
			if(bodydata != undefined && bodydata.length > 0) {
					var strall = '';
					
					for(var i = 0; i < bodydata.length; i++) {
						
							strall+='<li data-val="' + bodydata[i].deposit_money + '&' + bodydata[i].deposit_days + '&' + bodydata[i].deposit_date + '&' + bodydata[i].user_name + '">+'
								'<h3>存款金额</h3>+'
								'<div>+'
								'<h4 class="countnum">'+bodydata[i].deposit_money+'</h4>+'
								'<p>已存<span class="daynum">'+bodydata[i].deposit_days+'</span>天</p>+'
								'</div>+'
							    '</li>';
						/*alert(bodydata[i].user_name);
						alert(bodydata[i].deposit_date);
						alert(bodydata[i].deposit_money);
						alert(bodydata[i].deposit_days);*/
						
					}

					$(strall).appendTo('.countul');
				}

		}

//点击查看账户详情
$('.countul').on('click', 'li', function() {
	var detail = $(this).attr('data-val');
	summer.setStorage('detail', detail);
	window.location.href = "accountdetails.html";
})