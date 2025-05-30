<template>
  <div>
    <v-card-title class="text-wrap" :class="computedTitleColor">{{ title }}</v-card-title>
    <v-card-text>
      <span class="text-h6" :class="computedSubtitleColor">{{ subtitle }}</span>
    </v-card-text>
  </div>
</template>

<script setup lang="ts">
import { useColor } from '@/composables/useColor';

interface Props {
  title: string;
  titleColor?: string;
  subtitle: string;
  subtitleColor?: string;
}
const { titleColor, subtitleColor } = defineProps<Props>();
const computedTitleColor = useColor(titleColor);
const computedSubtitleColor = useColor(subtitleColor);
</script>
