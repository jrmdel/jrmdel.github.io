<template>
  <v-card :color="cardColor">
    <v-card-title class="text-wrap mb-n4" :class="computedTitleColor">{{ title }}</v-card-title>

    <InfoHeader
      :iconColor="iconColor"
      :textColor="headerTextColor"
      :leftIcon="leftIcon"
      :leftText="leftText"
      :rightIcon="rightIcon"
      :rightText="rightText"
    />

    <v-card-text class="mt-n3" :class="computedTextColor">
      <slot name="content"></slot>
    </v-card-text>

    <v-card-actions class="mt-n3">
      <SkillChips :skills="skills" :chipColor="skillColor" :isSmall="true" chipMargin="my-1 ml-2" />
      <v-spacer />
      <v-btn
        v-show="hasLink"
        size="small"
        rounded="pill"
        color="primaryWhite"
        variant="text"
        target="_blank"
        :href="link"
      >
        <v-icon>mdi-open-in-new</v-icon>
        <span class="ml-1">{{ $t('projects.link-text') }}</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import InfoHeader from '@/components/helpers/InfoHeader.vue';
import SkillChips from '@/components/helpers/SkillChips.vue';
import { useColor } from '@/composables/useColor';

interface Props {
  cardColor: string;
  titleColor?: string;
  title: string;
  headerTextColor?: string;
  iconColor: string;
  leftIcon: string;
  rightIcon: string;
  leftText: string;
  rightText: string;
  textColor?: string;
  link?: string;
  skills?: string[];
  skillColor?: string;
}
const { titleColor, textColor, link, skillColor = 'warning', skills = [] } = defineProps<Props>();
const computedTitleColor = useColor(titleColor);
const computedTextColor = useColor(textColor);
const hasLink = computed(() => link?.length);
</script>
