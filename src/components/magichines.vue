<template>
  <v-main>
    <v-row dense>
      <v-col cols="1">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
          <v-btn
          class="mx-3 my-8"
          fab x-small 
          width="1"
          height="1"
          v-bind="attrs"
          v-on="on"
          @click="removeMagichine">
            <v-icon color="red">mdi-cancel</v-icon>
          </v-btn>
          </template>
          <span>删除</span>
        </v-tooltip>
        </v-col>
      <v-col cols="3" lg="2">
        <v-select 
          :items="magichineList"
          :label="$store.state.characterDatas.characters[currentCharacterID].magichineSelection.name"
          filled
          v-model="magichineSelection"
          item-text="name"
          item-value="key"
          return-object
          single-line
          >
        </v-select>
      </v-col>
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
          @click="addMagichine">
            <v-icon color="green">mdi-plus</v-icon>
          </v-btn>
          </template>
          <span>新建</span>
        </v-tooltip>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>
    <v-form v-if="magichineList.length!=0" v-model="valid" class="grey lighten-2">
      <v-row dense>
        <v-col cols="3">
          <v-text-field label="名称" :value="$store.state.characterDatas.characters[currentCharacterID].magichines[magichineSelection.key].name"
          @input="saveMagichineName($event)"></v-text-field>
        </v-col>
        <v-col cols="10"></v-col>
        <v-col v-for="(p, k) in $store.state.characterDatas.characters[currentCharacterID].magichines[magichineSelection.key].numberProperties" :key=k cols="4">
          <v-text-field :label="p.label"
          :value="p.value"
          :rules="pureNumberRules"
          @input="saveMagichineData(k, $event)"></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-main>
</template>

<script>
export default {
  name: 'magichines',
  data() {
    return {
      pureNumberRules: this.rules.pureNumberRules,
      valid: false
    }
  },
  computed: {
    currentCharacterID: function() {
      return this.$store.state.characterDatas.characterSelection.key
    },
    magichineList: function() {
      var mList = []
      for (var k in this.$store.state.characterDatas.characters[this.$store.state.characterDatas.characterSelection.key].magichines) {
        mList.push({
          key: k,
          name: this.$store.state.characterDatas.characters[this.$store.state.characterDatas.characterSelection.key].magichines[k].name
        })
      }
      return mList
    },
    magichineSelection: {
      get() {
        return this.$store.state.characterDatas.characters[this.currentCharacterID].magichineSelection
      },
      set (value) {
        this.$store.commit('magichineSelection', value)
      }
    }
  },
  methods: {
    addMagichine: function() {
      this.$store.commit('addMagichine')
    },
    removeMagichine: function() {
      if (this.magichineList.length>=2) {
        this.$store.commit('removeMagichine')
      }
    },
    saveMagichineName: function(e) {
      this.$store.commit('saveMagichineName', e.toString())
    },
    saveMagichineData: function(key, value) {
      if (this.valid==true) {
        this.$store.commit('saveMagichineData', {key:key, value:value})
      }
    }
  }
}
</script>