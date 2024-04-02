<template>
  <v-card class="primaryLight">
    <v-card-title class="text-h4 font-weight-light tertiary--text"
      >Expériences</v-card-title
    >
    <v-card-text>
      <div class="hidden-xs-only">
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
        <SeeMore
          class="mt-2"
          :displayMore="displayMore"
          @toggle="v => (displayMore = v)"
        />
      </div>
      <div class="hidden-sm-and-up">
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
          <SeeMore
            class="mt-2"
            :displayMore="displayMore"
            @toggle="v => (displayMore = v)"
          />
        </v-container>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Leocare from './experiences/Leocare.vue';
import Swizi from './experiences/Swizi.vue';
import Astek from './experiences/Astek.vue';
import Nokia from './experiences/Nokia.vue';
import Ericsson from './experiences/Ericsson.vue';
import SeeMore from './helpers/SeeMore.vue';
import Lunetterie from './experiences/Lunetterie.vue';

export default {
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
};
</script>
