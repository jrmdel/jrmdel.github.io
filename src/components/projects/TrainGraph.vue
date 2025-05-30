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

<script setup lang="ts">
import ProjectTemplate from '@/components/projects/helpers/ProjectTemplate.vue';

interface Props {
  iconColor: string;
  cardColor: string;
  titleColor: string;
  textColor: string;
  headerTextColor: string;
}
defineProps<Props>();

const skills = ['Neo4j', 'JavaScript'];
</script>
