<template>
  <el-row type="flex" justify="center" style="width: 100%;height: 90%;overflow: auto">
    <el-col :span="24">
      <el-table height="800" :data="ruleTalk" border :default-sort="{prop: 'startTime', order: 'descending'}">
        <el-table-column type="index" align="center" width="60"></el-table-column>
        <el-table-column align="center" sortable prop="time" label="创建日期"></el-table-column>
        <el-table-column align="center" prop="modelStr" label="模型串" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column align="center" prop="intoMarket" label="入市指标" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column align="center" prop="outMarket" label="出市指标" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column align="center" prop="windCtrl" label="风控指标" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column align="center" prop="second" label="二次筛选指标" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column align="center" sortable prop="score" label="模型评分"></el-table-column>
        <el-table-column align="center" sortable prop="ability" label="日均选股数"></el-table-column>
        <el-table-column align="center" sortable prop="profit" label="年化收益率（复利）（%）"></el-table-column>
        <el-table-column align="center" sortable prop="drop" label="最大回撤（%）"></el-table-column>
        <el-table-column align="center" sortable prop="noneFate" label="空仓占比（%）"></el-table-column>
        <el-table-column align="center" sortable prop="win" label="胜率（%）"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
  import {postRemoteReqTodo, getRemoteReqTodo, getDays} from '../../api/api'
  import {
    CONTROLLER,
    resolveIndicator,
    indicatorToDes,
    classifyIndicator
  } from '../../api/model'
  export default{
    mounted(){
      this.getErrorModel();
    },
    data(){
      return {
        ruleTalk: []
      }
    },
    methods: {
      getErrorModel(){
        getRemoteReqTodo('/stock/font/getruleparliament', [], []).then(res => {
            if(res.data.status === 'SUCCESS'){
              let selectedIndexsTemp = [];
              let symbol = {
                andOrNotIntoMarketLeft: '',
                andOrNotIntoMarketRight: '',
                andOrNotOutMarketLeft: '',
                andOrNotOutMarketRight: '',
                andOrNotWindCtrlLeft: '',
                andOrNotWindCtrlRight: '',
              };
              let conCtrl = {};
              let ruleParliaments = res.data.ruleParliaments;
              let report = {};
              ruleParliaments.forEach(item => {
                report = JSON.parse(item.report.replace(/\'/g, '\"'));
                resolveIndicator(selectedIndexsTemp, item.modelPara, conCtrl, symbol);
                this.ruleTalk.push({
                  time:new Date(item.saveTime).format("yyyy-MM-dd hh:mm:ss"),
                  modelStr:item.modelPara,
                  intoMarket:indicatorToDes(classifyIndicator(selectedIndexsTemp, 'A', 'intoMarket'), symbol.andOrNotIntoMarketLeft, symbol.andOrNotIntoMarketRight),
                  outMarket: item.modelPara.indexOf('[SELL]') !== -1 ? indicatorToDes(classifyIndicator(selectedIndexsTemp, 'sell', 'outMarket'),
                    symbol.andOrNotOutMarketLeft, symbol.andOrNotOutMarketRight) : '无',
                  second: indicatorToDes(classifyIndicator(selectedIndexsTemp, 'B', 'second'), '', ''),
                  windCtrl: item.modelPara.indexOf('[DAN_CON]') !== -1 ? indicatorToDes(classifyIndicator(selectedIndexsTemp, 'C', 'windCtrl'),
                    symbol.andOrNotWindCtrlLeft, symbol.andOrNotWindCtrlRight) : '无',
                  score:item.score.toFixed(2),
                  profit:report['score'],
                  ability:report['select_stock_ability'].toFixed(2),
                  noneFate:report['none_fate'],
                  win:report['win'],
                  drop:report['drop'],
                });
              });
            }


//          let data = res.data;
//          data.backModelRuns.forEach((ele) => {
//            this.errorModelInfo.push({
//              startTime: new Date(ele.startTime).format("yyyy-MM-dd hh:mm:ss"),
//              nickName: ele.nickname,
//              status: ele.state,
//              errorInfo: ele.errorInfo
//            })
//          })
        });
      }
    }
  }
</script>
<style>

</style>
