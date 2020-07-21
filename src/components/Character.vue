<template>
  <v-main>
    <v-row dense>
      <!-- 输入当前角色数据 -->
      <v-col xs="12" sm="6" mid="6" lg="4">
        <v-row>
          <v-col cols="12" dense>
            <v-row>
              <v-col cols="6">
                <v-select :items="items"
                label="当前角色" 
                v-model="currentCharacter"
                filled>
                </v-select>
              </v-col>
            </v-row>
          </v-col>
          <!-- 输入框 -->
          <v-col class="grey lighten-2" cols="11" dense offset="1">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="名字" 
                  ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field 
                  append-icon="mdi-alert-circle"
                  label="攻击力"></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!-- 显示角色最终数据 -->
      <v-col xs="12" sm="6" mid="6" lg="4">
        <v-item-group>
          <v-list-item>
            <v-subheader>角色最终数据</v-subheader>
          </v-list-item>
        </v-item-group>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "character",
  data() {
    return {
      currentCharacter: String,
      items: [1,2,3]
    }
  }
}
</script>