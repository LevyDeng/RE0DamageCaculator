<template>
  <v-main>
    <v-row dense>
      <!-- 选择当前角色 -->
      <v-col xs="12" sm="6" mid="6" lg="4">
        <v-row>
          <v-col cols="12" dense>
            <v-row>
              <v-col cols="6">
                <v-select :items="characterList"
                :label="'当前角色'+':'+'('+characterDatas.characters[characterSelection.abbr].name.value+')'"
                filled
                v-model="characterSelection"
                :hint="`${characterSelection.state}, ${characterSelection.abbr}`"
                item-text="state"
                item-value="abbr"
                persistent-hint
                return-object
                single-line
                >
                </v-select>
              </v-col>
            </v-row>
          </v-col>
          <!-- 角色基础数据输入框 -->
          <v-col class="grey lighten-2" cols="11" dense offset="1">
            <v-row>
              <v-col cols="8">
                <v-text-field
                  label="名字" :value="characterDatas.characters[currentCharacterID].name.value"
                  >
                </v-text-field>
              </v-col>
              <v-col v-for="key in numberInputs" 
              :key=key.id 
              cols="6">
              <!-- 输入框 -->
              <v-text-field 
                :label='characterDatas.characters[currentCharacterID][key].label'
                :value="characterDatas.characters[currentCharacterID][key].value"
                :rules="numberRules">
                <template v-slot:append>
                <v-tooltip right v-if="characterDatas.tips[key]">
                <template v-slot:activator="{ on }">
                  <v-icon
                    color="#90A4AE"
                    v-on="on"
                  >mdi-alert-circle
                  </v-icon>
                </template>
                <span>{{characterDatas.tips[key]}}</span>
                </v-tooltip>
                </template></v-text-field>
                
                
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!-- 显示角色最终数据 -->
      <v-col xs="12" sm="6" mid="6" lg="4">
        <v-item-group>
          <v-list-item>
            <v-subheader>角色最终数据</v-subheader>
          </v-list-item>
        </v-item-group>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "character",
  data() {
    return {
      currentCharacterID: 0,
      numberRules: this.rules.numberRules,
      calcInput: this.tools.calcInput,
      characterSelection: {
        state: "惠惠",
        abbr: 0
      }
    }
  },
  computed: 
  {
    characterList: function() {
      var x = []
      for (var k in Object.keys(this.$store.state.characterDatas.characters)) {
        x.push({
          state: this.$store.state.characterDatas.characters[k].name.value,
          abbr: k}
        )
      }
      return x
    },
    numberInputs: function() {
      var l = Object.keys(this.$store.state.characterDatas.characters[this.currentCharacterID])
      l.splice(0,1)
      return l
    },
    ...mapState([
      'characterDatas'
    ])
  },
  methods: {
    changeCurrentID: function() {
      console.log(this.$refs.characterSelection.label)
      this.currentCharacterID=this.$refs.characterSelection.value
    }
  }
}
</script>