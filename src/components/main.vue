<template>
  <Row type="flex" justify="center" style="height: 58rem">
    <i-col :span="spanLeft" style="background: #324157;height: 100%;">
      <el-menu theme="dark" class="el-menu-vertical-demo" :collapse="isCollapse" @select="selectTitle">
        <el-submenu index="1">
          <template slot="title">
            <Icon type="person"></Icon>
            <span slot="title">用户中心</span>
          </template>
          <el-menu-item index="user-list">用户列表</el-menu-item>
          <el-menu-item index="user-overview">用户概览</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <Icon type="social-yen"></Icon>
            <span slot="title">盈利</span>
          </template>
          <el-menu-item index="income-overview">收益概览</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <Icon type="model-s"></Icon>
            <span slot="title">模型</span>
          </template>
          <el-menu-item index="model-overview">模型概览</el-menu-item>
          <el-menu-item index="error-model">错误模型日志</el-menu-item>
          <!--<el-menu-item index="model-index">模型指标</el-menu-item>-->
          <!--<el-menu-item index="model-report">模型报告</el-menu-item>-->
        </el-submenu>
        <!--<el-submenu index="4">-->
          <!--<template slot="title">-->
            <!--<Icon type="model-s"></Icon>-->
            <!--<span slot="title">规则议会</span>-->
          <!--</template>-->
          <!--<el-menu-item index="rule-talk">规则议会模型</el-menu-item>-->
          <!--<el-menu-item index="error-rule-talk">错误信息</el-menu-item>-->
          <!--&lt;!&ndash;<el-menu-item index="model-index">模型指标</el-menu-item>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-menu-item index="model-report">模型报告</el-menu-item>&ndash;&gt;-->
        <!--</el-submenu>-->
      </el-menu>
    </i-col>
    <i-col :span="spanRight" style="height: 60rem;overflow: auto">
      <div class="layout-header">
        <i-button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </i-button>
      </div>
      <div class="layout-router">
        <router-view></router-view>
      </div>
    </i-col>
  </Row>
</template>
<script>
  export default {
    data () {
      return {
        spanLeft: 3,
        spanRight: 21,
        isCollapse: false
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 3 ? 14 : 1;
      },
      submenuSlot(){
        return this.spanLeft === 3 ? 'title' : '无';
      },
      activeName(){

      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 3) {
          this.isCollapse = true;
          this.spanLeft = 1;
          this.spanRight = 23;
        } else {
          this.isCollapse = false;
          this.spanLeft = 3;
          this.spanRight = 21;
        }
      },
      selectTitle(name){

        switch (name) {
          case 'user-list':
            this.$router.push('/userlist');
            break;
          case 'income-overview':
            this.$router.push('/incomeoverview');
            break;
          case 'user-overview':
            this.$router.push('/useroverview');
            break;
          case 'model-overview':
            this.$router.push('/modeloverview');
            break;
          case 'error-model':
            this.$router.push('/errormodel');
            break;
          case 'model-index':
            this.$router.push('/modelindexanalize');
            break;
          case 'model-report':
            this.$router.push('/modelreportanalize');
            break;
          case 'rule-talk':
            this.$router.push('/ruletalk');
            break;
          case 'error-rule-talk':
            this.$router.push('/errorruletalk');
            break;
          default:
            break;
        }
      },

    }
  }
</script>
<style scoped>
  .layout-router {
    padding: 1rem;
  }

  .layout-header {
    /*padding: 1rem;*/
    border-bottom: 1px solid;
  }

  .ivu-col {
    transition: width .3s ease-in-out;
  }

  .el-menu-vertical-demo {
    width: 100%;
    /*min-height: 400px;*/
  }
</style>
