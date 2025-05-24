<template>
  <ProjectTemplate
    :title="$t('projects.train-graph.title')"
    :titleColor="titleColor"
    :cardColor="cardColor"
    :iconColor="iconColor"
    :headerTextColor="headerTextColor"
    leftIcon="mdi-atom-variant"
    :leftText="$t('projects.train-graph.type')"
    rightIcon="mdi-timelapse"
    :rightText="$t('projects.train-graph.duration')"
    :textColor="textColor"
    :skills="skills"
    link="https://github.com/jrmdel/cities-distances"
  >
    <template v-slot:content>
      <p>{{ $t('projects.train-graph.content.label') }}</p>
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
    skills: ['Neo4j', 'JavaScript'],
  }),
});
</script>
