<template>
  <v-main>
    <v-row>
      <v-col cols="6" xs="8" sm="6" mid="6" lg="4" offset-xs="0" offset-sm="2" offset-mid="1" offset-lg="0">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header></v-expansion-panel-header>
            <v-expansion-panel-content>
              <hearchine></hearchine>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
  }
}
</script>