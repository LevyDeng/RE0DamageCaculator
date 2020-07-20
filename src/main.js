import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import router from "./router.js"

Vue.config.productionTip = false


var globalData = {
  currentID: 0,
  damage: 0,
  characterData: {
    "基础攻击力": 1582,
    "暴击几率": 0.2,
    "暴击伤害":  1.5,
    "连击几率": 0,
    "连击伤害": 0.15,
    "怒气": 2000,
    "必杀技伤害提升": 0,
    "必杀技倍率": 21.25,
    "敌人防御": 375,
    "防御忽视": 0.62,
    "暴击伤害加成": 0,
    "连击伤害加成": 0,
    "伤害加成": 0,
    "连携": 1.50,
    "攻击力": 142,
    "攻击力_百分比": 0.4
  },
  xinzhiqis: [
    {
      name: "从天而降的美好祝福",
      id: 0,
      attack: 366,
      checked: false,
      disabled: false,
      properties: {
        "攻击力_百分比": 0.12,
        "暴击几率": 0.18,
        "防御忽视": 0.15
      }
    }
  ],
  checkedXinzhiqiIDs: [],
  mofaqi: {
    "攻击力": 0,
    "暴击几率": 0,
    "暴击伤害": 0,
    "连击几率": 0,
    "连击伤害": 0,
    "伤害加成": 0,
  },
  newXinzhiqiModel: {
    name: "新建心之器",
    id: -1,
    attack: 0,
    checked: false,
    disabled: false,
    properties: {
      '基础攻击': 0,
      '暴击几率': 0,
      '连击几率': 0
    }
  }
}

new Vue({
  data: globalData,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
