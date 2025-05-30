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

<script setup lang="ts">
interface Props {
  displayMore: boolean;
  isDisabled?: boolean;
}
const { displayMore, isDisabled = false } = defineProps<Props>();

const emit = defineEmits<{ (e: 'toggle', value: boolean): void }>();
const sendToggle = () => {
  emit('toggle', !displayMore);
};
</script>

<style scoped>
.toggleUpDown {
  transition: transform 0.3s ease-in-out !important;
}

.toggleUpDown.rotate {
  transform: rotate(180deg);
}
</style>
