<template>
  <v-card color="primaryLight">
    <v-card-title class="text-h4 font-weight-light text-tertiary">Expériences</v-card-title>
    <v-card-text>
      <div class="hidden-xs">
        <v-timeline side="end" dense align="start">
          <v-timeline-item dot-color="primary" size="small">
            <Leocare
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
          <v-timeline-item dot-color="primary" size="small">
            <Swizi
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
          <v-timeline-item dot-color="primary" size="small">
            <Astek
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
          <v-timeline-item dot-color="primary" size="small">
            <Nokia
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
          <v-timeline-item v-show="displayMore" key="ericsson" dot-color="primary" size="small">
            <Ericsson
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
          <v-timeline-item v-show="displayMore" key="lunetterie" dot-color="primary" size="small">
            <Lunetterie
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
        </v-timeline>
        <SeeMore class="mt-4" :displayMore="displayMore" @toggle="(v) => (displayMore = v)" />
      </div>
      <div id="no-pdf" class="hidden-sm-and-up">
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <Leocare
                cardColor="primary"
                subtitleColor="tertiary"
                headerTextColor="primaryWhite"
                bodyTextColor="tertiary"
                iconColor="tertiary"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <Swizi
                cardColor="primary"
                subtitleColor="tertiary"
                headerTextColor="primaryWhite"
                bodyTextColor="tertiary"
                iconColor="tertiary"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <Astek
                cardColor="primary"
                subtitleColor="tertiary"
                headerTextColor="primaryWhite"
                bodyTextColor="tertiary"
                iconColor="tertiary"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <Nokia
                cardColor="primary"
                subtitleColor="tertiary"
                headerTextColor="primaryWhite"
                bodyTextColor="tertiary"
                iconColor="tertiary"
              />
            </v-col>
          </v-row>
          <v-expand-transition>
            <div v-show="displayMore" class="mt-3">
              <v-row>
                <v-col cols="12">
                  <Ericsson
                    cardColor="primary"
                    subtitleColor="tertiary"
                    headerTextColor="primaryWhite"
                    bodyTextColor="tertiary"
                    iconColor="tertiary"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <Lunetterie
                    cardColor="primary"
                    subtitleColor="tertiary"
                    headerTextColor="primaryWhite"
                    bodyTextColor="tertiary"
                    iconColor="tertiary"
                  />
                </v-col>
              </v-row>
            </div>
          </v-expand-transition>
          <SeeMore class="mt-4" :displayMore="displayMore" @toggle="(v) => (displayMore = v)" />
        </v-container>
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
    Leocare,
    Swizi,
    Astek,
    Nokia,
    Ericsson,
    SeeMore,
    Lunetterie,
  },
  data: () => ({
    displayMore: false,
  }),
});
</script>

<style>
.v-timeline--vertical.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__body {
  width: 100%;
}
</style>
