<template>
  <Row type="flex" justify="center" style="width: 100%">
    <i-col span="24">
      <el-form ref="form" :model="form" :label-position="labelPosition" label-width="180px"
               style="margin:20px;">

        <el-form-item label="当前总收入(RMB):">
          <el-input v-model="form.totalIncome" readonly></el-input>
        </el-form-item>
        <el-form-item label="当前总充值点数:">
          <el-input v-model="form.totalRechargePoint" readonly></el-input>
        </el-form-item>
        <el-form-item label="当前总消费数(点数):">
          <el-input v-model="form.totallConsumptionPoint" readonly></el-input>
        </el-form-item>
        <el-form-item label="当前总购卡消费数(点数):">
          <el-input v-model="form.totallCardPoint" readonly></el-input>
        </el-form-item>
      </el-form>
    </i-col>
    <i-col span="24">
      <div id="chartLine" style="min-height:400px;height:50%;"></div>
    </i-col>
  </Row>
</template>
<script>
  import echarts from 'echarts'
  import {getRemoteReqTodo} from '../../api/api'
  export default {
    mounted(){
      const that = this;
      getRemoteReqTodo('/backstagemanagement/sumrecharge', [], []).then(res => {
        let data = res.data;
        console.log(res);
        that.form.totalIncome = data.sumRecharge.toFixed(2);
//                that.form.numRegistered = data.users.length;
      });
      this.drawLineChart();
    },
    data() {
      return {
        labelPosition: "right",
        form: {
          totalIncome: '10',
          totalRechargePoint: '12',
          totallConsumptionPoint: '13',
          totallCardPoint: '5',
        }
      }
    },
    methods: {
      drawLineChart() {
        this.chartLine = echarts.init(document.getElementById('chartLine'));
        this.chartLine.setOption({
          title: {
            text: '盈利趋势'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['总收入', '总充值点数', '总消费数', '总购卡消费数']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '总收入',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '总充值点数',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '总消费数',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '总购卡消费数',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      },
    },
    updated: function () {
      this.drawLineChart()
    }
  }

</script>

<style scoped>
  .el-input {
    width: 70%;
    min-width: 50px;
  }
</style>
