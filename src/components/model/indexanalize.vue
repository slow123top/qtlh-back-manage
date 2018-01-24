<template>
	<div>
		<el-row style="margin-top:30px">
			<el-col :span="24">
				<div id="indexanaBar" style="width:100%;min-height:400px;height:50%;"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<div id="secondSelectBar" style="width:100%;min-height:400px;height:50%;"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<div id="danConBar" style="width:100%;min-height:400px;height:50%;"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<div id="loopbackPie" style="width:100%;min-height:400px;height:50%;"></div>
			</el-col>
			<el-col :span="12">
				<div id="loopbackBar" style="width:100%;min-height:400px;height:50%;"></div>
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
			form: {
				totalmodelRun: '532594',
				totalModelSave: '12325',
				totallFirmTrackingModel: '1455',
				higherIncomeRate: '120%',
			}
		}
	},
	methods: {
		drawIndexAnaBar() {
			this.chartIndexAnaBar = echarts.init(document.getElementById('indexanaBar'));
			this.chartIndexAnaBar.setOption({
				title: { text: '指标使用情况分析' },
				tooltip: {},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			});
		},
		drawSecondSelectBar() {
			this.chartSecondSelectBar = echarts.init(document.getElementById('secondSelectBar'));
			this.chartSecondSelectBar.setOption({
				title: { text: '二次筛选使用情况分析' },
				tooltip: {},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			});
		},
		drawDanConBar() {
			this.chartDanConBar = echarts.init(document.getElementById('danConBar'));
			this.chartDanConBar.setOption({
				title: { text: '风控指标使用情况分析' },
				tooltip: {},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			});
		},
		drawLoopbackPie() {
			this.chartPie = echarts.init(document.getElementById('loopbackPie'));
			this.chartPie.setOption({
				title: {
					text: '回测时间长度分布',
					subtext: '纯属虚构',
					x: 'center'
				},
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
				},
				series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: [
							{ value: 335, name: '直接访问' },
							{ value: 310, name: '邮件营销' },
							{ value: 234, name: '联盟广告' },
							{ value: 135, name: '视频广告' },
							{ value: 1548, name: '搜索引擎' }
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			});
		},
		drawLoopbackBar() {
			this.chartLoopbackBar = echarts.init(document.getElementById('loopbackBar'));
			this.chartLoopbackBar.setOption({
				title: { text: '回测包含时间分析' },
				tooltip: {},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			});
		},
		drawEcharts() {
			this.drawLoopbackBar()
			this.drawLoopbackPie()
			this.drawDanConBar()
			this.drawSecondSelectBar()
			this.drawIndexAnaBar()
		}
	},
	mounted: function () {
		this.drawEcharts()
	},
	updated: function () {
		this.drawEcharts()
	}
}

</script>

<style scoped>
.el-input {
	width: 70%;
	min-width: 50px;
}
</style>