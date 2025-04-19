<template>
  <v-btn
    v-if="!isDisabled"
    class="mx-2"
    variant="text"
    icon="mdi-chevron-down"
    :retain-focus-on-click="false"
    @click="sendToggle"
  >
    <template v-slot:default>
      <v-icon class="toggleUpDown" :class="{ rotate: displayMore }"></v-icon>
    </template>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    displayMore: { type: Boolean, default: true },
    isDisabled: { type: Boolean, default: false },
  },
  methods: {
    sendToggle(): void {
      this.$emit('toggle', !this.displayMore);
    },
  },
});
</script>

<style scoped>
.toggleUpDown {
  transition: transform 0.3s ease-in-out !important;
}

.toggleUpDown.rotate {
  transform: rotate(180deg);
}
</style>
