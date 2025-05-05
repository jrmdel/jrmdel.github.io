<template>
  <v-card class="mb-6" :color="cardColor">
    <v-card-title class="text-h4 font-weight-light" :class="computedTitleColor">
      {{ $t('about-me.title') }}
    </v-card-title>
    <v-card-text
      class="d-flex flex-column ga-3 text-subtitle-1 font-weight-light"
      style="line-height: 1.6"
    >
      <i18n-t keypath="about-me.intro.label" tag="p" scope="global" :class="computedTextColor">
        <template v-for="(accentuated, i) in accentuatedKeys" :key="i" v-slot:[accentuated]>
          <span class="font-weight-medium">{{ $t(`about-me.intro.${accentuated}`) }}</span>
        </template>
      </i18n-t>
      <p :class="computedTextColor">
        {{ $t('about-me.future') }}
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
    const accentuatedKeys = ['quality-1', 'quality-2', 'quality-3', 'interest-1', 'interest-2'];
    const computedTitleColor = useColor(props.titleColor);
    const computedTextColor = useColor(props.bodyTextColor);

    return { accentuatedKeys, computedTitleColor, computedTextColor };
  },
});
</script>
