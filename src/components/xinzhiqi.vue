<template>
  <div id="xinzhiqi">
    <br>
    <table>
      <tr>
        <td><el-checkbox v-model="xinzhiqiData.checked" v-if="xinzhiqiData.id!=-1" :disabled="xinzhiqiData.disabled" @change="checkChanged"></el-checkbox></td>
        <td v-if="xinzhiqiData.id!=-1"><el-button @click="save" type="success" plain>保存</el-button><span v-if="saveSuccess==false" style="color:red;font-size:12px">保存失败</span></td>
        <td v-if="xinzhiqiData.id==-1"><el-button @click="save" type="primary">新建</el-button></td>
      </tr>
      <tr>
        <td>名称</td>
        <td><input :value="xinzhiqiData.name" ref="name" style="font-weight:bold;font-size:14px"></td>
      </tr>
      <tr>
        <td>攻击力:</td>
        <td><input :value="xinzhiqiData.attack" ref="attack" type="number" step="0.001">
          <div v-if="attackValid==false"><span style="color:red;font-size:12px">{{errorMsg}}</span></div>
        </td>
      </tr>
      <tr v-for="(v,k,i) in xinzhiqiData.properties" :key="k">
        <td><select :ref="'select'+i">
            <option v-for="(v0,k0) in x_properties" :key="k0" :selected="k==k0 ? true : false">{{k0}}</option>
          </select></td>
        <td><input :value="v" :ref="'input'+i" type="number" step=0.001><div v-if="inputErrors[i]==true"><span style="color:red;font-size:12px">{{errorMsg}}</span></div></td>
      </tr>
      <tr>

      </tr>
      <tr><el-button v-if="xinzhiqiData.id!=-1" type="danger" icon="el-icon-delete" circle @click="remove"></el-button></tr>
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
      var x = {}
      var p = {}

      x.attack = this.$refs.attack.value

      for (var i=0; i<this.propertiesNum; i++) {
        var label = this.$refs['select'+i.toString()][0].value
        var value = this.$refs["input"+i][0].value
        p[label]=value
      }
      if (this.xinzhiqiData.id!=-1) {
        this.xinzhiqiData.name = this.$refs.name.value
        this.xinzhiqiData.attack=this.$refs.attack.value
        this.xinzhiqiData.properties=p
      } else {
        this.xinzhiqiData.name=this.$refs.name.value
        this.xinzhiqiData.id=this.currentID+1
        this.xinzhiqiData.attack=this.$refs.attack.value,
        this.xinzhiqiData.properties=p
        if (this.checkedXinzhiqiIDs.length==3) {
          this.xinzhiqiData.disabled=true
        }
        this.xinzhiqis.push(this.xinzhiqiData)
        this.currentID+=1
      }
    },
    remove: function() {
      for (var i in this.xinzhiqis) {
        if (this.xinzhiqis[i].id==this.xinzhiqiData.id) {
          this.xinzhiqis.splice(i,1)
        }
      }
    },
    checkChanged: function() {
      var x
      if (this.xinzhiqiData.disabled==false) {
        if (this.xinzhiqiData.checked==true) { //选中时
          this.checkedXinzhiqiIDs.push(this.xinzhiqiData.id)
          if (this.checkedXinzhiqiIDs.length==3) {
            for (x in this.xinzhiqis) {
              if (this.xinzhiqis[x].checked==false) {
                this.xinzhiqis[x].disabled=true
              }
            }
          }
        } else { //取消选中时
          this.checkedXinzhiqiIDs.splice(this.checkedXinzhiqiIDs.indexOf(this.xinzhiqiData.id),1)
          for (x in this.xinzhiqis) {
            this.xinzhiqis[x].disabled=false
          }
        }
      }
    }
  },
  data () {
    return {
      x_properties: {
        "攻击力_百分比": 0,
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
      errorMsg: "值必须为数字",
      xinzhiqis: this.$root.$data.xinzhiqis,
      currentID: this.$root.$data.currentID,
      checkedXinzhiqiIDs: this.$root.$data.checkedXinzhiqiIDs,
      percentageDatas: this.$root.$data.percentageDatas
    }
  },
  props: {
    xinzhiqiData: Object
  },
}
</script>

<style>
  .xinzhiqi {
    width: 20;
  }
</style>