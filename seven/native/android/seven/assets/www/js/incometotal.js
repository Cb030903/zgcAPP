window.onload = function() {
	setTimeout(function(){
	summer.callService(
					"IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
					{

						'tab': 3,
						'requestdata':{'txcode': '1900011','acc_currency':'CNY','income_type':'1','page_index':'1','page_count':'10','branch_id':'90001'},
						"callback": incometotal,
					}, //参数
					false //异步（true 同步）
				)
	},500)
}

function incometotal(data) {
			var retflag = data.result_data;
			var str = JSON.parse(retflag);
			var bodydata=str.BODY.list;
			if(bodydata != undefined && bodydata.length > 0) {
					var strall = '';
					for(var i = 0; i < bodydata.length; i++) {
						strall += '<li class="clearfix"><span class="left">' + bodydata[i].his_date.substr(0,4)+'年'+bodydata[i].his_date.substr(4,2)+'月'+bodydata[i].his_date.substr(6,2)+'日' + '</span><span class="right">+' + bodydata[i].sof_proceed + '</span></li>'
					}

					$(strall).appendTo('.incomeul1');
				}else{
					$(".nullnum").css("display","block");
				}

		}