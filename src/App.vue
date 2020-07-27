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
        <v-col cols="8" dense>
          <v-row align="start">
            <v-col cols="3" lg="2">
              <v-text-field value="当前角色:" readonly></v-text-field>
            </v-col>
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
                @click="removeCharacter()">
                  <v-icon color="red">mdi-cancel</v-icon>
                </v-btn>
                </template>
                <span>删除当前角色</span>
              </v-tooltip>
            </v-col>
            <v-col cols="6" lg="4">
              
              <v-select 
              ref="characterSelect"
              :items="characterList"
              :label="$store.state.characterDatas.characters[characterSelection.key].name.value"
              filled
              v-model="characterSelection"
              item-text="state"
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
                @click="addCharacter()">
                  <v-icon color="green">mdi-plus</v-icon>
                </v-btn>
                </template>
                <span>新建角色</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-container >
        <v-tabs background-color="brown lighten-4" align-with-title>
          <v-tab to="/character">角色面板</v-tab>
          <v-tab to="/hearchines">心之器</v-tab>
          <v-tab to="/magichines">魔法器</v-tab>
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
    removeCharacter: function() {
      if (this.characterList.length>=2) {
        this.$store.commit('removeCharacter', this.characterSelection.key)
      }
    },
    addCharacter: function() {
      this.$store.commit("addCharacter")
    }
  },
  data() {
    return {
    shown: null
  }},
  computed: {
    characterList: function() {
      var x = []
      for (var i in this.$store.state.characterDatas.characters) {
        x.push({
          state: this.$store.state.characterDatas.characters[i].name.value,
          key: i
        })
      }
      return x
    },
    characterSelection: {
      get() {
        return this.$store.state.characterDatas.characterSelection
      },
      set (value) {
        this.$store.commit('characterSelection', value)
      }
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
