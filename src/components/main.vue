<template>
  <div>
      <el-header><h1>简易RE0必杀技伤害计算器</h1></el-header>
      <el-main><br></el-main>
    <el-container>
      <el-header>角色基础数据</el-header>
      <el-main>
        <table>
          <tr v-for="(v,k) in characterData" :key="k">
            <td>{{k+':'}}</td>
            <td><el-input v-model="characterData[k]" type="number" step=0.001 @mousewheel.native.prevent @DOMMouseScroll.native.prevent></el-input></td>
          </tr>
          <tr>
            <td>最终伤害:</td>
            <td> <span style="color:red;font-weight:bold;font-size:36px">{{damage}}</span></td>
          </tr>
        </table>
      </el-main>
      <el-header>心之器</el-header>
      <el-main>
        <el-row :gutter="10">
          <el-col></el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" v-for="(x,i) in xinzhiqis" :key="i">
            <xinzhiqi :xinzhiqiData="x"></xinzhiqi>
          </el-col>
          <el-col :span="24">
            <xinzhiqi :xinzhiqiData="newXinzhiqiModel"></xinzhiqi>
          </el-col>
        </el-row>
      </el-main>
      <el-main><el-button type="danger" @click="uncheckAll">全部取消勾选</el-button></el-main>
      <el-header>魔法器</el-header>
      <el-main>
        
        <table>
          <tr v-for="(v,k) in mofaqi" :key="k">
            <td>{{k+':'}}</td>
            <td><el-input v-model="mofaqi[k]" type="number" step="0.001" @mousewheel.native.prevent @DOMMouseScroll.native.prevent></el-input></td>
          </tr>
        </table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import xinzhiqi from './xinzhiqi.vue'

export default {
  name: 'Main',
  components: {
    xinzhiqi
  },
  computed: {
    damage: function() {
      var finalData = JSON.parse(JSON.stringify(this.characterData))
      for (var key in finalData) {
        finalData[key] = Number(finalData[key])
      }
      finalData["攻击力"]=0
      for (key in finalData) {
        //加上心之器数据
        for (var id in this.checkedXinzhiqiIDs) {
          for (var x in this.xinzhiqis) {
            if (x.id==id) {
              
              if (key in x.properties){
                finalData[key] += Number(x.properties[key])
              }
            }
          }
        }
        //加上魔法器数据
        if (key in this.mofaqi) {
          finalData[key] += Number(this.mofaqi[key])
        }
      }
      return finalData
    },
    xinzhiqiNums: function() {
      return this.xinzhiqis.length
    }
  },
  methods: {
    uncheckAll: function() {
      for (var x in this.xinzhiqis) {
        this.xinzhiqis[x].checked = false
        this.xinzhiqis[x].disabled = false
        this.checkedXinzhiqiIDs.splice(0,this.checkedXinzhiqiIDs.length)
      }
    }
  },
  data () {
    return {
      xinzhiqis: this.$root.$data.xinzhiqis,
      characterData: this.$root.$data.characterData,
      mofaqi: this.$root.$data.mofaqi,
      checkedXinzhiqiIDs: this.$root.$data.checkedXinzhiqiIDs,
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
  },
}

</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 20px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  table {
    background-color:antiquewhite;
    border: 5px solid white;
  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
  }

  input[type="number"]{
  -moz-appearance: textfield;
  }
</style>