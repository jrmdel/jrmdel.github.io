<template>
  <div>
    <v-card-title class="text-wrap" :class="computedTitleColor">{{ title }}</v-card-title>
    <v-card-subtitle>
      <span class="text-h6" :class="computedSubtitleColor">{{ subtitle }}</span>
    </v-card-subtitle>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useColor } from '@/composables/useColor';

export default defineComponent({
  props: {
    title: { type: String },
    titleColor: { type: String, default: '' },
    subtitle: { type: String },
    subtitleColor: { type: String, default: '' },
  },
  setup(props) {
    const computedTitleColor = useColor(props.titleColor);
    const computedSubtitleColor = useColor(props.subtitleColor);

    return {
      computedTitleColor,
      computedSubtitleColor,
    };
  },
});
</script>
