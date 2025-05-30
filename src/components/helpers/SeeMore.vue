<template>
  <div class="d-flex justify-center">
    <v-btn
      rounded="pill"
      variant="outlined"
      color="primary"
      :retain-focus-on-click="false"
      @click="sendToggle"
    >
      <v-icon color="tertiary" class="toggle" :class="{ rotate: displayMore }">
        {{ icon }}
      </v-icon>
      <span class="text-tertiary">
        {{ $t(text) }}
      </span>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface Props {
  displayMore: boolean;
}
const { displayMore = false } = defineProps<Props>();

const getIcon = (value: boolean) => (value ? 'mdi-minus' : 'mdi-plus');
const icon = ref(getIcon(displayMore));
const text = computed(() => {
  return icon.value === 'mdi-minus' ? 'common.buttons.see-less' : 'common.buttons.see-more';
});

watch(
  () => displayMore,
  (newVal) => {
    setTimeout(() => {
      icon.value = getIcon(newVal);
    }, 150);
  },
  { immediate: true }
);

const emit = defineEmits<{ (e: 'toggle', value: boolean): void }>();
const sendToggle = () => {
  emit('toggle', !displayMore);
};
</script>

<style scoped>
.toggle {
  transition: transform 0.3s ease-in-out !important;
}

.toggle.rotate {
  transform: rotate(180deg);
}
</style>
