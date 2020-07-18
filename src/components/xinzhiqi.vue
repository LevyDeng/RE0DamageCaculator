<template>
  <div id="xinzhiqi">
    <table border="">
      <tr>
        <td><el-checkbox border :checked="xinzhiqiData.checked"></el-checkbox></td>
        <td v-if="xinzhiqiData.id!=-1"><el-button @click="save">保存</el-button><span v-if="saveSuccess==false" style="color:red;font-size:12px">保存失败</span></td>
        <td v-if="xinzhiqiData.id==-1"><el-button @click="save">新建</el-button></td>
      </tr>
      <tr>
        <td>名称</td>
        <td><input :value="xinzhiqiData.name" ref="name" style="font-weight:bold;font-size:14px"></td>
      </tr>
      <tr>
        <td>攻击力:</td>
        <td><input :value="xinzhiqiData.attack" ref="attack">
          <div v-if="attackValid==false"><span style="color:red;font-size:12px">{{errorMsg}}</span></div>
        </td>
      </tr>
      <tr v-for="(v,k,i) in xinzhiqiData.properties" :key="k">
        <td><select :ref="'select'+i">
            <option v-for="(v0,k0) in x_properties" :key="k0" :selected="k==k0 ? true : false">{{k0}}</option>
          </select></td>
        <td><input :value="v" :ref="'input'+i">
        <div v-if="inputErrors[i]==true"><span style="color:red;font-size:12px">{{errorMsg}}</span></div></td>
      </tr>
      <tr><el-button>删除</el-button></tr>
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
      //初始化错误信息
      this.attackValid=true
        if (isNaN(this.$refs.attack.value)) {
          this.attackValid=false
          ALLVALID=false
        }

      this.inputErrors=[]
      for (var i0=0;i0<this.propertiesNum;i0++) {
        this.inputErrors.push(false)
      }

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
        if (this.xinzhiqiData.id!=-1) {
          this.xinzhiqiData.name = this.$refs.name.value
          this.xinzhiqiData.attack=this.$refs.attack.value
          this.xinzhiqiData.properties=p
          this.saveSuccess=true
        } else {
          var newid = this.$root.$data.num+1
          this.$root.$data.xinzhiqis[newid]={
            id: newid,
            name: this.$refs.name.value,
            attack: this.$refs.attack.value,
            checked: false,
            properties: p
          }
          this.$root.$data.num += 1
        }
      } else {
          this.saveSuccess = false
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
      saveSuccess: true,
      attackValid: true,
      inputErrors: [],
      errorMsg: "值必须为数字"
    }
  },
  props: {
    xinzhiqiData: {
    }
  },
}
</script>