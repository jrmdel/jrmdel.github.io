<template>
  <CardTemplate
    :cardColor="cardColor"
    :cardTitle="$t('experiences.astek.title')"
    :cardSubtitle="$t('experiences.astek.company')"
    :headerTextColor="headerTextColor"
    :subtitleColor="subtitleColor"
    :dateString="$t('experiences.astek.dates')"
    :locationString="$t('experiences.astek.location')"
    :iconColor="iconColor"
    :textColor="bodyTextColor"
    :skills="skills"
  >
    <template v-slot:content>
      <p>{{ $t('experiences.astek.content.label') }}</p>
    </template>
    <template v-slot:extra>
      <p class="mt-2">{{ $t('experiences.astek.content.label-extra') }}</p>
      <i18n-t
        keypath="experiences.astek.content.list-extra.label"
        tag="ul"
        class="ml-4 mt-1"
        scope="global"
      >
        <template v-for="(_, i) in items" :key="i" v-slot:[`item-${i+1}`]>
          <li>{{ $t(`experiences.astek.content.list-extra.item-${i + 1}`) }}</li>
        </template>
      </i18n-t>
    </template>
  </CardTemplate>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CardTemplate from '@/components/experiences/helpers/CardTemplate.vue';

export default defineComponent({
  components: {
    CardTemplate,
  },
  props: {
    cardColor: { type: String },
    subtitleColor: { type: String },
    headerTextColor: { type: String },
    bodyTextColor: { type: String },
    iconColor: { type: String },
  },
  setup() {
    const items: undefined[] = Array(3);
    const skills = ['Node.JS', 'MongoDB', 'Elastic Search', 'Jira', 'Kanban'];
    return { items, skills };
  },
});
</script>
