<template>
  <el-row type="flex" justify="center" style="width: 100%;height: 90%;overflow: auto">
    <el-col :span="24">
      <el-table height="800" :data="errorModelInfo" border :default-sort = "{prop: 'startTime', order: 'descending'}">
        <el-table-column type="expand">
          <template scope="props">
            <el-form label-position="left" inline>
              <el-form-item label="错误信息：">
                <span>{{ props.row.errorInfo }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <!--:default-sort="{prop: 'date', order: 'descending'}" style="width: 100%">-->
        <el-table-column type="index" align="center" width="60"></el-table-column>
        <el-table-column align="center" sortable prop="startTime" label="创建日期"></el-table-column>
        <el-table-column align="center" sortable prop="nickName" label="昵称"></el-table-column>
        <el-table-column align="center" sortable prop="status" label="模型状态"></el-table-column>
        <el-table-column align="center" prop="errorInfo" label="错误信息" :show-overflow-tooltip="true"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<script>
  import {postRemoteReqTodo, getRemoteReqTodo, getDays} from '../../api/api'
  export default{
    mounted(){
      this.getErrorModel();
    },
    data(){
      return {
        errorModelInfo: []
      }
    },
    methods: {
      getErrorModel(){
        getRemoteReqTodo('/backstagemanagement/geterrormodels', [], []).then(res => {
          let data = res.data;
          data.backModelRuns.forEach((ele) => {
            this.errorModelInfo.push({
              startTime: new Date(ele.startTime).format("yyyy-MM-dd hh:mm:ss"),
              nickName: ele.nickname,
              status: ele.state,
              errorInfo: ele.errorInfo
            })
          })
        });
      }
    }
  }
</script>
<style>

</style>
