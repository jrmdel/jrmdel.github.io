<template>
  <CardTemplate
    :cardColor="cardColor"
    :cardTitle="$t('experiences.ericsson.title')"
    :cardSubtitle="$t('experiences.ericsson.company')"
    :headerTextColor="headerTextColor"
    :subtitleColor="subtitleColor"
    :dateString="$t('experiences.ericsson.dates')"
    :locationString="$t('experiences.ericsson.location')"
    :iconColor="iconColor"
    :textColor="bodyTextColor"
    :skills="skills"
  >
    <template v-slot:content>
      <p>
        {{ $t('experiences.ericsson.content.label') }}
      </p>
    </template>
    <template v-slot:extra>
      <div class="d-flex flex-column ga-1">
        <p>{{ $t('experiences.ericsson.content.label-extra-1') }}</p>
        <i18n-t
          keypath="experiences.ericsson.content.list-extra-1.label"
          tag="ul"
          class="ml-4 mt-1"
          scope="global"
        >
          <template v-for="(_, i) in items" :key="i" v-slot:[`item-${i+1}`]>
            <li>{{ $t(`experiences.ericsson.content.list-extra-1.item-${i + 1}`) }}</li>
          </template>
        </i18n-t>
        <p>{{ $t('experiences.ericsson.content.label-extra-2') }}</p>
        <i18n-t
          keypath="experiences.ericsson.content.list-extra-2.label"
          tag="ul"
          class="ml-4 mt-1"
          scope="global"
        >
          <template v-for="(_, i) in items" :key="i" v-slot:[`item-${i+1}`]>
            <li>{{ $t(`experiences.ericsson.content.list-extra-2.item-${i + 1}`) }}</li>
          </template>
        </i18n-t>
      </div>
    </template>
  </CardTemplate>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

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
    const { t } = useI18n();
    const items: undefined[] = Array(3);
    const skills = computed(() => [
      t('experiences.ericsson.skills.java'),
      t('experiences.ericsson.skills.mysql'),
      t('experiences.ericsson.skills.rest'),
      t('experiences.ericsson.skills.redmine'),
      t('experiences.ericsson.skills.agile'),
    ]);
    return { items, skills };
  },
});
</script>
