<template>
  <ProjectTemplate
    :title="$t('projects.nlp.title')"
    :titleColor="titleColor"
    :cardColor="cardColor"
    :iconColor="iconColor"
    :headerTextColor="headerTextColor"
    leftIcon="mdi-school-outline"
    :leftText="$t('projects.nlp.type')"
    rightIcon="mdi-timelapse"
    :rightText="$t('projects.nlp.duration')"
    :textColor="textColor"
    :skills="skills"
  >
    <template v-slot:content>
      <p>{{ $t('projects.nlp.content.label') }}</p>
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
    skills: ['Python', 'Keras'],
  }),
});
</script>
