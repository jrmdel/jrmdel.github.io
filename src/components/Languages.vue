<template>
  <div class="mt-2">
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col>{{ $t('languages.title') }}</v-col>
      </v-row>
      <v-row align="center" justify="space-around">
        <v-col v-for="(language, i) in languages" :key="i" cols="auto">
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="6"
            :model-value="language.quality"
            :color="skillColor"
          >
            <span class="font-weight-medium" :class="computedTextColor">
              {{ language.name }}
            </span>
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { useColor } from '@/composables/useColor';

interface ILanguage {
  name: string;
  quality: number;
}

interface Props {
  titleColor?: string;
  skillColor?: string;
  textColor?: string;
}
const { titleColor, textColor, skillColor = 'warning' } = defineProps<Props>();
const computedTitleColor = useColor(titleColor);
const computedTextColor = useColor(textColor);

const { t } = useI18n();
const languages = computed<ILanguage[]>(() => [
  { name: t('languages.french'), quality: 100 },
  { name: t('languages.english'), quality: 90 },
]);
</script>
