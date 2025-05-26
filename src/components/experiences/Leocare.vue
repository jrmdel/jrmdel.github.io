<template>
  <CardTemplate
    cardColor="primary"
    :cardTitle="$t('experiences.leocare.title')"
    :cardSubtitle="$t('experiences.leocare.company')"
    headerTextColor="primaryWhite"
    subtitleColor="tertiary"
    :dateString="$t('experiences.leocare.dates')"
    :locationString="$t('experiences.leocare.location')"
    iconColor="tertiary"
    textColor="tertiary"
    :skills="skills"
  >
    <template v-slot:content>
      <i18n-t keypath="experiences.leocare.content.label" tag="p" scope="global">
        <template v-slot:italic-1>
          <span class="font-italic">{{ $t('experiences.leocare.content.accent.italic-1') }}</span>
        </template>
      </i18n-t>
      <i18n-t
        keypath="experiences.leocare.content.list.label"
        tag="ul"
        class="ml-4 mt-1"
        scope="global"
      >
        <template v-for="(_, i) in items" :key="i" v-slot:[`item-${i+1}`]>
          <li>{{ $t(`experiences.leocare.content.list.item-${i + 1}`) }}</li>
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
  setup() {
    const items: undefined[] = Array(4);
    const skills = ['Angular', 'Nest.JS', 'MongoDB', 'Jest'];

    return { items, skills };
  },
});
</script>
