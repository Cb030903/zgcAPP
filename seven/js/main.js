window.onload = function() {

	//页面跳转
if(sessionStorage.getItem("num") != null) {
		var sia = sessionStorage.getItem("num");
         var ind=$('.indexmi');
			
		    if(sia==0 ||sia==1){
         ind.eq(0).show().siblings().hide();
         $('.in-box').eq(sia).show().siblings().hide();
      	
      }else if(sia==2||sia==3){
        ind.eq(1).show().siblings().hide()

         $('.in-box-a').eq(sia-2).show().siblings().hide();
      	
      }
		
	
	} 

  


	//页面跳转
      setTimeout(function() {
                
         summer.callService(
            "IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
            {
               'isShowTabbar': "YES",
               'tab': 0,
               //                   'issigning': "1"//1是未登录     2登录未签约   3登录已签约    4签约账户为0
               "callback": iss,
            }, //参数
            false //异步（true 同步）
         )
      }, 500)






   //0 未登录  1 未签约 2已签约  3已签约账户为0
   function iss(data) {
      if(data.signingAndLogin != null) {
        var sia=data.signingAndLogin;
    var ind=$('.indexmi');
			
		    if(sia==0 ||sia==1){
         ind.eq(0).show().siblings().hide();
         $('.in-box').eq(sia).show().siblings().hide();
      	
      }else if(sia==2||sia==3){
        ind.eq(1).show().siblings().hide()

         $('.in-box-a').eq(sia-2).show().siblings().hide();
         
      	
      }
      
      }
     
       if(data.signingAndLogin ==0 && $('.in-header-wu').is(":hidden")) {
       
           
           sessionStorage.removeItem('bodydata')
           
       }
      sessionStorage.setItem("num", data.signingAndLogin)
      var retflag = data.result_data;

      if(retflag != undefined && retflag != null) {

         var str = JSON.parse(retflag)
         sessionStorage.setItem("str", JSON.stringify(str))
         if(str != null) {
             var a = $('.in-header-bod span');
             var b = $('.in-header-body-span');
             var c = $('.in-header-body-spa');
             !$('.in-header-bod h2 span').is('.active') ? a.text('* * * * *') && b.text('* * * ') && c.text('* * * ') : a.text(str.BODY.balance) && b.text(str.BODY.past_proceed) && c.text(str.BODY.total_proceed);
             
             
            $('.in-cen-left p').text(str.BODY.proceed_rate + '%')
            $('.in-hb-tite p').text('零钱：' + str.BODY.sof_bal + '元')
            $('.in-header-box p').text(str.BODY.home_word)
         }
      }
   if(!$('.indexmi').eq(2).is(":hidden")) {

              summer.callService(
                 "IuapExchangeNative.gotoNative", //原生服务（类名+方法名）
                 {
                    'isShowTabbar': "YES",
                    'tab': 5,
                    'requestdata': {
                       'txcode': '1900012',
                       'acc_kind': 'CNY',
                       'start_page': '1',
                       'page_conut': '10',
                       'branch_id': '90001'
                    },
                    "callback": accountdetails,
                 }, //参数
                 false //异步（true 同步）
              )
           }
       
   }
 
	
	//账户详情
	function accountdetails(data) {
		var retflag = data.result_data;
		if(retflag != undefined && retflag.length > 0) {
			var str = JSON.parse(retflag);
			var bodydata = str.BODY.UserInfoOut_list;
			if(bodydata != null && bodydata.length > 0) {
				$('.countul').empty();

				for(var i = 0; i < bodydata.length; i++)
					$('<li><h3>存款金额</h3><div><h4 class="countnum">' + bodydata[i].deposit_money + '</h4><p>已存<span class="daynum">' + bodydata[i].deposit_days + '</span>天</p></div></li>').appendTo('.countul');

			}
			sessionStorage.setItem('bodydata', JSON.stringify(bodydata))

		}

	}

};


