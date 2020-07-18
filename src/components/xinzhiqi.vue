<template>
  <div id="xinzhiqi">
    <table border="">
      <tr>
        <td><el-checkbox border :checked="xinzhiqiData.checked"></el-checkbox></td>
        <td v-if="xinzhiqiData.id!=-1"><el-button @click="save">保存</el-button></td>
        <td v-if="xinzhiqiData.id==-1"><el-button>新建</el-button></td>
      </tr>
      <tr>
        <td>名称</td>
        <td><input :value="xinzhiqiData.name" style="font-weight:bold;font-size:14px"></td>
      </tr>
      <tr>
        <td>攻击力:</td>
        <td><input :value="xinzhiqiData.attack"></td>
      </tr>
      <tr v-for="(v,k,i) in xinzhiqiData.properties" :key="k">
        <td><select :ref="'select'+i">
            <option v-for="(v0,k0) in x_properties" :key="k0" :selected="k==k0 ? true : false">{{k0}}</option>
          </select></td>
        <td><input :value="v" :ref="'input'+i"></td>
      </tr>
    </table>
  </div>
</template>

<script>
//import func from '../../vue-temp/vue-editor-bridge'
export default {
  name: 'xinzhiqi',
  computed: {
    propertiesNum: function() {
      return Object.keys(this.xinzhiqiData.properties).length
    }
  },
  methods: {
    save: function() {
      var ALLVALID = true
      var p = {}
      for (var i=0; i<this.propertiesNum; i++) {
        var label = this.$refs['select'+i.toString()][0].value
        var value = this.$refs["input"+i][0].value
        if (this.isValid(label, value)) {
          p[label]=value
          this.inputErrors[i]=false
        } else {
          this.inputErrors[i]=true
          ALLVALID=false
        }
      }
      if (ALLVALID == true) {
        this.xinzhiqiData.properties=p
        this.saveError=false
      } else {
        this.saveError = true
      }
    },
    isValid: function(label,input) {
      if (isNaN(input)) {
        return false
      } else {
        return true
      }
    }
  },
  data () {
    return {
      x_properties: {
        "基础攻击": 0,
        "暴击几率": 0,
        "连击几率": 0,
        "暴击伤害": 0,
        "连击伤害": 0,
        "伤害加成": 0,
        "防御忽视": 0,
        "必杀技伤害": 0,
        "--None--": 0
      },
      //数据取值范围
      /* inputRange: {
        "基础攻击":[0,100],
        "暴击几率":[0,1],
        "连击几率":[0,1],
        "暴击伤害":[0,100],
        "连击伤害":[0,100],
        "伤害加成":[0,100],
        "防御忽视":[0,1],
        "必杀技伤害":[0,100],
        "--None--": [0,0]
      },
    */
      inputErrors: [],
      saveError: Boolean
    }
  },
  props: {
    xinzhiqiData: {
    }
  },
}
</script>