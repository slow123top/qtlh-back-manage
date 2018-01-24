<template>
	<div>
		<el-row style="margin-top:30px">
			<el-col :span="24">
				<div id="reportBar" style="width:100%;min-height:400px;height:50%;"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>

import echarts from 'echarts'

export default {
	data() {
		return {
			labelPosition: "right",
		}
	},
	methods: {
		drawReportBart() {
			this.chartReportBart = echarts.init(document.getElementById('reportBar'));
			this.chartReportBart.setOption({
				title: { text: '年化收益率分布' },
				tooltip: {},
				xAxis: {
					data: ["-10%~0%", "0%~10%", "10%~20%", "20%~30%", "30%~40%", "40%~50%"]
				},
				yAxis: {},
				series: [{
					name: '数量',
					type: 'bar',
					data: [500, 1000, 1200, 800, 500, 200]
				}]
			});
		},
	},
	mounted: function () {
		this.drawReportBart()
	},
	updated: function () {
		this.drawReportBart()
	}
}

</script>

<style scoped>
.el-input {
	width: 70%;
	min-width: 50px;
}
</style>