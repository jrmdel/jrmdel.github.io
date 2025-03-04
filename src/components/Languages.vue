<template>
  <div class="mt-2">
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col> Langues </v-col>
      </v-row>
      <v-row align="center" justify="space-around">
        <v-col cols="auto" v-for="(l, i) in languages" :key="i">
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="6"
            :value="l.val"
            :color="skillColor"
          >
            <span class="font-weight-medium" :class="computedTextColor">
              {{ l.lang }}
            </span>
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    titleColor: { type: String, default: '' },
    skillColor: { type: String, default: 'warning' },
    textColor: { type: String, default: '' },
  },
  data: () => ({
    languages: [
      { lang: 'Français', val: 100 },
      { lang: 'Anglais', val: 90 },
    ],
  }),
  computed: {
    computedTitleColor() {
      return this.titleColor.length > 0 ? `${this.titleColor}--text` : '';
    },
    computedTextColor() {
      return this.textColor.length > 0 ? `${this.textColor}--text` : '';
    },
  },
});
</script>
