<template>
  <!--<transition name="el-zoom-in-top">-->
  <el-form ref="form" :model="form" :label-position="labelPosition" label-width="150px"
           @submit.prevent="onSubmit"
           style="margin:20px;width:100%;min-width:600px;">
    <el-row style="margin-bottom:30px;margin-top:40px;">
      <el-col :span="4" :offset=4>
        <el-date-picker v-model="start" type="date" placeholder="选择开始日期"
                        :picker-options="pickerOptionsDate"></el-date-picker>
      </el-col>
      <el-col :span="4">
        <el-date-picker v-model="end" type="date" placeholder="选择结束日期"
                        :picker-options="pickerOptionsDate"></el-date-picker>
      </el-col>
      <el-col :span="3" :offset=1>
        <el-button type="success" v-on:click="fetchData" icon="setting" :loading="false">选定日期段</el-button>
      </el-col>

    </el-row>
    <el-row justify="space-around" style="margin-bottom:30px;margin-top:40px;">
      <el-col :span="5">
        <el-form-item label="当前注册用户总人数:">
          <el-input v-model="registered" readonly></el-input>
        </el-form-item>
        <!--<el-form-item label="当前周期活跃人数:">-->
        <!--<el-input v-model="form.numActived" readonly></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="当前周期消费人数:">
          <el-input v-model="consumed" readonly></el-input>
        </el-form-item>
        <el-form-item label="当前周期充值人数:">
          <el-input v-model="recharged" readonly></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div id="chartLine" style="width:100%;min-height:400px;height:50%;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div id="chartPie" style="width: 100%;height: 20rem"></div>
      </el-col>
    </el-row>
  </el-form>

  <!--</transition>-->
</template>
<script>
  import echarts from 'echarts'
  import {postRemoteReqTodo, getRemoteReqTodo, getDays} from '../../api/api'
  export default {
    mounted(){
      const that = this;
      getRemoteReqTodo('/backstagemanagement/userlist', [], []).then(res => {
        that.show = true;
        let data = res.data;
        that.users = data.users;
        let days = getDays();
        let dateUser = [];
        let title = ['单次回测0次', '单次1-5次（不含5次）', '单次回测5-10次（不含10次）', '单次回测10-100次（不含100次）', '单次回测100次以上'];
        let times = [
          {value: 0, name: '单次回测0次'},
          {value: 0, name: '单次1-5次（不含5次）'},
          {value: 0, name: '单次回测5-10次（不含10次）'},
          {value: 0, name: '单次回测10-100次（不含100次）'},
          {value: 0, name: '单次回测100次以上'},
        ];
        for (let i = 0; i < days.length; i++) {
          let userAmount = 0;
          let user;
          for (let j = 0; j < data.users.length; j++) {
            user = data.users[j];
            if (new Date(user.registerTime).format('yyyy-MM-dd') === days[i]) {
              userAmount += 1;
            }
          }
          dateUser.push(userAmount);
        }
//        获取数据用于单次回测次数占比的统计
        for (let i = 0; i < data.users.length; i++) {
          let oneTime = data.users[i].oneTime;
          if (oneTime === 0) {
            times[0].value++;
          } else if (oneTime >= 1 && oneTime < 5) {
            times[1].value++;
          } else if (oneTime >= 5 && oneTime < 10) {
            times[2].value++;
          } else if (oneTime >= 10 && oneTime < 100) {
            times[3].value++;
          } else {
            times[4].value++;
          }
        }
        this.drawLineChart(days, dateUser);
        this.getPieOption(title, times);
      })
    },
    data() {
      return {
        show: false,
        users: [],
        start: '0',
        end: '0',
        labelPosition: "right",
        form: {
          numRegistered: '10',
          numActived: '0',
          numToll: '13',
        },
        pickerOptionsDate: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }, {
            text: '一月前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', date);
            }
          }, {
            text: '半年前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 180);
              picker.$emit('pick', date);
            }
          }]
        },
      }
    },
    computed: {
      registered(){
        return this.users.length;
      },
      recharged(){
        return this.users.filter(function (user) {
          return user.recharges.length !== 0;
        }).length;
      },
      consumed(){
        return this.users.filter(function (user) {
          return user.consumes.length !== 0;
        }).length;
      }
    },
    methods: {
      fetchData() {
        return ""
      },
      drawLineChart(date, data) {
        this.chartLine = echarts.init(document.getElementById('chartLine'));
        this.chartLine.setOption({
          title: {
            text: '信息概览趋势'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['注册用户', '活跃人数', '付费人数', '充值人数']
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
              name: '注册用户',
              type: 'line',
              stack: '总量',
              data: data
            },
//            {
//              name: '活跃人数',
//              type: 'line',
//              stack: '总量',
//              data: data
//            },
//            {
//              name: '付费人数',
//              type: 'line',
//              stack: '总量',
//              data: data
//            },
//            {
//              name: '充值人数',
//              type: 'line',
//              stack: '总量',
//              data: data
//            }
          ]
        });
      },
      getPieOption(title, data){
        this.chartPie = echarts.init(document.getElementById('chartPie'));
        let option = {
          title: {
            text: '单次回测次数用户占比',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: title
          },
          series: [
            {
              name: '回测次数用户占比',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        this.chartPie.setOption(option);
      }
    },
  }

</script>

<style scoped>
  .el-input {
    width: 70%;
    min-width: 50px;
  }
</style>
