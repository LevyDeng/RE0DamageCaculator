<template>
  <v-app>
    <v-navigation-drawer class="brown darken-1" dark v-model="shown"
      app>
      <v-list dense>
        <v-list-item  to="/character">
          <v-list-item-action>
          </v-list-item-action>
            <v-icon color="#0277BD">mdi-calculator</v-icon>
          <v-list-item-content>
            <v-list-item-title>必杀技伤害计算</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar color="#8D6E63" dark elevate-on-scroll app @click.stop="shown = !shown">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>RE0伤害计算器</v-toolbar-title>
    </v-app-bar>
    <v-main class="brown lighten-5">
      <v-row dense>
        <v-col cols="6" dense>
          <v-row align="start">
            <v-col cols="3" lg="2">
              <v-text-field value="当前角色:" readonly></v-text-field>
            </v-col>
            <v-col cols="6" lg="4">
              <v-select :items="characterList"
              :label="$store.state.characterDatas.characters[characterSelection.key].name.value"
              filled
              v-model="characterSelection"
              item-text="state"
              item-value="key"
              return-object
              single-line
              @change="changeCurrentCharacter"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-container >
        <v-tabs background-color="brown lighten-4" align-with-title>
          <v-tab to="/character">角色面板</v-tab>
          <v-tab to="/magichines">魔法器</v-tab>
          <v-tab to="/hearchines">心之器</v-tab>
        </v-tabs>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    changeCurrentCharacter: function() {
      this.$store.commit('changeCurrentCharacter', this.characterSelection.key)
    }
  },
  data() {
    return {
    shown: null,
    characterSelection: {
      state: this.$store.state.characterDatas.characters[0].name.value,
      key: this.$store.state.currentCharacterID,
      seq: 0
    },
  }},
  computed: {
    characterList: function() {
      var x = []
      var keys = Object.keys(this.$store.state.characterDatas.characters)
      for (var i in keys) {
        x.push({
          state: i.toString()+' : ' +this.$store.state.characterDatas.characters[keys[i]].name.value,
          seq: i,
          key: keys[i]}
        )
      }
      return x
    },
  },
  created: function() {
    /*
    localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))))

    window.addEventListener("beforeunload",()=>{
        localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
    })
    */
  }
};
</script>
