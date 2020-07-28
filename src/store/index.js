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
          equipedHearchines: {
            value: []
          },
          magichineSelection: {
            name: "骰子",
            key: '0'
          },
          magichineMaxID: {
            value: 0
          },
          magichines: {
            '0': {
              name: "骰子",
              numberProperties: {
                attack: {
                  label: "攻击力",
                  value: 300,
                  valueType: "number"
                },
                crit_p: {
                  label: "暴击率",
                  value: '23.5%'
                },
                crit_d: {
                  label: "暴击伤害",
                  value: '50%'
                },
                combo_p: {
                  label: "连击率",
                  value: '22%'
                },
                combo_d: {
                  label: "连击伤害",
                  value: '3%'
                },
                damage: {
                  label: "伤害加成",
                  value: '20%'
                }
              }
            }
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
          equipedHearchines: {
          value: []
          },
          magichineSelection: {

          },
          magichineMaxID: {
            value: -1
          },
          magichines: {

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
      hearchineModel: {
        disabled: {
          value: false
        },
        checked: {
          value: false
        },
        name: {
          label: "名称",
          value: "新建心之器",
          valueType: "string"
        },
        attack: {
          label: "攻击力",
          value: '0',
          valueType: "number"
        },
        dynamicProperties: {
          attack_percentage: {
            label: "基础攻击",
            value: '0',
            valueType: "number"
          },
          crit_p: {
            label: "暴击几率",
            value: '0',
            valueType: "number"
          },
          armor_ignore: {
            label: "暴击伤害",
            value: '0',
            valueType: "number"
          }
        }
      },
      currentMaxID: 0,
      hearchines: {
        '0': {
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
          dynamicProperties: {
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
        }
      }
    },
    magichineModel: {
      name: "新建魔法器",
      numberProperties: {
        attack: {
          label: "攻击力",
          value: 0,
          valueType: "number"
        },
        crit_p: {
          label: "暴击率",
          value: '0%'
        },
        crit_d: {
          label: "暴击伤害",
          value: '0%'
        },
        combo_p: {
          label: "连击率",
          value: '0%'
        },
        combo_d: {
          label: "连击伤害",
          value: '0%'
        },
        damage: {
          label: "伤害加成",
          value: '0%'
        }
      }
    }
  },
  mutations: {
    save: function(state, d) {
      state[d.module+"Datas"][d.module+"s"][d.id][d.key].value=d.value
    },
    removeHearchine: function(state, hID) {
      Vue.delete(state.hearchineDatas.hearchines, hID)
    },
    addHearchine: function(state) {
      var newH = JSON.parse(JSON.stringify(state.hearchineDatas.hearchineModel))
      if (state.characterDatas.characters[state.characterDatas.characterSelection.key].equipedHearchines.value.length==3) {
        newH.disabled.value=true
      }
      Vue.set(state.hearchineDatas.hearchines, (state.hearchineDatas.currentMaxID+1).toString() , newH)
      Vue.set(state.hearchineDatas, 'currentMaxID', state.hearchineDatas.currentMaxID+1)
    },
    saveHearchine: function(state, payload) {
      Vue.set(state.hearchineDatas.hearchines, payload.id, payload.data)
    },
    equipHearchine: function(state, hID) {
      state.characterDatas.characters[state.characterDatas.characterSelection.key].equipedHearchines.value.push(hID)
      //state.hearchineDatas.hearchines[hID].checked.value=true
    },
    unEquipHearchine: function(state, hID) {
      state.characterDatas.characters[state.characterDatas.characterSelection.key].equipedHearchines.value.splice(state.characterDatas.characters[state.characterDatas.characterSelection.key].equipedHearchines.value.indexOf(hID), 1)
      //state.hearchineDatas.hearchines[hID].checked.value=false
    },
    characterSelection: function(state, cs) {
      Vue.set(state.characterDatas,'characterSelection', cs)
    },
    removeCharacter: function(state, id) {
      Vue.delete(state.characterDatas.characters, id)
      var newID=Object.keys(state.characterDatas.characters).reverse()[0]
      //修改当前选择用户
      var cs = {
        state: state.characterDatas.characters[newID].name.value,
        key: newID
      }
      Vue.set(state.characterDatas, 'characterSelection', cs)
    },
    addCharacter: function(state) {
      //初始化新角色数据
      var cList = Object.keys(state.characterDatas.characters)
      var cTemp = JSON.parse(JSON.stringify(state.characterDatas.characters[cList[0]]))
      for (var key in cTemp) {
        cTemp[key].value = 0
      }
      cTemp.name.value = "新建用户"
      cTemp.equipedHearchines.value=[]
      cTemp.magichines={}
      cTemp.magichineSelection={}
      cTemp.magichineMaxID={
        value:-1
      }
      // 添加角色
      var newKey = (state.currentMaxID+1).toString()
      Vue.set(state.characterDatas.characters, newKey, cTemp
      )
      state.currentMaxID += 1
      //修改当前选中的用户
      var cs = {
        state: cTemp.name.value,
        key: newKey
      }
      Vue.set(state.characterDatas, 'characterSelection', cs)
    },
    magichineSelection: function(state, ms) {
      Vue.set(state.characterDatas.characters[state.characterDatas.characterSelection.key],'magichineSelection', ms)
    },
    addMagichine: function(state) {
      var cID = state.characterDatas.characterSelection.key
      var mTemp = JSON.parse(JSON.stringify(state.magichineModel))
      Vue.set(state.characterDatas.characters[cID].magichines,(state.characterDatas.characters[cID].magichineMaxID.value+1).toString(), mTemp)
      state.characterDatas.characters[cID].magichineMaxID.value += 1
      Vue.set(state.characterDatas.characters[cID],'magichineSelection', {
        name: "新建魔法器",
        key: state.characterDatas.characters[cID].magichineMaxID.value.toString()
      })
    },
    removeMagichine: function(state) {
      var cID = state.characterDatas.characterSelection.key
      var mID = state.characterDatas.characters[cID].magichineSelection.key
      Vue.delete(state.characterDatas.characters[cID].magichines, mID)
      var newID = Object.keys(state.characterDatas.characters[cID].magichines).reverse()[0]
      Vue.set(state.characterDatas.characters[cID], 'magichineSelection', {
        name: state.characterDatas.characters[cID].magichines[newID].name,
        key: newID
      })
    },
    saveMagichineName: function(state, name) {
      var cID = state.characterDatas.characterSelection.key
      var mID = state.characterDatas.characters[cID].magichineSelection.key
      Vue.set(state.characterDatas.characters[cID].magichines[mID], 'name', name)
    },
    saveMagichineData: function(state, payload) {
      var cID = state.characterDatas.characterSelection.key
      var mID = state.characterDatas.characters[cID].magichineSelection.key
      Vue.set(state.characterDatas.characters[cID].magichines[mID].numberProperties[payload.key], 'value', payload.value)
    }
  },
  actions: {
  },
  modules: {
  }
})
