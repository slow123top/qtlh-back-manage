import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main'
//用户
import UserList from '../components/user/userlist.vue'
import IncomeOverview from '../components/income/overview.vue'
import UserOverview from '../components/user/overview.vue'
import ModelOverview from '../components/model/overview.vue'
import ModelIndexanalize from '../components/model/indexanalize.vue'
import ModelReportanalize from '../components/model/reportanalize.vue'
import ErrorModel from '../components/model/errormodel.vue'
//规则议会
import RuleTalk from '../components/ruletalk/ruletalk.vue'
import ErrorRuleTalk from '../components/ruletalk/errorRuleTalk.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'userlist',
          name: 'userlist',
          component: UserList
        },
        {
          path: 'incomeoverview',
          name: 'incomeoverview',
          component: IncomeOverview
        },
        {
          path: 'useroverview',
          name: 'useroverview',
          component: UserOverview
        },
        {
          path: 'modeloverview',
          name: 'modeloverview',
          component: ModelOverview
        },
        {
          path:'errormodel',
          name:'errormodel',
          component:ErrorModel
        },
        {
          path: 'modelindexanalize',
          name: 'modelindexanalize',
          component: ModelIndexanalize
        },
        {
          path: 'modelreportanalize',
          name: 'modelreportanalize',
          component: ModelReportanalize
        },
        {
          path:'ruletalk',
          name:'ruletalk',
          component:RuleTalk
        },
        {
          path:'errorruletalk',
          name:'errorruletalk',
          component:ErrorRuleTalk
        }
      ]

    }
  ]
})
