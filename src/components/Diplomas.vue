<template>
  <div class="mt-2">
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col>{{ $t('diplomas.title') }}</v-col>
      </v-row>
      <v-row align="center" justify="space-around" no-gutters>
        <v-col v-for="(d, i) in diplomas" :key="i" cols="12" class="my-1">
          <v-divider dark />
          <v-card variant="text">
            <v-card-title>
              <span
                class="text-subtitle-1 font-weight-medium"
                style="text-wrap-mode: wrap"
                :class="computedDiplomaTextColor"
              >
                {{ d.title }}
              </span>
            </v-card-title>
            <v-card-text>
              <v-row align="center" justify="space-between">
                <v-col cols="auto">
                  <v-icon small :color="iconColor"> mdi-bank-outline </v-icon>
                  <span class="ml-2 text-subtitle-2 font-weight-medium" :class="computedTextColor">
                    {{ d.school }}
                  </span>
                </v-col>
                <v-col cols="auto">
                  <v-icon small :color="iconColor"> mdi-certificate-outline </v-icon>
                  <span class="ml-2 text-subtitle-2 font-weight-medium" :class="computedTextColor">
                    {{ d.year }}
                  </span>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions v-if="d.skills">
              <v-row no-gutters class="mt-n6">
                <v-col v-for="(skill, j) in d.skills" :key="j" class="mx-1" cols="auto">
                  <v-chip small class="ma-1" :color="chipColor">
                    {{ skill }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-divider dark />
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useColor } from '@/composables/useColor';

interface IDiploma {
  title: string;
  school: string;
  year: string;
  skills?: string[];
}

export default defineComponent({
  props: {
    titleColor: { type: String, default: '' },
    diplomaTextColor: { type: String, default: '' },
    iconColor: { type: String, default: '' },
    textColor: { type: String, default: '' },
    chipColor: { type: String, default: 'warning' },
  },
  setup(props) {
    const { t } = useI18n();
    const diplomas = computed<IDiploma[]>(() => [
      {
        title: t('diplomas.diploma-1.title'),
        school: t('diplomas.diploma-1.school'),
        year: t('diplomas.diploma-1.year'),
        skills: [
          t('diplomas.diploma-1.skills.web'),
          t('diplomas.diploma-1.skills.data-science'),
          t('diplomas.diploma-1.skills.machine-learning'),
          t('diplomas.diploma-1.skills.software-engineering'),
        ],
      },
      {
        title: t('diplomas.diploma-2.title'),
        school: t('diplomas.diploma-2.school'),
        year: t('diplomas.diploma-2.year'),
      },
    ]);

    const computedTitleColor = useColor(props.titleColor);
    const computedDiplomaTextColor = useColor(props.diplomaTextColor);
    const computedTextColor = useColor(props.textColor);

    return {
      computedTitleColor,
      computedDiplomaTextColor,
      computedTextColor,
      diplomas,
    };
  },
});
</script>
