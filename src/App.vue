<template>
  <v-app>
    <v-navigation-drawer v-model="shown"
      app>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>必杀技伤害计算</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="black" dark @click.stop="shown = !shown">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>RE0伤害计算器</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-tabs v-model="tab" align-with-title></v-tabs>
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
  }),
};
</script>
