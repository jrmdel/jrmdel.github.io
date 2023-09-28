<template>
  <v-card :color="cardColor">
    <v-card-title class="text-wrap mb-n6" :class="computedTitleColor">{{
      title
    }}</v-card-title>

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
      <SkillChips
        :skills="skills"
        :chipColor="skillColor"
        :isSmall="true"
        chipMargin="my-1 ml-2"
      />
      <v-spacer />
      <v-btn
        small
        rounded
        v-show="hasLink"
        color="primaryWhite"
        text
        target="_blank"
        :href="link"
      >
        <v-icon>mdi-open-in-new</v-icon>
        <span class="ml-1">Open</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import InfoHeader from "../../helpers/InfoHeader.vue";
import SkillChips from "../../helpers/SkillChips.vue";

export default {
  components: {
    InfoHeader,
    SkillChips,
  },
  props: {
    cardColor: {
      type: String,
    },
    titleColor: {
      type: String,
      default: "",
    },
    title: {
      type: String,
    },
    headerTextColor: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
    },
    leftIcon: {
      type: String,
    },
    rightIcon: {
      type: String,
    },
    leftText: {
      type: String,
    },
    rightText: {
      type: String,
    },
    textColor: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    skills: {
      type: Array,
      default: () => [],
    },
    skillColor: {
      type: String,
      default: "warning",
    },
  },
  computed: {
    hasLink: {
      get: function () {
        return this.link.length > 0;
      },
    },
    computedTextColor: {
      get: function () {
        return this.textColor.length > 0 ? `${this.textColor}--text` : "";
      },
    },
    computedTitleColor: {
      get: function () {
        return this.titleColor.length > 0 ? `${this.titleColor}--text` : "";
      },
    },
  },
};
</script>