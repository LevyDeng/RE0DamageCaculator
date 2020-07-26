import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flags: {
      hearchinesFlag: 0
    },
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
    percentageDatas: {
      'attack_percentage':0,
      'crit_p':0,
      'crit_d':0,
      'combo_p':0,
      'combo_d':0,
      'damage':0,
      'conti':0,
      'armor_ignore':0,
      'skill_ub':0,
      'skill_ub_pro':0
    },
    currentCharacterID: '0',
    currentMaxID: 1,
    characterDatas: {
      characterSelection: {
        state: "惠惠",
        key: '0'
      },
      tips: {
        attack_base: "角色的黑字攻击力",
        attack_solid: "额外的固定攻击力加成,如合辛魔法器,潜能,队友buff等",
        attack_percentage: "额外的百分比攻击力加成,如微精灵,潜能等",
        skill_ub_pro: "指心之器以外的必杀技加成,比如微精灵"
      },
      numberInputs: {
        "attack_base": "基础攻击力","attack_solid": "攻击力加成(固定值)","attack_percentage": "攻击力加成(百分比)","crit_p": "暴击率","crit_d": "暴击伤害","combo_p": "连击率","combo_d": "连击伤害","damage": "伤害加成","anger": "怒气","conti": "连携","enemy_armor": "敌人护甲","armor_ignore": "防御忽视","skill_ub": "必杀技倍率","skill_ub_pro": "必杀技伤害"
      },
      characters: {
        '0': {
          equiped_hearchines: {
            value: []
          },
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
            label: "必杀技伤害",
            value: '18%'
          },
        },
        '1': {
          equiped_hearchines: {
          value: []
          },
          name: {
            label: "名字",
            value: "阿库娅"
          },
          attack_base: {
            label: "基础攻击力",
            value: 1479
          },
          attack_solid: {
            label: "攻击力加成(固定值)",
            value: 0
          },
          attack_percentage: {
            label: "攻击力加成(百分比)",
            value: '0%'
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
            value: '10%'
          },
          combo_d: {
            label: "连击伤害",
            value: '15%'
          },
          damage: {
            label: "伤害加成",
            value: '0%'
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
            value: "12%+25%"
          },
          skill_ub: {
            label: "必杀技倍率",
            value: "300%"
          },
          skill_ub_pro: {
            label: "必杀技伤害",
            value: '0%'
          }
        },
      }
    },
    hearchineDatas: {
      checkedHearchineIDs: [],
      hearchineProperties: [
        {
          label: '基础攻击',
          key: 'attack_percentage'
        },
        {
          label: '暴击几率',
          key: 'crit_p'
        },
        {
          label: '暴击伤害',
          key: 'crit_d'
        },
        {
          label: '连击几率',
          key: 'combo_p'
        },
        {
          label: '连击伤害',
          key: 'combo_d'
        },
        {
          label: '伤害加成',
          key: 'damage'
        },
        {
          label: '防御忽视',
          key: 'armor_ignore'
        },
        {
          label: '必杀技伤害',
          key: 'skill_ub_pro'
        },
        {
          label: '-----空-----',
          key: 'epmty'
        }
      ],
      currentMaxID: 0,
      hearchines: [
      {
        id: {
          value: 0
        },
        disabled: {
          value: false
        },
        checked: {
          value: false
        },
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
          label: "基础攻击",
          value: '12%',
          valueType: "number"
        },
        crit_p: {
          label: "暴击几率",
          value: '18%',
          valueType: "number"
        },
        armor_ignore: {
          label: "防御忽视",
          value: '15%',
          valueType: "number"
        }
      }
      ]
    },
    magichineDatas: {

    }
  },
  mutations: {
    save: function(state, d) {
      state[d.module+"Datas"][d.module+"s"][d.id][d.key].value=d.value
    },
    removeHearchine: function(state, hID) {
      state.hearchineDatas.hearchines.splice(hID,1)
    },
    changeCurrentCharacter: function(state, id) {
      Vue.set(state,'currentCharacterID', id)
    },
    characterSelection: function(state, cs) {
      Vue.set(state.characterDatas,'characterSelection', cs)
    },
    removeCharacter: function(state, id) {
      Vue.delete(state.characterDatas.characters, id)
      var newID=Object.keys(state.characterDatas.characters)[0]
      Vue.set(state, 'currentCharacterID',newID)
      //修改当前选择用户
      var cs = {
        state: state.characterDatas.characters[newID].name.value,
        key: newID
      }
      Vue.set(state.characterDatas, 'characterSelection', cs)
    },
    addCharacter: function(state, characterData) {
      // 添加角色
      var newKey = (state.currentMaxID+1).toString()
      Vue.set(state.characterDatas.characters, newKey, characterData
      )
      state.currentMaxID += 1
      //修改当前选中的用户
      var cs = {
        state: characterData.name.value,
        key: newKey
      }
      Vue.set(state.characterDatas, 'characterSelection', cs)
    }
  },
  actions: {
  },
  modules: {
  }
})
