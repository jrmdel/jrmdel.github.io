<template>
  <v-card class="mb-6" :color="cardColor">
    <v-card-title class="text-h4 font-weight-light" :class="computedTitleColor">
      A propos de moi
    </v-card-title>
    <v-card-text
      class="d-flex flex-column ga-3 text-subtitle-1 font-weight-light"
      style="line-height: 1.6"
    >
      <p :class="computedTextColor">
        Je suis un ingénieur <span class="font-weight-medium">curieux</span>,
        <span class="font-weight-medium">responsable</span> et
        <span class="font-weight-medium">enthousiaste</span>, diplômé d'informatique. Initialement
        destiné à évoluer dans le domaine paramédical, j'ai décidé de reprendre mes études à 22 ans.
        Je me suis découvert une passion pour la <span class="font-weight-medium">data</span>, et
        une grande appétence pour le développement
        <span class="font-weight-medium">web</span> JavaScript/TypeScript.
      </p>
      <p :class="computedTextColor">
        Mon ambition à terme : pouvoir rejoindre un projet ayant un impact environnemental/sociétal
        positif pour aligner mon travail sur mes valeurs individuelles.
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useColor } from '@/composables/useColor';

export default defineComponent({
  props: {
    cardColor: { type: String },
    titleColor: { type: String, default: '' },
    bodyTextColor: { type: String, default: '' },
  },
  setup(props) {
    const computedTitleColor = useColor(props.titleColor);
    const computedTextColor = useColor(props.bodyTextColor);

    return { computedTitleColor, computedTextColor };
  },
});
</script>
