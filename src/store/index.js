import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    valueTypeMap: {
      name: "string",
      attack: "number",
      attack_base: "number",
      attack_solid: "number",
      attack_percentage: "number",
      crit_p: "number",
      crit_d: "number",
      combo_p: "number",
      combo_d: "number",
      damage: "number",
      anger: "number",
      conti: "number",
      enemy_armor: "number",
      armor_ignore: "number",
      skill_ub: "number",
      skill_ub_pro: "number"
    },
    characterDatas: {
      currentMaxID: 0,
      tips: {
        attack_base: "角色的黑字攻击力",
        attack_solid: "额外的固定攻击力加成,如合辛魔法器,潜能等",
        attack_percentage: "额外的百分比攻击力加成,如微精灵,潜能等",
        skill_ub_pro: "指心之器以外的必杀技加成,比如微精灵"
      },
      characters: {
      "0": {
        name: {
          label: "名字",
          value: "惠惠"
        },
        attack_base: {
          label: "基础攻击力",
          value: 1582
        },
        attack_solid: {
          label: "攻击力加成(固定值)",
          value: 0
        },
        attack_percentage: {
          label: "攻击力加成(百分比)",
          value: '28.5%'
        },
        crit_p: {
          label: "暴击率",
          value: '30%'
        },
        crit_d: {
          label: "暴击伤害",
          value: '150%'
        },
        combo_p: {
          label: "连击率",
          value: 0
        },
        combo_d: {
          label: "连击伤害",
          value: 0
        },
        damage: {
          label: "伤害加成",
          value: '20%'
        },
        anger: {
          label: "怒气",
          value: 2000
        },
        conti: {
          label: "连携",
          value: '174%'
        },
        enemy_armor: {
          label: "敌人护甲",
          value: 375
        },
        armor_ignore: {
          label: "防御忽视",
          value: "62%"
        },
        skill_ub: {
          label: "必杀技倍率",
          value: "2125%"
        },
        skill_ub_pro: {
          label: "必杀技伤害加成",
          value: '18%'
        }
      }
      }
    },
    hearchineDatas: {
      currentMaxID: 0,
      hearchines: {
      "0":{
        name: {
          label: "名称",
          value: "从天而降的美好祝福",
          valueType: "string"
        },
        attack: {
          label: "攻击力",
          value: '304',
          valueType: "number"
        },
        attack_percentage: {
          label: "攻击力加成",
          value: '12%',
          valueType: "number"
        },
        crit_p: {
          label: "暴击几率",
          value: '18%',
          valueType: "number"
        }
      }
      }
    },
    magichineDatas: {

    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
