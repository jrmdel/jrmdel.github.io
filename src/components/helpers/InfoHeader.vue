<template>
  <v-card-subtitle class="mt-n3 text-subtitle-2">
    <v-row align="center" justify="space-between">
      <v-col class="d-flex align-center" cols="auto">
        <v-icon :color="iconColor">
          {{ leftIcon }}
        </v-icon>
        <span class="ml-2" :class="computedTextColor">{{ leftText }}</span>
      </v-col>
      <v-col class="d-flex align-center" cols="auto" v-show="hasRightData">
        <v-icon :color="iconColor">
          {{ rightIcon }}
        </v-icon>
        <span class="ml-2" :class="computedTextColor">{{ rightText }}</span>
      </v-col>
    </v-row>
  </v-card-subtitle>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    leftIcon: { type: String },
    leftText: { type: String },
    rightIcon: { type: String, default: '' },
    rightText: { type: String, default: '' },
    iconColor: { type: String },
    textColor: { type: String, default: '' },
  },
  computed: {
    computedTextColor() {
      return this.textColor.length > 0 ? `${this.textColor}--text` : '';
    },
    hasRightData() {
      return this.rightIcon.length > 0 && this.rightText.length > 0;
    },
  },
});
</script>
