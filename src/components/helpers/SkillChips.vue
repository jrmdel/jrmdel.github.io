<template>
  <v-row no-gutters>
    <v-col cols="auto" v-for="(skill, i) in skills" :key="i">
      <v-chip :small="isSmall" :class="chipMargin" :color="chipColor" variant="flat">
        {{ skill }}
      </v-chip>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    skills: { type: Array, default: () => [] },
    chipColor: { type: String, default: 'warning' },
    isSmall: { type: Boolean, default: false },
    chipMargin: { type: String, default: 'ma-2' },
  },
});
</script>
