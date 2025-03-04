<template>
  <div>
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col>Compétences</v-col>
      </v-row>
      <v-row align="center" class="px-4 my-n2" v-for="(skill, i) in skills" :key="i">
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
        <v-col cols="7" md="5" lg="6" xl="7">
          <v-slider
            :color="sliderColor"
            hide-details
            :value="skill.val"
            min="0"
            max="100"
            readonly
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
  MONGO_DB_ICON,
  MY_SQL_ICON,
  NEST_JS_ICON,
  POSTGRE_ICON,
  POWER_BI_ICON,
} from '@/assets/icons/icons.constants';

export default defineComponent({
  props: {
    iconColor: { type: String, default: '' },
    titleColor: { type: String, default: '' },
    textColor: { type: String, default: '' },
    sliderColor: { type: String, default: 'warning' },
  },
  computed: {
    computedTextColor() {
      return this.textColor.length > 0 ? `${this.textColor}--text` : '';
    },
    computedTitleColor() {
      return this.titleColor.length > 0 ? `${this.titleColor}--text` : '';
    },
  },
  data: () => ({
    skills: [
      {
        icon: 'mdi-vuejs',
        text: 'Vue.JS',
        val: 65,
      },
      {
        icon: 'mdi-nodejs',
        text: 'Node.JS',
        val: 85,
      },
      {
        icon: NEST_JS_ICON,
        text: 'NestJS',
        val: 75,
      },
      {
        icon: 'mdi-angular',
        text: 'Angular',
        val: 80,
      },
      {
        icon: 'mdi-language-python',
        text: 'Python',
        val: 60,
      },
      {
        icon: MONGO_DB_ICON,
        text: 'MongoDB',
        val: 70,
      },
      {
        icon: POWER_BI_ICON,
        text: 'PowerBI',
        val: 50,
      },
      {
        icon: POSTGRE_ICON,
        text: 'Postgre',
        val: 60,
      },
      {
        icon: 'mdi-git',
        text: 'Git',
        val: 70,
      },
    ],
    oldSkills: [
      {
        icon: 'mdi-language-r',
        text: 'R',
        val: 40,
      },
      {
        icon: 'mdi-language-java',
        text: 'Java',
        val: 50,
      },
      {
        icon: MY_SQL_ICON,
        text: 'MySQL',
        val: 50,
      },
    ],
  }),
  beforeMount() {
    this.skills.sort((a, b) => b.val - a.val);
  },
});
</script>
