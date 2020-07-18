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
            <td><input v-model="characterData[k]"></td>
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
            <xinzhiqi :xinzhiqiData="{
              name: '新建心之器',
              id: -1,
              checked: false,
              attack: 0,
              properties: {
                '基础攻击': 0,
                '暴击几率': 0,
                '连击几率': 0,
              }
            }"></xinzhiqi>
          </el-col>
        </el-row>
      </el-main>
      <el-main><el-button type="danger" @click="uncheckAll">全部取消勾选</el-button></el-main>
      <el-header>魔法器</el-header>
      <el-main>
        
        <table>
          <tr v-for="(v,k) in mofaqi" :key="k">
            <td>{{k+':'}}</td>
            <td><input v-model="mofaqi[k]"></td>
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
      return this.characterData['基础攻击']
    },
    xinzhiqiNums: function() {
      return this.xinzhiqis.length
    }
  },
  methods: {
    uncheckAll: function() {
      for (var x in this.xinzhiqis) {
        this.xinzhiqis[x].checked = false
      }
    }
  },
  data () {
    return {
      checkList: [],
      xinzhiqis: this.$root.$data.xinzhiqis,
      characterData: this.$root.$data.characterData,
      mofaqi: this.$root.$data.mofaqi
    }
  }
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
</style>