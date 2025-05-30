<template>
  <ProjectTemplate
    :title="$t('projects.ticket-to-ride.title')"
    :titleColor="titleColor"
    :cardColor="cardColor"
    :iconColor="iconColor"
    :headerTextColor="headerTextColor"
    leftIcon="mdi-atom-variant"
    :leftText="$t('projects.ticket-to-ride.type')"
    rightIcon="mdi-timelapse"
    :rightText="$t('projects.ticket-to-ride.duration')"
    :textColor="textColor"
    :skills="skills"
    link="https://jrmdel.github.io/TicketToRide"
  >
    <template v-slot:content>
      <i18n-t keypath="projects.ticket-to-ride.content.label" tag="p" scope="global">
        <template v-slot:italic-1>
          <span class="font-italic">{{
            $t('projects.ticket-to-ride.content.accent.italic-1')
          }}</span>
        </template>
      </i18n-t>
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

const skills = ['Vue.JS', 'Firebase'];
</script>
