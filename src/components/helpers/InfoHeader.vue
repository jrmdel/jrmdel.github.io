<template>
  <v-card-text class="mt-n3 text-subtitle-2">
    <v-row align="center" justify="space-between">
      <v-col class="d-flex align-center" cols="auto">
        <v-icon :color="iconColor">
          {{ leftIcon }}
        </v-icon>
        <span class="ml-2" :class="computedTextColor">{{ leftText }}</span>
      </v-col>
      <v-col v-show="hasRightData" class="d-flex align-center" cols="auto">
        <v-icon :color="iconColor">
          {{ rightIcon }}
        </v-icon>
        <span class="ml-2" :class="computedTextColor">{{ rightText }}</span>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useColor } from '@/composables/useColor';

interface Props {
  leftIcon: string;
  leftText: string;
  rightIcon?: string;
  rightText?: string;
  iconColor: string;
  textColor?: string;
}
const { textColor, rightIcon, rightText } = defineProps<Props>();
const computedTextColor = useColor(textColor);
const hasRightData = computed(() => rightIcon && rightText);
</script>
