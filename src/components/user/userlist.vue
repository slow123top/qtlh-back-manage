<template>
  <el-row type="flex" justify="center" style="width: 100%;height: 90%;overflow: auto">
    <el-col :span="24">
      <el-table height="800" :data="tableData" border :row-class-name="tableRowClassName"
                :default-sort="{prop: 'date', order: 'descending'}" style="width: 100%">
        <el-table-column type="expand">
          <template scope="props">
            <el-form label-position="left" inline>
              <el-form-item label="初级智能回测次数：">
                <span>{{ props.row.sumGenetic0RunTime }}</span>
              </el-form-item>
              <el-form-item label="中级智能回测次数：">
                <span>{{ props.row.sumGenetic1RunTime }}</span>
              </el-form-item>
              <el-form-item label="高级智能回测次数：">
                <span>{{ props.row.sumGenetic2RunTime }}</span>
              </el-form-item>
              <el-form-item label="今日初级智能回测次数：">
                <span>{{ props.row.todayGenetic0RunTime }}</span>
              </el-form-item>
              <el-form-item label="今日中级智能回测次数：">
                <span>{{ props.row.todayGenetic1RunTime }}</span>
              </el-form-item>
              <el-form-item label="今日高级智能回测次数：">
                <span>{{ props.row.todayGenetic2RunTime }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column type="index" align="center" width="60"></el-table-column>
        <el-table-column align="center" sortable prop="date" label="注册日期" width="180"></el-table-column>
        <el-table-column align="center" prop="name" label="用户昵称" width="180"></el-table-column>
        <el-table-column align="center" prop="phone" label="手机"></el-table-column>
        <el-table-column align="center" prop="email" label="邮箱"></el-table-column>
        <el-table-column align="center" sortable prop="recharge" label="充值点数"></el-table-column>
        <el-table-column align="center" prop="card" label="回测卡"></el-table-column>
        <el-table-column align="center" sortable prop="points" label="剩余点数"></el-table-column>
        <el-table-column align="center" sortable prop="times" label="单次回测次数"></el-table-column>
        <el-table-column align="center" sortable prop="intelligentTimes" label="智能回测次数"></el-table-column>
        <el-table-column align="center" sortable prop="todayIntelligentTimes" label="今日智能回测次数"></el-table-column>
        <el-table-column align="center" sortable prop="model" label="保存模型数"></el-table-column>
        <el-table-column align="center" sortable prop="track" label="实盘跟踪模型数"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
  import {getRemoteReqTodo} from '../../api/api'
  export default{
    mounted(){
      const that = this;

      let cards = ['单次回测五年卡', '单次回测十年卡'];
//          统计单次回测次数
      function sum(para) {
        let a = 0;
        para.forEach(item => {
          a += item.amount
        });
        return Number(a.toFixed(2));
      }

      getRemoteReqTodo('/backstagemanagement/userlist', [], []).then(res => {
        console.log(res);
        let data = res.data;
//                let sum = 0;
        data.users.forEach(item => {
          that.tableData.push({
            date: new Date(item.registerTime).format("yyyy-MM-dd hh:mm:ss"),
            name: item.nickname,
            phone: item.phone,
            email: item.email,
            recharge: sum(item.recharges),
            card: item.cardBuys.length === 0 ? '' : cards[item.cardBuys[0].cardNumber - 1],
            points: item.points,
            times: Number(item.oneTime),
            model: item.models.length,
            track: item.models.filter(function (model) {
              return model.track === 1;
            }).length,
            sumGenetic0RunTime: item.sumGenetic0RunTime,
            sumGenetic1RunTime: item.sumGenetic1RunTime,
            sumGenetic2RunTime: item.sumGenetic2RunTime,
            todayGenetic0RunTime: item.todayGenetic0RunTime,
            todayGenetic1RunTime: item.todayGenetic1RunTime,
            todayGenetic2RunTime: item.todayGenetic2RunTime,
            intelligentTimes: item.sumGenetic0RunTime + item.sumGenetic1RunTime + item.sumGenetic2RunTime,
            todayIntelligentTimes: item.todayGenetic0RunTime + item.todayGenetic1RunTime + item.todayGenetic2RunTime
//                        recharge:
          })
        });

      })
    },
    data() {
      return {
        tableData: []
      }
    },
    computed: {},
    methods: {
      tableRowClassName(row, index){
        if (row['times'] === 0) {
          return 'info-row'
        }
        return '';
      }
    }
  }
</script>
<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
