<template>
  <v-row no-gutters>
    <v-col v-for="(skill, i) in skills" :key="i" cols="auto">
      <v-chip :small="isSmall" :class="chipMargin" :color="chipColor" variant="flat">
        {{ skill }}
      </v-chip>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface Props {
  skills: string[];
  chipColor: string;
  isSmall?: boolean;
  chipMargin?: string;
}
const { isSmall = false, chipMargin = 'ma-2' } = defineProps<Props>();
</script>
