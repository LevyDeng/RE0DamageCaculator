<template>
  <v-card color="indigo lighten-5">
    <v-form>
      <v-row>
        <v-col cols="1">
          <v-checkbox :checked="hearchineDatas.hearchines[hearchineID].checked.value"
          :disabled="hearchineDatas.hearchines[hearchineID].disabled.value"
          @change="checkChanged"></v-checkbox>
        </v-col>
        <v-col cols="5">
          <v-text-field label="名字"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field label="攻击力"></v-text-field>
        </v-col>
      </v-row>
      <!-- 心之器属性 -->
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-row v-for="i in [0,1,2]" 
                :key=i>
                <v-col
                cols="5" offset="1">
                  <v-select
                    :items="hearchineDatas.hearchineProperties"
                    :label="propertySelection[i].label"
                    v-model="propertySelection[i]" 
                    item-text="label"
                    item-value="key"
                    return-object
                    single-line>
                  </v-select>
                </v-col>
                <v-col cols="5">
                  <v-text-field
                  :rules="numberRules"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="ma-2" outlined fab small color="red">
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
      numberRules: this.rules.numberRules,
      calcInput: this.tools.calcInput
    }
  },
  props: {
    hearchineID: String
  },
  computed: {
    propertySelection() {
      var pList = Object.keys(this.$store.state.hearchineDatas.hearchines[this.hearchineID])
      var exceptList = ['name','attack','checked','disabled']
      for (var i in exceptList) {
        pList.splice(pList.indexOf(exceptList[i]),1)
      }
      var selections = []
      for (var k in pList) {
        selections.push({
          key: pList[k],
          label: this.$store.state.hearchineDatas.hearchines[this.hearchineID][pList[k]].label
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
    }
  }
}
</script>