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

const skills = ['Vue.JS', 'SVG'];
</script>
