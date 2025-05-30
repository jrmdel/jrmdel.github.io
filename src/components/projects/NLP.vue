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

const skills = ['Python', 'Keras'];
</script>
