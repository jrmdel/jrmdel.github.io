<template>
  <v-card color="primaryLight">
    <v-card-title class="text-h4 font-weight-light text-tertiary">{{
      $t('experiences.title')
    }}</v-card-title>
    <v-card-text>
      <div class="d-flex flex-column ga-4">
        <Leocare
          cardColor="primary"
          subtitleColor="tertiary"
          headerTextColor="primaryWhite"
          bodyTextColor="tertiary"
          iconColor="tertiary"
        />
        <Swizi
          cardColor="primary"
          subtitleColor="tertiary"
          headerTextColor="primaryWhite"
          bodyTextColor="tertiary"
          iconColor="tertiary"
        />
        <Astek
          cardColor="primary"
          subtitleColor="tertiary"
          headerTextColor="primaryWhite"
          bodyTextColor="tertiary"
          iconColor="tertiary"
        />
        <Nokia
          cardColor="primary"
          subtitleColor="tertiary"
          headerTextColor="primaryWhite"
          bodyTextColor="tertiary"
          iconColor="tertiary"
        />
        <v-expand-transition>
          <div v-show="isExpanded">
            <div class="d-flex flex-column ga-4">
              <Ericsson
                cardColor="primary"
                subtitleColor="tertiary"
                headerTextColor="primaryWhite"
                bodyTextColor="tertiary"
                iconColor="tertiary"
              />
              <Lunetterie
                cardColor="primary"
                subtitleColor="tertiary"
                headerTextColor="primaryWhite"
                bodyTextColor="tertiary"
                iconColor="tertiary"
              />
            </div>
          </div>
        </v-expand-transition>
        <SeeMore id="no-pdf" :display-more="isExpanded" @toggle="onToggle" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Astek from '@/components/experiences/Astek.vue';
import Ericsson from '@/components/experiences/Ericsson.vue';
import Leocare from '@/components/experiences/Leocare.vue';
import Lunetterie from '@/components/experiences/Lunetterie.vue';
import Nokia from '@/components/experiences/Nokia.vue';
import Swizi from '@/components/experiences/Swizi.vue';
import SeeMore from '@/components/helpers/SeeMore.vue';

const isExpanded = ref(false);
const onToggle = (value: boolean) => {
  isExpanded.value = value;
};
</script>
