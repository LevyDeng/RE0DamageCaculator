<template>
  <v-main>
    <v-row dense>
      <v-col v-for="(h,k) in $store.state.hearchineDatas.hearchines"
      :key="k"
       cols="4" xs="6" sm="6">
        <hearchine :hearchineID="k"></hearchine>
      </v-col>
      <v-col cols="4" xs="6" sm="6">
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
          <v-btn class="mx-10 my-10"
          fab x-large 
          v-bind="attrs"
          v-on="on"
          @click="addHearchine">
            <v-icon color="green">mdi-plus</v-icon>
          </v-btn>
          </template>
          <span>新建</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import hearchine from "./hearchine.vue"

export default {
  name: "hearchines",
  components: {
    hearchine
  },
  data() {
    return {
      hearchinesFlag: this.$store.state.flags.hearchinesFlag
    }
  },
  computed: {
  },
  methods: {
    addHearchine: function() {
      this.$store.commit("addHearchine")
    }
  }
}
</script>