import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

var globalData = {
  num: 0,
  damage: 0,
  characterData: {
    "基础攻击": 0,
    "暴击几率": 0,
    "暴击伤害": 0,
    "连击几率": 0,
    "连击伤害": 0,
    "怒气": 2000,
    "必杀技伤害": 0,
    "技能倍率": 0,
    "敌人防御": 375,
    "防御忽视": 0.12,
    "暴击伤害加成": 0,
    "连击伤害加成": 0,
    "伤害加成": 0,
    "连携": 1.50,
    "额外攻击力_固定": 142,
    "额外攻击力_百分比": 0.0
  },
  xinzhiqis: {
    "0": {
      name: "成长与归途",
      id: 0,
      attack: 0,
      checked: false,
      properties: {
        "基础攻击": 0.1,
        "暴击几率": 0.09,
        "连击几率": 0.09,
        "必杀技伤害": 0.18
      }
    }
  },
  mofaqi: {
    "基础攻击": 0,
    "暴击几率": 0,
    "暴击伤害": 0,
    "连击几率": 0,
    "连击伤害": 0,
    "伤害加成": 0,
  }
}

new Vue({
  data: globalData,
  render: h => h(App),
}).$mount('#app')
