<template>
  <v-row no-gutters>
    <v-col cols="auto" v-for="(skill, i) in skills" :key="i">
      <v-chip
        :small="isSmall"
        class="tertiary--text"
        :class="chipMargin"
        :color="chipColor"
        >{{ skill }}</v-chip
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
    chipColor: {
      type: String,
      default: "warning",
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    chipMargin: {
      type: String,
      default: "ma-2",
    },
  },
};
</script>