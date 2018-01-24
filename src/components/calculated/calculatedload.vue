<template>
	<div>
		<el-row>
		</el-row>
		<el-row>
			<el-col>
				<div id="chartColumn" style="width:100%;min-height:400px;height:50%;"></div>
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
		onSubmit() {
			console.log('submit!');
		},
		drawBarChart() {
			this.chartColumn = echarts.init(document.getElementById('chartColumn'));
			this.chartColumn.setOption({
				title: { text: '计算端负载' },
				tooltip: {
					trigger: 'axis',
					axisPointer: {            // 坐标轴指示器，坐标轴触发有效
						type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				xAxis: {
					data: ["127.0.0.1:8001", "127.0.0.1:8002", "127.0.0.1:8003"]
				},
				yAxis: {},
				series: [{
					name: '占用量',
					type: 'bar',
					stack: 'one',
					data: [5, 4, 3]
				},
				{
					name: '总量',
					type: 'bar',
					stack: 'one',
					data: [7, 7, 7]
				}
				]
			});
		},
	},
	mounted: function () {
		this.drawBarChart()
	},
	updated: function () {
		this.drawBarChart()
	}
}

</script>

<style scoped>
.el-input {
	width: 70%;
	min-width: 180px;
}

.el-col {
	border-radius: 4px;
}

.el-row {
	margin-bottom: 130px;
}

.el-select {
	width: 50%;
	min-width: 100px;
}
</style>