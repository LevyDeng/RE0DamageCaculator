import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

var globalData = {
  num: 0,
  characterData: {
    "基础攻击": 0,
    "暴击几率": 0,
    "连击几率": 0,
    "暴击伤害": 0,
    "连击伤害": 0,
    "伤害加成": 0,
    "防御忽视": 0,
    "必杀技伤害": 0
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
  }
}

new Vue({
  data: globalData,
  render: h => h(App),
}).$mount('#app')
