<template>
  <div>
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col>{{ $t('skills.title') }}</v-col>
      </v-row>
      <v-row v-for="(skill, i) in skills" :key="i" align="center" class="px-4 my-n2">
        <v-col cols="auto">
          <v-icon :color="iconColor">
            {{ skill.icon }}
          </v-icon>
        </v-col>
        <v-col>
          <span :class="computedTextColor">
            {{ skill.text }}
          </span>
        </v-col>
        <v-col cols="6" md="5" lg="6" xl="7">
          <v-progress-linear
            :color="sliderColor"
            hide-details
            :model-value="skill.val"
            min="0"
            max="100"
            readonly
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';

import { useColor } from '@/composables/useColor';

interface Props {
  iconColor?: string;
  titleColor?: string;
  textColor?: string;
  sliderColor?: string;
}
const { titleColor, textColor, sliderColor = 'warning' } = defineProps<Props>();
const computedTitleColor = useColor(titleColor);
const computedTextColor = useColor(textColor);

interface Skill {
  icon: string;
  text: string;
  val: number;
}
const skills: Skill[] = [
  { icon: 'mdi-vuejs', text: 'Vue.JS', val: 70 },
  { icon: 'mdi-nodejs', text: 'Node.JS', val: 85 },
  { icon: 'custom:nestjs', text: 'NestJS', val: 75 },
  { icon: 'mdi-angular', text: 'Angular', val: 80 },
  { icon: 'mdi-language-python', text: 'Python', val: 60 },
  { icon: 'custom:mongodb', text: 'MongoDB', val: 70 },
  { icon: 'custom:powerbi', text: 'PowerBI', val: 50 },
  { icon: 'custom:postgre', text: 'Postgre', val: 60 },
  { icon: 'mdi-git', text: 'Git', val: 70 },
  { icon: 'mdi-language-java', text: 'Java', val: 50 },
];
onBeforeMount(() => {
  skills.sort((a, b) => b.val - a.val);
});
</script>
