	$(function() {
			
			$('.hxcjsdiv1-1 span').text(JSON.parse(sessionStorage.getItem("str")).BODY.proceed_rate);

//			if(parseFloat(sessionStorage.getItem("tex")).toString() !== "NaN") {
//		$('.in-header-bod h2 i').addClass('active')
//		$('.in-header-bod span').text(sessionStorage.getItem("tex"))
//		$('.in-header-body-span').text(sessionStorage.getItem("tex1"))
//		$('.in-header-body-spa').text(sessionStorage.getItem("tex2"))
//	} else {
//		$('.in-header-bod h2 i').removeClass('active')
//		sessionStorage.setItem("tex", tex)
//		sessionStorage.setItem("tex1", tex1)
//		sessionStorage.setItem("tex2", tex2);
//
//	}
		})