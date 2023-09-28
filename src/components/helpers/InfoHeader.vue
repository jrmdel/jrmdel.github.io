<template>
  <v-card-subtitle class="mt-n3 text-subtitle-2">
    <v-row align="center" justify="space-between">
      <v-col class="d-flex align-center" cols="auto">
        <v-icon :color="iconColor">
          {{ leftIcon }}
        </v-icon>
        <span class="ml-2" :class="computedTextColor">{{ leftText }}</span>
      </v-col>
      <v-col class="d-flex align-center" cols="auto" v-show="hasRightData">
        <v-icon :color="iconColor">
          {{ rightIcon }}
        </v-icon>
        <span class="ml-2" :class="computedTextColor">{{ rightText }}</span>
      </v-col>
    </v-row>
  </v-card-subtitle>
</template>

<script>
export default {
  props: {
    leftIcon: {
      type: String,
    },
    leftText: {
      type: String,
    },
    rightIcon: {
      type: String,
      default: "",
    },
    rightText: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
    },
    textColor: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedTextColor: {
      get: function () {
        return this.textColor.length > 0 ? `${this.textColor}--text` : "";
      },
    },
    hasRightData: {
      get: function () {
        return this.rightIcon.length > 0 && this.rightText.length > 0;
      },
    },
  },
};
</script>