<template>
  <div>
      <el-header><h1>简易RE0必杀技伤害计算器</h1></el-header>
      <el-main>
        <el-row><h3>一些说明:</h3></el-row>
        <el-row>
          <el-col :span="24">1.<span style="color:blue">角色基础数据</span>其实就是除了心之器,魔法器以外的数据,包括微精灵,战斗中的buff等.懒得再加专门的模块了,统统算在这里吧,只要知道同类数据是加算就可以了.比如暴击伤害加30%的buff,你可以给<span style="color:red">暴击伤害</span>的值手动加上0.3,也可以把<span style="color:red">暴击伤害加成</span>的值设为0.3,结果是一样的.</el-col>
          <el-col :span="24">2.<span style="color:red">基础攻击力</span>的值为角色的黑字攻击力,这个不能随意更改,因为影响攻击力加成的基数</el-col>
          <el-col>3.修改心之器数据后一定要点<span style="color:green">保存</span></el-col>
        </el-row>
        <br></el-main>
    <el-container>
      <el-header>角色基础数据</el-header>
      <el-main>
        <table>
          <tr v-for="(v,k) in characterData" :key="k">
            <td><span v-if="k != '攻击力'">{{k+':'}}</span><span v-if="k == '攻击力'">额外攻击力加成</span></td>
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
      //将所有值转换为数字
      for (var key in finalData) {
        finalData[key] = Number(finalData[key])
      }
      finalData["攻击力"]=0
      if (this.checkedXinzhiqiIDs.length!=0) {
        for (var i in this.checkedXinzhiqiIDs) {
          for (var x in this.xinzhiqis) {
            if (this.xinzhiqis[x].id==this.checkedXinzhiqiIDs[i]) {
              finalData["攻击力"]+=Number(this.xinzhiqis[x].attack)
            }
          }
        }
      }
      for (key in finalData) {
        //加上心之器数据
          if (this.checkedXinzhiqiIDs.length!=0) {
            for (i in this.checkedXinzhiqiIDs) {
              for (x in this.xinzhiqis) {
                if (this.xinzhiqis[x].id==this.checkedXinzhiqiIDs[i]) {
                  if (key in this.xinzhiqis[x].properties){
                    finalData[key] += Number(this.xinzhiqis[x].properties[key])
                  }
                }
              }
          }
        }
        //加上魔法器数据
        if (key in this.mofaqi) {
          finalData[key] += Number(this.mofaqi[key])
        }
      }
      console.log(finalData)
      //伤害公式
      var damage = (finalData["基础攻击力"]*(1+finalData["攻击力_百分比"])+finalData["攻击力"])*(1+finalData["伤害加成"])*Math.min((finalData["怒气"]+1000),2000)/2000*(1+finalData["必杀技伤害提升"])*finalData["连携"]*finalData["必杀技倍率"]*(1+Math.min(finalData["暴击几率"],1)*(finalData["暴击伤害"]+finalData["暴击伤害加成"]-1)+10*Math.min(finalData["连击几率"],1)*(finalData["连击伤害"]+finalData["连击伤害加成"]))*375/(375+finalData["敌人防御"]*Math.max(0,(1-finalData["防御忽视"])))
      return damage.toFixed(0)
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
      newXinzhiqiModel:this.$root.$data.newXinzhiqiModel
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
  
  .el-col {
    text-align: left;
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