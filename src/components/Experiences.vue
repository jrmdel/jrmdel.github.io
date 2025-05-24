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
          <div v-show="displayMore">
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
        <SeeMore id="no-pdf" :displayMore="displayMore" @toggle="toggleMore" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Astek from '@/components/experiences/Astek.vue';
import Ericsson from '@/components/experiences/Ericsson.vue';
import Leocare from '@/components/experiences/Leocare.vue';
import Lunetterie from '@/components/experiences/Lunetterie.vue';
import Nokia from '@/components/experiences/Nokia.vue';
import Swizi from '@/components/experiences/Swizi.vue';
import SeeMore from '@/components/helpers/SeeMore.vue';

export default defineComponent({
  components: {
    Astek,
    Ericsson,
    Leocare,
    Lunetterie,
    Nokia,
    SeeMore,
    Swizi,
  },
  data: () => ({
    displayMore: false,
  }),
  methods: {
    toggleMore() {
      this.displayMore = !this.displayMore;
    },
  },
});
</script>
