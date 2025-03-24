<template>
  <div class="d-flex justify-center">
    <v-btn
      rounded="pill"
      variant="outlined"
      color="primary"
      :retain-focus-on-click="false"
      @click="sendToggle"
    >
      <v-icon color="tertiary" class="toggleUpDown" :class="{ rotate: displayMore }">
        {{ iconDisplay ? 'mdi-minus' : 'mdi-plus' }}
      </v-icon>
      <span class="text-tertiary">
        {{ iconDisplay ? 'Voir moins' : 'Voir plus' }}
      </span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    displayMore: { type: Boolean, default: false },
  },
  watch: {
    displayMore: {
      handler(v) {
        if (v != null) {
          setTimeout(() => {
            this.iconDisplay = v;
          }, 150);
        }
      },
    },
  },
  data: () => ({
    iconDisplay: false,
  }),
  methods: {
    sendToggle() {
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
