<template>
  <v-card dark :color="cardColor">
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
        <div v-if="displayMore">
          <slot name="extra"></slot>
        </div>
      </v-expand-transition>
    </v-card-text>
    <v-card-actions class="mt-n2">
      <SkillChips :skills="skills" chipColor="warning" />
      <ExpandButton
        :isDisabled="!hasExtraSlot"
        :displayMore="displayMore"
        @toggle="(v: boolean) => (displayMore = v)"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ExpandButton from '@/components/experiences/helpers/ExpandButton.vue';
import ExperienceTitle from '@/components/experiences/helpers/ExperienceTitle.vue';
import InfoHeader from '@/components/helpers/InfoHeader.vue';
import SkillChips from '@/components/helpers/SkillChips.vue';
import { useColor } from '@/composables/useColor';

export default defineComponent({
  components: {
    ExpandButton,
    ExperienceTitle,
    InfoHeader,
    SkillChips,
  },
  props: {
    cardColor: { type: String, default: '' },
    cardTitle: { type: String },
    cardSubtitle: { type: String },
    subtitleColor: { type: String, default: '' },
    dateString: { type: String },
    locationString: { type: String },
    iconColor: { type: String, default: '' },
    headerTextColor: { type: String, default: 'primaryWhite' },
    textColor: { type: String, default: '' },
    skills: { type: Array, default: () => [] },
  },
  setup(props) {
    const computedTextColor = useColor(props.textColor);

    return { computedTextColor };
  },
  data: () => ({
    displayMore: false,
  }),
  computed: {
    hasExtraSlot() {
      return !!this.$slots.extra;
    },
  },
});
</script>
