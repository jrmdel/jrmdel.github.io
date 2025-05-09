<template>
  <CardTemplate
    :cardColor="cardColor"
    :cardTitle="$t('experiences.nokia.title')"
    :cardSubtitle="$t('experiences.nokia.company')"
    :headerTextColor="headerTextColor"
    :subtitleColor="subtitleColor"
    :dateString="$t('experiences.nokia.dates')"
    :locationString="$t('experiences.nokia.location')"
    :iconColor="iconColor"
    :textColor="bodyTextColor"
    :skills="skills"
  >
    <template v-slot:content>
      <p>{{ $t('experiences.nokia.content.label') }}</p>
    </template>
    <template v-slot:extra>
      <div class="d-flex flex-column ga-1">
        <p>{{ $t('experiences.nokia.content.label-extra-1') }}</p>
        <i18n-t
          keypath="experiences.nokia.content.list-extra-1.label"
          tag="ul"
          class="ml-4"
          scope="global"
        >
          <template v-for="(_, i) in items" :key="i" v-slot:[`item-${i+1}`]>
            <li>{{ $t(`experiences.nokia.content.list-extra-1.item-${i + 1}`) }}</li>
          </template>
        </i18n-t>
        <p>{{ $t('experiences.nokia.content.label-extra-2') }}</p>
        <i18n-t
          keypath="experiences.nokia.content.list-extra-2.label"
          tag="ul"
          class="ml-4"
          scope="global"
        >
          <template v-for="(_, i) in items" :key="i" v-slot:[`item-${i+1}`]>
            <li>{{ $t(`experiences.nokia.content.list-extra-2.item-${i + 1}`) }}</li>
          </template>
        </i18n-t>
      </div>
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
    const items: undefined[] = Array(4);
    const skills = ['Node.JS', 'Vue.JS', 'MongoDB', 'Git', 'Linux'];
    return { items, skills };
  },
});
</script>
