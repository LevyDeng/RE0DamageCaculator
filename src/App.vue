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

  data: () => ({
    shown: null,
    numberRules: [
      value => (value || '').length <= 255 || 'Max 255 characters',
      value => {
        const pa = /\d+\.?\d*%?(\+\d+\.?\d*%?)*/
        return pa.test(value) || '输入格式错误'
      }
    ]
  }),
  created: function() {
    localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))))

    window.addEventListener("beforeunload",()=>{
        localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
    })
  }
};
</script>
