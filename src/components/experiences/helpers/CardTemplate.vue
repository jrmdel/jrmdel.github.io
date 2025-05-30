<template>
  <v-card :color="cardColor">
    <ExperienceTitle :title="cardTitle" :subtitle="cardSubtitle" :subtitleColor="subtitleColor" />

    <InfoHeader
      class="py-2"
      leftIcon="mdi-calendar-month"
      :leftText="dateString"
      rightIcon="mdi-map-marker-outline"
      :rightText="locationString"
      :iconColor="iconColor"
      :textColor="headerTextColor"
    />

    <v-card-text :class="computedTextColor">
      <slot name="content"></slot>
      <v-expand-transition>
        <div v-if="isExpanded">
          <slot name="extra"></slot>
        </div>
      </v-expand-transition>
    </v-card-text>
    <v-card-actions class="mt-n2">
      <SkillChips :skills="skills" chipColor="warning" />
      <ExpandButton :isDisabled="!$slots.extra" :displayMore="isExpanded" @toggle="onToggle" />
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ExpandButton from '@/components/experiences/helpers/ExpandButton.vue';
import ExperienceTitle from '@/components/experiences/helpers/ExperienceTitle.vue';
import InfoHeader from '@/components/helpers/InfoHeader.vue';
import SkillChips from '@/components/helpers/SkillChips.vue';
import { useColor } from '@/composables/useColor';

interface Props {
  cardColor: string;
  cardTitle: string;
  cardSubtitle: string;
  subtitleColor?: string;
  dateString: string;
  locationString: string;
  iconColor: string;
  headerTextColor: string;
  textColor?: string;
  skills: string[];
}
const { textColor } = defineProps<Props>();
const computedTextColor = useColor(textColor);
const isExpanded = ref(false);
const onToggle = (v: boolean) => {
  isExpanded.value = v;
};
</script>
