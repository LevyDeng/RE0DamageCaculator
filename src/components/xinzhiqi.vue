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
      <tr v-for="d in trans_data" :key="d.id">
        <td><select>
            <option v-for="(v0,k0) in x_properties" :key="k0" :selected="k==k0 ? true : false">{{k}}</option>
          </select></td>
        <td><input :value="v"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'xinzhiqi',
  methods: {
    save: function() {

    }
  },
  computed: {
    trans_data: function(data){
      var t = []
      var i = 0
      for ( var k in Object.keys(data) ) {
        t.push({
          id: i,
          label: k,
          value: data[k] 
        })
        i = i+1
      }
      return t
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
        "必杀技伤害": 0
      }
    }
  },
  props: {
    xinzhiqiData: {
    }
  },
}
</script>