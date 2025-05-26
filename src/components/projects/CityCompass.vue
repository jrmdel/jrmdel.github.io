<template>
  <ProjectTemplate
    :title="$t('projects.city-compass.title')"
    :titleColor="titleColor"
    :cardColor="cardColor"
    :iconColor="iconColor"
    :headerTextColor="headerTextColor"
    leftIcon="mdi-atom-variant"
    :leftText="$t('projects.city-compass.type')"
    rightIcon="mdi-timelapse"
    :rightText="$t('projects.city-compass.duration')"
    :textColor="textColor"
    :skills="skills"
    link="https://jrmdel.github.io/cities-game/"
  >
    <template v-slot:content>
      <p>{{ $t('projects.city-compass.content.label') }}</p>
    </template>
  </ProjectTemplate>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ProjectTemplate from '@/components/projects/helpers/ProjectTemplate.vue';

export default defineComponent({
  components: {
    ProjectTemplate,
  },
  props: {
    iconColor: { type: String },
    cardColor: { type: String },
    titleColor: { type: String },
    textColor: { type: String },
    headerTextColor: { type: String },
  },
  data: () => ({
    skills: ['Vue.JS', 'SVG'],
  }),
});
</script>
