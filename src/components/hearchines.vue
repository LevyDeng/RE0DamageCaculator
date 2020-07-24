<template>
  <v-main>
    <v-row dense>
      <v-col v-for="id in hearchines"
      :key="id.id"
       cols="6" xs="8" sm="6" mid="6" lg="4">
        <hearchine :hearchineID="id"></hearchine>
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
  computed: {
    hearchines() {
      return Object.keys(this.$store.state.hearchineDatas.hearchines)
    }
  }
}
</script>