(function(){
	//	折状图
	var a = [1, 2.0, 3.0, 1.0, 2.3, 3.0, 4.0];
	$('#container').highcharts({
		title: {
			text: null
		},
		xAxis: {
			title: {
				text: null
			},
			labels: {
				style: {
					color: '#989898',

				}
			},
			minorTickWidth: 0,
			categories: [5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8]
		},
		yAxis: {
			allowDecimals: false,
			title: {
				text: 'Fruit'
			},
			visible: false
		},

		tooltip: {
			headerFormat: '<b>{series.name}</b><br />',
			pointFormat: '{point.y}.0%'
		},
		series: [{
			name: '圈子收益',
			data: a,
			pointStart: 0,
			color: '#FF6A00'
		}],

		//          backgroundColor:['#FF6A00'],
		chart: {
			showAxes: true,
			margin: [0, 0, 20, 0]

		},
		credits: {
			enabled: false //不显示LOGO 
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				allowPointSelect: true,
				marker: {
					fillColor: '#FFFFFF',
					lineWidth: 1,
					lineColor: null,
					states: {
						select: {
							fillColor: '#FF6A00',
							lineColor: null,

						}
					}
				}
			}
		},

	});
	//	折状图
})()
