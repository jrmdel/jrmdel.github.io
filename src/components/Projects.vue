<template>
  <v-card class="mt-6" color="primaryLight">
    <v-card-title class="text-h4 font-weight-light text-tertiary">
      {{ $t('projects.title') }}
    </v-card-title>
    <v-card-text>
      <!--On large devices-->
      <v-row class="hidden-md-and-down">
        <v-col cols="12" sm="6">
          <v-row>
            <v-col cols="12">
              <TicketToRide
                cardColor="primary"
                titleColor="white"
                textColor="tertiary"
                headerTextColor="primaryWhite"
                iconColor="tertiary"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <NLP
                cardColor="tertiary"
                titleColor="white"
                textColor="primaryWhite"
                headerTextColor="primaryLight"
                iconColor="primary"
              />
            </v-col>
          </v-row>
          <v-expand-transition>
            <v-row v-show="displayMore">
              <v-col cols="12">
                <CityCompass
                  cardColor="primary"
                  titleColor="white"
                  textColor="tertiary"
                  headerTextColor="primaryWhite"
                  iconColor="tertiary"
                />
              </v-col>
            </v-row>
          </v-expand-transition>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row>
            <v-col cols="12">
              <MetalData
                cardColor="tertiary"
                titleColor="white"
                textColor="primaryWhite"
                headerTextColor="primaryLight"
                iconColor="primary"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <TrainGraph
                cardColor="primary"
                titleColor="white"
                textColor="tertiary"
                headerTextColor="primaryWhite"
                iconColor="tertiary"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="mt-n2">
          <SeeMore id="no-pdf" :displayMore="displayMore" @toggle="toggleMore" />
        </v-col>
      </v-row>
      <!--On small devices-->
      <v-row class="hidden-lg-and-up">
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <TicketToRide
                cardColor="primary"
                titleColor="white"
                textColor="tertiary"
                headerTextColor="primaryWhite"
                iconColor="tertiary"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <MetalData
                cardColor="tertiary"
                titleColor="white"
                textColor="primaryWhite"
                headerTextColor="primaryLight"
                iconColor="primary"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <TrainGraph
                cardColor="primary"
                titleColor="white"
                textColor="tertiary"
                headerTextColor="primaryWhite"
                iconColor="tertiary"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <NLP
                cardColor="tertiary"
                titleColor="white"
                textColor="primaryWhite"
                headerTextColor="primaryLight"
                iconColor="primary"
              />
            </v-col>
          </v-row>
          <v-expand-transition>
            <v-row v-show="displayMore">
              <v-col cols="12">
                <CityCompass
                  cardColor="primary"
                  titleColor="white"
                  textColor="tertiary"
                  headerTextColor="primaryWhite"
                  iconColor="tertiary"
                />
              </v-col>
            </v-row>
          </v-expand-transition>
          <SeeMore id="no-pdf" class="mt-4" :displayMore="displayMore" @toggle="toggleMore" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import SeeMore from '@/components/helpers/SeeMore.vue';
import CityCompass from '@/components/projects/CityCompass.vue';
import MetalData from '@/components/projects/MetalData.vue';
import NLP from '@/components/projects/NLP.vue';
import TicketToRide from '@/components/projects/TicketToRide.vue';
import TrainGraph from '@/components/projects/TrainGraph.vue';

const displayMore = ref(false);
const toggleMore = () => {
  displayMore.value = !displayMore.value;
};
</script>
