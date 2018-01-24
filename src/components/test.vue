<template>
  <Row type="flex" justify="center" style="padding: 1rem;">
    <i-col span="24">
      <Menu mode="horizontal" :active-name="activeName" @on-select="select">
        <Submenu name="1">
          <template slot="title">
            入市指标组合

          </template>
          <Menu-item name="1-1">价格类指标</Menu-item>
          <Menu-item name="1-2">市值类指标</Menu-item>
          <Menu-item name="1-3">上市日期类指标</Menu-item>
          <Menu-item name="1-4">股票池筛选指标</Menu-item>
          <Menu-item name="1-5">交易量类指标</Menu-item>
          <Menu-item name="1-6">经典指标</Menu-item>
          <Menu-item name="1-7">我的模型入市指标组合</Menu-item>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            出市指标组合

          </template>
          <Menu-item name="2-1">我的模型入市指标组合</Menu-item>
        </Submenu>
        <Menu-item name="3">
          二次筛选指标

        </Menu-item>
        <Submenu name="4">
          <template slot="title">
            风控指标

          </template>
          <Menu-item name="4-1">我的模型风控指标组合</Menu-item>
        </Submenu>
      </Menu>
    </i-col>
    <i-col class="index-content" span="24" v-if="activeName==='1-1'">
      <div>asdsa</div>
      <div>asdsa</div>
      <div>asdsa</div>
      <div>asdsa</div>
      <div>asdsa</div>
      <div>asdsa</div>
      <div>asdsa</div>
      <div>asdsa</div>
    </i-col>
    <i-col span="24" v-if="activeName==='1-2'">
      sassssssssssssssssss

    </i-col>
  </Row>
</template>
<script>
  export default{
    data(){
      return {
        isCollapse: false,
        activeName: '1-1'
      }
    },
    methods: {
      select(name){
        this.activeName = name;
      }
    }
  }
</script>
<style scoped>
.index-content{
  height: 5rem;
  overflow: auto;
  border:1px solid;
  margin-top: 1rem;
}
</style>
