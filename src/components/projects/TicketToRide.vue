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
  setup() {
    const skills = ['Vue.JS', 'Firebase'];
    return { skills };
  },
});
</script>
