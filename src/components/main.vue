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
        <el-row :gutter="10" :key="this.$root.$data.xinzhiqiKey">
          <el-col :span="8" v-for="(x,k) in xinzhiqis" :key="k">
            <xinzhiqi :xinzhiqiData="x"></xinzhiqi>
          </el-col>
          <el-col :span="8">
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
    }
  },
  data () {
    return {
      checkList: [],
      xinzhiqis: this.$root.$data.xinzhiqis,
      characterData: this.$root.$data.characterData,
      mofaqi: this.$root.$data.mofaqi,
      xinzhjiqiKey: this.$root.$data.xinzhjiqiKey
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
</style>