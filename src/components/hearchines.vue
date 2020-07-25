<template>
  <v-main>
    <v-row dense>
      <v-col v-for="(h,i) in $store.state.hearchineDatas.hearchines"
      :key="i"
       cols="6" xs="12" sm="8">
        <hearchine :hearchineID="i"></hearchine>
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
  }
}
</script>