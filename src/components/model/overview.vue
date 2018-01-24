<template>
  <el-form ref="form" :model="form" :label-position="labelPosition" label-width="250px" @submit.prevent="onSubmit"
           style="margin:20px;width:100%;min-width:600px;">
    <el-row>
      <el-col :offset="4" :span="12">
        <el-form-item label="总运行模型数量（包含实盘跟踪）:">
          <el-input v-model="form.totalmodelRun" readonly></el-input>
        </el-form-item>
        <el-form-item label="总保存模型数量:">
          <el-input v-model="form.totalModelSave" readonly></el-input>
        </el-form-item>
        <el-form-item label="实盘跟踪模型数量:">
          <el-input v-model="form.totalFirmTrackingModel" readonly></el-input>
        </el-form-item>
        <el-form-item label="当前最高年化收益率:">
          <el-input v-model="form.higherIncomeRate" readonly></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div id="chartLine" style="width:100%;min-height:400px;height:50%;"></div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  import {getRemoteReqTodo, getDays} from '../../api/api'
  import echarts from 'echarts'

  export default {
    mounted(){
      const that = this;
      let totalmodelRunList = [];
      let totalModelSaveList = [];
      let totalFirmTrackingModelList = [];
      let days = getDays();
      let modelObj = {};
      for (let i = 0; i < days.length; i++) {
        modelObj[days[i]] = {
          totalmodelRun: 0,
          totalModelSave: 0,
          totalFirmTrackingModel: 0
        };
      }
      new Promise(function (resolve, reject) {
        getRemoteReqTodo('/backstagemanagement/userlist', [], []).then(res => {

//          console.log(res);
          let data = res.data;


          data.users.forEach(user => {
//            总的运行模型数量
            that.form.totalmodelRun += Number(user.oneTime) + user.models.filter(function (model) {
                return model.track === 1;
              }).length;
//总的保存模型数量
            that.form.totalModelSave += user.models.length;
//          总的实盘跟踪模型数量
            that.form.totalFirmTrackingModel += user.models.filter(function (model) {
              return model.track === 1;
            }).length;
//          绘制折线图

//            初始化全为0

            user.models.forEach(function (model) {
              modelObj[new Date(model.creatTime).format('yyyy-MM-dd')].totalModelSave++;
              if (model.track === 1) {
                modelObj[new Date(model.creatTime).format('yyyy-MM-dd')].totalFirmTrackingModel++;
              }
            });


          });

//            console.log(modelObj);

          resolve(modelObj);
        });
      }).then(function (modelObj) {
        getRemoteReqTodo('/backstagemanagement/runtrend', [], []).then(res => {
          let runTrend = res.data.runTrend;
          for (let testTimes in runTrend) {
            modelObj[new Date(testTimes).format('yyyy-MM-dd')].totalmodelRun += runTrend[testTimes];
          }
          for (let i = 0; i < days.length; i++) {
            totalmodelRunList.push(modelObj[days[i]].totalmodelRun);
            totalModelSaveList.push(modelObj[days[i]].totalModelSave);
            totalFirmTrackingModelList.push(modelObj[days[i]].totalFirmTrackingModel);
          }
          that.drawLineChart(days, totalmodelRunList, totalModelSaveList, totalFirmTrackingModelList);
        })
      })


    },
    data() {
      return {
        labelPosition: "right",
        form: {
          totalmodelRun: 0,
          totalModelSave: 0,
          totalFirmTrackingModel: 0,
          higherIncomeRate: '暂无统计',
        }
      }
    },
    methods: {
      drawLineChart(date, totalmodelRunList, totalModelSaveList, totalFirmTrackingModelList) {
        this.chartLine = echarts.init(document.getElementById('chartLine'));
        this.chartLine.setOption({
          title: {
            text: '模型数据发展趋势'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['总运行模型数量', '总保存模型数量', '实盘跟踪模型数量']
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
            data: date
          },
          yAxis: {
            type: 'value'
          },
          dataZoom: [{
            start: 0,
            end: 100
          },
            {
              type: 'inside',
            }
          ],
          series: [
            {
              name: '总运行模型数量',
              type: 'line',
              data: totalmodelRunList
            },
            {
              name: '总保存模型数量',
              type: 'line',
              data: totalModelSaveList
            },
            {
              name: '实盘跟踪模型数量',
              type: 'line',
              data: totalFirmTrackingModelList
            },
          ]
        });
      },
    },
//	mounted: function () {
//	},
//    updated: function () {
//      this.drawLineChart()
//    }
  }

</script>

<style scoped>
  .el-input {
    width: 70%;
    min-width: 50px;
  }
</style>
