<template>
  <v-main>
    <v-row dense>
      <input type="hidden" v-model="hearchinesFlag">
      <v-col v-for="(h,k) in $store.state.hearchineDatas.hearchines"
      :key="k"
       cols="6" xs="12" sm="8">
        <hearchine :hearchineID="k"></hearchine>
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
    hearchines() {
      return Object.keys(this.$store.state.hearchineDatas.hearchines)
    }
  }
}
</script>