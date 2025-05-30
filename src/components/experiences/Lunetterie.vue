<template>
  <CardTemplate
    :cardColor="cardColor"
    cardTitle="Opticien diplômé"
    cardSubtitle="La Lunetterie"
    :headerTextColor="headerTextColor"
    :subtitleColor="subtitleColor"
    dateString="Août 2014 - Juin 2016"
    locationString="Annecy, France"
    :iconColor="iconColor"
    :textColor="bodyTextColor"
    :skills="skills"
  >
    <template v-slot:extra>
      <p class="mt-2">
        {{ $t('experiences.lunetterie.content.label-extra') }}
      </p>
      <i18n-t
        keypath="experiences.lunetterie.content.list-extra.label"
        tag="ul"
        class="ml-4 mt-1"
        scope="global"
      >
        <template v-for="(_, i) in items" :key="i" v-slot:[`item-${i+1}`]>
          <li>{{ $t(`experiences.lunetterie.content.list-extra.item-${i + 1}`) }}</li>
        </template>
      </i18n-t>
    </template>
  </CardTemplate>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import CardTemplate from '@/components/experiences/helpers/CardTemplate.vue';

interface Props {
  cardColor: string;
  subtitleColor: string;
  headerTextColor: string;
  bodyTextColor: string;
  iconColor: string;
}
defineProps<Props>();

const { t } = useI18n();
const items: undefined[] = Array(3);
const skills = computed(() => [
  t('experiences.lunetterie.skills.optometry'),
  t('experiences.lunetterie.skills.customer'),
  t('experiences.lunetterie.skills.organization'),
]);
</script>
