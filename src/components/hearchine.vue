<template>
  <v-card color="orange lighten-5">
    <v-form v-model="valid">
      <v-row dense>
        <v-col cols="2">
          <v-checkbox :checked="hearchineDatas.hearchines[hearchineID].checked.value"
          :disabled="hearchineDatas.hearchines[hearchineID].disabled.value"
          @change="checkChanged"></v-checkbox>
        </v-col>
        <v-col cols="6">
          <v-text-field label="名字" v-model="name.value"
          ></v-text-field>
        </v-col>
        <v-col cols="3" >
          <v-text-field label="攻击力" v-model="attack.value" :rules="pureNumberRules"></v-text-field>
        </v-col>
      </v-row>
      <!-- 心之器属性 -->
      <v-row dense>
        <v-col>
          <input type="hidden" name="flag" v-model="flag"><!-- 用于强制刷新组件 -->
          <v-row dense v-for="(p,k) in propertySelection" 
            :key=p.key>
            <v-col cols="2">
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="mx-3 my-8"
                fab x-small 
                width="1"
                height="1"
                v-bind="attrs"
                v-on="on"
                @click="removeProperty(k)">
                  <v-icon color="red">mdi-cancel</v-icon>
                </v-btn>
                </template>
                <span>移除属性</span>
              </v-tooltip>
            </v-col>
            <v-col
            cols="6">
              <v-select
                :items="hearchineDatas.hearchineProperties"
                :label="p.label"
                v-model="propertySelection[k]" 
                item-text="label"
                item-value="key"
                return-object
                single-line>
              </v-select>
            </v-col>
            <v-col cols="3">
              <v-text-field
              v-model="propertySelection[k].value"
              :rules="pureNumberRules"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1">
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="mx-3 my-8"
                fab x-small 
                width="1"
                height="1"
                v-bind="attrs"
                v-on="on"
                @click="addProperty()">
                  <v-icon color="green">mdi-plus</v-icon>
                </v-btn>
                </template>
                <span>添加属性</span>
              </v-tooltip>
            </v-col></v-row>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-btn class="ma-2" outlined fab small color="red"
          @click="removeSelf">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="ma-2" outlined color="green">保存</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "hearchine",
  data() {
    return {
      valid: true,
      checked: false,
      name: {
        value: this.$store.state.hearchineDatas.hearchines[this.hearchineID].name.value},
      attack: {
        value: this.$store.state.hearchineDatas.hearchines[this.hearchineID].attack.value},
      pureNumberRules: this.rules.pureNumberRules,
      calcInput: this.tools.calcInput,
      flag: 0
    }
  },
  props: {
    hearchineID: Number
  },
  computed: {
    propertySelection() {
      var pList = Object.keys(this.$store.state.hearchineDatas.hearchines[this.hearchineID])
      var exceptList = ['id', 'name','attack','checked','disabled']
      for (var i in exceptList) {
        pList.splice(pList.indexOf(exceptList[i]),1)
      }
      var selections = []
      for (var k in pList) {
        selections.push({
          key: pList[k],
          label: this.$store.state.hearchineDatas.hearchines[this.hearchineID][pList[k]].label,
          value: this.$store.state.hearchineDatas.hearchines[this.hearchineID][pList[k]].value
        })
      }
      return selections
    },
    ...mapState([
      'hearchineDatas'
    ])
  },
  methods: {
    checkChanged: function() {
      this.checked=!this.checked
    },
    removeProperty: function(k) {
      this.propertySelection.splice(k,1)
      this.flag+=1
    },
    addProperty: function() {
      this.propertySelection.push({
        label: "-----空-----",
        key: "empty",
        value: 0
      })
      this.flag+=1
    },
    removeSelf: function() {
      this.$store.commit('removeHearchine', this.hearchineID)
    }
  }
}
</script>