<template>
  <div class="mt-2">
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col>Diplômes</v-col>
      </v-row>
      <v-row align="center" justify="space-around" no-gutters>
        <v-col cols="12" v-for="(d, i) in diplomas" :key="i" class="my-1">
          <v-divider dark />
          <v-card outlined :color="cardColor">
            <v-card-title>
              <span class="text-subtitle-1 font-weight-medium" :class="computedDiplomaTextColor">
                {{ d.title }}
              </span>
            </v-card-title>
            <v-card-subtitle>
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
            </v-card-subtitle>
            <v-card-actions v-if="d.skills">
              <v-row no-gutters class="mt-n6">
                <v-col class="mx-1" cols="auto" v-for="(skill, j) in d.skills" :key="j">
                  <v-chip small class="ma-1" :class="computedChipTextColor" :color="chipColor">
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
import { defineComponent } from 'vue';

import { useColor } from '@/composables/useColor';

export default defineComponent({
  props: {
    titleColor: { type: String, default: '' },
    cardColor: { type: String, default: '' },
    diplomaTextColor: { type: String, default: '' },
    iconColor: { type: String, default: '' },
    textColor: { type: String, default: '' },
    chipColor: { type: String, default: 'warning' },
    chipTextColor: { type: String, default: '' },
  },
  data: () => ({
    diplomas: [
      {
        title: 'Ingénieur informatique spécialité IA/Big Data',
        school: 'ENSSAT - Lannion',
        year: '2020',
        skills: ['Génie Logiciel', 'Web', 'Sciences des données', 'Machine Learning'],
      },
      {
        title: 'BTS Opticien-Lunetier',
        school: 'ISO - Lille',
        year: '2014',
      },
    ],
  }),
  setup(props) {
    const computedTitleColor = useColor(props.titleColor);
    const computedDiplomaTextColor = useColor(props.diplomaTextColor);
    const computedTextColor = useColor(props.textColor);
    const computedChipTextColor = useColor(props.chipTextColor);

    return {
      computedTitleColor,
      computedDiplomaTextColor,
      computedTextColor,
      computedChipTextColor,
    };
  },
});
</script>
