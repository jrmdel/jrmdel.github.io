<template>
  <v-card dark :color="cardColor">
    <ExperienceTitle
      :title="cardTitle"
      :subtitle="cardSubtitle"
      :subtitleColor="subtitleColor"
    />

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
        @toggle="v => (displayMore = v)"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import ExpandButton from './ExpandButton.vue';
import ExperienceTitle from './ExperienceTitle.vue';
import InfoHeader from '../../helpers/InfoHeader.vue';
import SkillChips from '../../helpers/SkillChips.vue';

export default {
  components: {
    ExpandButton,
    ExperienceTitle,
    InfoHeader,
    SkillChips,
  },
  props: {
    cardColor: {
      type: String,
      default: '',
    },
    cardTitle: {
      type: String,
    },
    cardSubtitle: {
      type: String,
    },
    subtitleColor: {
      type: String,
      default: '',
    },
    dateString: {
      type: String,
    },
    locationString: {
      type: String,
    },
    iconColor: {
      type: String,
      default: '',
    },
    headerTextColor: {
      type: String,
      default: 'primaryWhite',
    },
    textColor: {
      type: String,
      default: '',
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    displayMore: false,
  }),
  computed: {
    computedTextColor: {
      get: function() {
        return this.textColor.length > 0 ? `${this.textColor}--text` : '';
      },
    },
    hasExtraSlot: {
      get: function() {
        return !!this.$slots.extra;
      },
    },
  },
};
</script>
