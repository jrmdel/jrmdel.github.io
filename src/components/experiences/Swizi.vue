<template>
  <CardTemplate
    cardColor="primary"
    :cardTitle="$t('experiences.swizi.title')"
    :cardSubtitle="$t('experiences.swizi.company')"
    headerTextColor="primaryWhite"
    subtitleColor="tertiary"
    :dateString="$t('experiences.swizi.dates')"
    :locationString="$t('experiences.swizi.location')"
    iconColor="tertiary"
    textColor="tertiary"
    :skills="skills"
  >
    <template v-slot:content>
      <div class="d-flex flex-column ga-1">
        <p>{{ $t('experiences.swizi.content.label-1') }}</p>
        <i18n-t
          keypath="experiences.swizi.content.list-1.label"
          tag="ul"
          class="ml-4 mt-1"
          scope="global"
        >
          <template v-for="(_, i) in itemsFirstList" :key="i" v-slot:[`item-${i+1}`]>
            <li>{{ $t(`experiences.swizi.content.list-1.item-${i + 1}`) }}</li>
          </template>
        </i18n-t>
      </div>
      <div class="d-flex flex-column ga-1 mt-2">
        <i18n-t keypath="experiences.swizi.content.label-2" tag="p" scope="global">
          <template v-slot:italic-1>
            <span class="font-italic">{{ $t('experiences.swizi.content.accent.italic-1') }}</span>
          </template>
        </i18n-t>
        <i18n-t
          keypath="experiences.swizi.content.list-2.label"
          tag="ul"
          class="ml-4 mt-1"
          scope="global"
        >
          <template v-for="(_, i) in itemsSecondList" :key="i" v-slot:[`item-${i+1}`]>
            <li>{{ $t(`experiences.swizi.content.list-2.item-${i + 1}`) }}</li>
          </template>
          <template v-slot:italic-2>
            <span class="font-italic">{{ $t('experiences.swizi.content.accent.italic-2') }}</span>
          </template>
        </i18n-t>
      </div>
    </template>
  </CardTemplate>
</template>

<script setup lang="ts">
import CardTemplate from '@/components/experiences/helpers/CardTemplate.vue';

const itemsFirstList: undefined[] = Array(2);
const itemsSecondList: undefined[] = Array(5);
const skills = ['Node.JS', 'Python', 'Pandas', 'Azure Synapse', 'PowerBI'];
</script>
