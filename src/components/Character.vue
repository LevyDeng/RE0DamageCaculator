<template>
  <v-main>
    <v-row dense>
      <v-col xs="12" sm="6" mid="6" lg="6">
        <v-row>
          <v-subheader>角色基础数据:</v-subheader>
          <!-- 角色基础数据输入框 -->
          <v-col class="grey lighten-2" cols="11" dense >
            <v-row dense>
              <v-col cols="8">
                <v-text-field
                  label="名字" :value="characterDatas.characters[characterSelection.key].name.value"
                  @input="saveInput('name', $event)"
                  >
                </v-text-field>
              </v-col>
              <v-col v-for="(value,key) in numberInputs" 
              :key=key 
              cols="6">
              <!-- 输入框 -->
              <v-text-field 
                @change="saveInput(key, $event)"
                :label="value"
                :value="characterDatas.characters[characterSelection.key][key].value"
                :rules="numberRules"
                :hint="hints[key]"
                persistent-hint>
                <template v-slot:append>
                <v-tooltip right v-if="characterDatas.tips[key]">
                <template v-slot:activator="{ on }">
                  <v-icon
                    color="#90A4AE"
                    v-on="on"
                  >mdi-alert-circle
                  </v-icon>
                </template>
                <span>{{characterDatas.tips[key]}}</span>
                </v-tooltip>
                </template></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!-- 显示角色最终数据 -->
      <v-col xs="12" sm="6" mid="6" lg="4">
      <v-row>
        <v-subheader>角色最终数据</v-subheader>
        <v-col class="grey lighten-3" cols="11" dense>
          <v-row dense>
            <v-col cols="6" v-for="(v,k) in finalDatas" :key=k>
              <v-text-field readonly
              :value="k=='attack'?v.value:((v.value*100).toFixed(2).toString()+'%')"
              :label="v.label"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-checkbox v-model="diceEnabled"
              label="骰子特效"></v-checkbox>
            </v-col>
            <v-col>
              最终伤害:<h1 class="red--text text--lighten-1">{{finalDamage}}</h1>
            </v-col>
          </v-row>
        </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-card class="mx-auto" color="blue lighten-4">
        <v-card-title><div class="font-weight-black">属性权重:</div><div class="font-weight-light font-italic">(当前每增加一单位属性所提升的总伤害,仅供参考)</div></v-card-title>
        <v-sparkline
        :labels="sparklineValues[0]"
        :value="sparklineValues[1]"
        type="bar"
        autoLineWidth
        padding="8"
        :gradient="gradient"
        auto-draw>
        </v-sparkline>
      </v-card>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "character",
  data() {
    return {
      numberRules: this.rules.numberRules,
      calcInput: this.tools.calcInput,
      hints: {
      },
      diceEnabled: false,
      gradient: ['red', 'orange', 'yellow']
    }
  },
  computed: 
  {
    characterSelection: function() {
      return this.characterDatas.characterSelection
    },
    numberInputs: function() {
      return this.characterDatas.numberInputs
    },
    diceDamage: function() {
      if (this.diceEnabled==true) {
        return 1.3
      } else {
        return 1
      }
    },
    finalDatas: function() {
      var cID = this.characterDatas.characterSelection.key
      var finalKeys = {'crit_p':'暴击率', 'crit_d':'暴击伤害', 'combo_p':'连击率', 'combo_d':'连击伤害', 'damage':'伤害加成', 'armor_ignore':'防御忽视', 'skill_ub_pro':'必杀技伤害'}
      var finalDatas = {}
      //计算最终攻击力
      finalDatas['attack']={
        label: '攻击力',
        value: 0
      }
      var equipedHearchineIDs = this.characterDatas.characters[cID].equipedHearchines.value
      var attack_percentage = this.calcInput(this.characterDatas.characters[cID].attack_percentage.value)
      for (var i in equipedHearchineIDs) {
        finalDatas['attack'].value+=this.calcInput(this.$store.state.hearchineDatas.hearchines[equipedHearchineIDs[i]].attack.value)
        if (Object.keys(this.$store.state.hearchineDatas.hearchines[equipedHearchineIDs[i]].dynamicProperties).indexOf('attack_percentage')!=-1) {
          attack_percentage+=this.calcInput(this.$store.state.hearchineDatas.hearchines[equipedHearchineIDs[i]].dynamicProperties.attack_percentage.value)
        }
      }
      finalDatas['attack'].value += this.calcInput(this.characterDatas.characters[cID].attack_solid.value)
      finalDatas['attack'].value += this.calcInput(this.characterDatas.characters[cID].attack_base.value)*(1+attack_percentage)
      if ('key' in this.characterDatas.characters[cID].magichineSelection) {
        finalDatas['attack'].value += this.calcInput(this.characterDatas.characters[cID].magichines[this.characterDatas.characters[cID].magichineSelection.key].numberProperties.attack.value)
      }
      finalDatas['attack_percentage']={
        label: '攻击力加成(百分比)',
        value: attack_percentage
      }
      //计算其他属性
      for (var k in finalKeys) {
        var l = finalKeys[k]
        finalDatas[k]={
          label: l,
          value: this.calcInput(this.characterDatas.characters[cID][k].value)
        }
        //加上心之器数据
        for (i in equipedHearchineIDs) {
          for (var p in this.$store.state.hearchineDatas.hearchines[equipedHearchineIDs[i]].dynamicProperties) {
            if (p==k) {
              finalDatas[k].value += this.calcInput(this.$store.state.hearchineDatas.hearchines[equipedHearchineIDs[i]].dynamicProperties[k].value)
            }
          }
        }
        //加上魔法器数据
        if ('key' in this.characterDatas.characters[cID].magichineSelection) {
          if (k in this.characterDatas.characters[cID].magichines[this.characterDatas.characters[cID].magichineSelection.key].numberProperties) {
          
            finalDatas[k].value += this.calcInput(this.characterDatas.characters[cID].magichines[this.characterDatas.characters[cID].magichineSelection.key].numberProperties[k].value)
          }
        }
      }
      return finalDatas
    },
    finalDamage: function() {
      return this.calcDamage(this.finalDatas)
      //return (this.finalDatas.attack.value*(1+this.finalDatas.damage.value)*Math.min((this.calcInput(this.characterDatas.characters[this.characterSelection.key].anger.value)+1000),3000)/2000*(1+this.finalDatas.skill_ub_pro.value)*this.calcInput(this.characterDatas.characters[this.characterSelection.key].conti.value)*this.calcInput(this.characterDatas.characters[this.characterSelection.key].skill_ub.value)*(1+Math.max(this.finalDatas.crit_p.value,1)*(this.finalDatas.crit_d.value-1)+10*Math.max(this.finalDatas.combo_p.value,1)*this.finalDatas.combo_d.value)*375/(375+this.calcInput(this.characterDatas.characters[this.characterSelection.key].enemy_armor.value)*(1-Math.min(this.finalDatas.armor_ignore.value,1)))*this.diceDamage).toFixed(4)
    },
    sparklineValues: function() {
      var labels = [ '攻击力加成', '暴击率', '暴击伤害', '连击率', '连击伤害', '伤害加成']
      var keys = ['crit_p', 'crit_d', 'combo_p', 'combo_d', 'damage']
      var values = []
      var increases = [0.12, 0.2, 0.12, 0.02, 0.08]
      var finalDatasDup = JSON.parse(JSON.stringify(this.finalDatas))
      //攻击力
      finalDatasDup.attack.value += this.calcInput((this.characterDatas.characters[this.characterDatas.characterSelection.key].attack_base.value))*0.1
      values.push(this.calcDamage(finalDatasDup)-this.finalDamage)
      finalDatasDup.attack.value  -= this.calcInput((this.characterDatas.characters[this.characterDatas.characterSelection.key].attack_base.value))*0.1
      //其他
      for (var i in keys) {
        finalDatasDup[keys[i]].value += increases[i]
        values.push(this.calcDamage(finalDatasDup)-this.finalDamage)
        finalDatasDup[keys[i]].value -= increases[i]
      }

      return [labels, values]
    },
    ...mapState([
      'characterDatas'
    ])
  },
  methods: {
    saveInput: function(key, e) {
      var inputValue = e.toString()
      if (this.$store.state.valueTypeMap[key]=="number")
      {
      //显示计算后的数据
        var res = this.calcInput(inputValue)
        if (key in this.$store.state.percentageDatas) {
          res = Number((Number(res)*100).toString()).toFixed(2)+'%'
        }
        this.hints[key]=res.toString()
      }
      //保存数据到store
      //this.characterDatas.characters[this.$store.state.currentCharacterID][key].value=inputValue
      this.$store.commit("save",{
        module: "character",
        id:this.characterSelection.key,
        key: key,
        value: inputValue
      })
    },
    calcDamage: function(data) {
      return (data.attack.value*(1+data.damage.value)*Math.min((this.calcInput(this.characterDatas.characters[this.characterSelection.key].anger.value)+1000),3000)/2000*(1+data.skill_ub_pro.value)*this.calcInput(this.characterDatas.characters[this.characterSelection.key].conti.value)*this.calcInput(this.characterDatas.characters[this.characterSelection.key].skill_ub.value)*(1+Math.min(data.crit_p.value,1)*(data.crit_d.value-1)+10*Math.min(data.combo_p.value,1)*data.combo_d.value)*375/(375+this.calcInput(this.characterDatas.characters[this.characterSelection.key].enemy_armor.value)*(1-Math.min(data.armor_ignore.value,1)))*this.diceDamage).toFixed(4)
    }
  }
}
</script>