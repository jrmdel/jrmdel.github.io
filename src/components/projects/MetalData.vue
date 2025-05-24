<template>
  <ProjectTemplate
    :title="$t('projects.ticket-to-ride.title')"
    :titleColor="titleColor"
    :cardColor="cardColor"
    :iconColor="iconColor"
    :headerTextColor="headerTextColor"
    leftIcon="mdi-school-outline"
    :leftText="$t('projects.metal-data.type')"
    rightIcon="mdi-timelapse"
    :rightText="$t('projects.metal-data.duration')"
    :textColor="textColor"
    :skills="skills"
    link="https://jrmdel.github.io/Metal100/"
  >
    <template v-slot:content>
      <i18n-t keypath="projects.metal-data.content.label" tag="p" scope="global">
        <template v-slot:link-1>
          <a
            target="_blank"
            href="https://www.rollingstone.com/music/music-lists/the-100-greatest-metal-albums-of-all-time-113614"
            class="text-warning"
          >
            {{ $t('projects.metal-data.content.accent.link-1') }}
          </a>
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
  data: () => ({
    skills: ['R', 'RStudio'],
  }),
});
</script>
