<template>
  <v-card color="primaryLight">
    <v-card-title class="text-h4 font-weight-light text-tertiary">Expériences</v-card-title>
    <v-card-text>
      <div class="hidden-xs">
        <v-timeline dense align-top>
          <v-timeline-item small color="primary">
            <Leocare
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
          <v-timeline-item small color="primary">
            <Swizi
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
          <v-timeline-item small color="primary">
            <Astek
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
          <v-timeline-item small color="primary">
            <Nokia
              cardColor="primary"
              subtitleColor="tertiary"
              headerTextColor="primaryWhite"
              bodyTextColor="tertiary"
              iconColor="tertiary"
            />
          </v-timeline-item>
          <v-expand-transition>
            <div v-show="displayMore">
              <v-timeline-item small color="primary">
                <Ericsson
                  cardColor="primary"
                  subtitleColor="tertiary"
                  headerTextColor="primaryWhite"
                  bodyTextColor="tertiary"
                  iconColor="tertiary"
                />
              </v-timeline-item>
              <v-timeline-item small color="primary">
                <Lunetterie
                  cardColor="primary"
                  subtitleColor="tertiary"
                  headerTextColor="primaryWhite"
                  bodyTextColor="tertiary"
                  iconColor="tertiary"
                />
              </v-timeline-item>
            </div>
          </v-expand-transition>
        </v-timeline>
        <SeeMore class="mt-2" :displayMore="displayMore" @toggle="(v) => (displayMore = v)" />
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
            <div v-show="displayMore">
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
          <SeeMore class="mt-2" :displayMore="displayMore" @toggle="(v) => (displayMore = v)" />
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
