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

<script lang="ts">
import { defineComponent } from 'vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { useColor } from '@/composables/useColor';

interface ILanguage {
  name: string;
  quality: number;
}

export default defineComponent({
  props: {
    titleColor: { type: String, default: '' },
    skillColor: { type: String, default: 'warning' },
    textColor: { type: String, default: '' },
  },
  setup(props) {
    const { t } = useI18n();
    const languages = computed<ILanguage[]>(() => [
      { name: t('languages.french'), quality: 100 },
      { name: t('languages.english'), quality: 90 },
    ]);

    const computedTitleColor = useColor(props.titleColor);
    const computedTextColor = useColor(props.textColor);

    return {
      computedTitleColor,
      computedTextColor,
      languages,
    };
  },
});
</script>
