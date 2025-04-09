<template>
  <div>
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col>Retrouvez-moi</v-col>
      </v-row>
      <!--Standard display except on medium screens-->
      <v-row align="center" justify="space-around" class="pa-4 hidden-md-and-up">
        <v-tooltip v-for="(site, i) in sites" :key="i" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="flat"
              :color="site.back"
              :href="site.link"
              :icon="site.icon"
              target="_blank"
              size="large"
            >
              <template v-slot:default>
                <v-icon :color="site.logo" size="x-large"> </v-icon>
              </template>
            </v-btn>
          </template>
          <span :class="computedTextColor">
            {{ site.text }}
          </span>
        </v-tooltip>
      </v-row>
      <!--Visible as 2 rows only on md-->
      <v-row id="no-pdf" align="center" class="pa-4 hidden-sm-and-down">
        <v-col v-for="(site, i) in sites" :key="i" cols="6">
          <v-row justify="center" class="mb-4 mb-md-8">
            <v-tooltip location="bottom" transition="scale-transition">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  variant="flat"
                  :color="site.back"
                  :href="site.link"
                  :icon="site.icon"
                  target="_blank"
                  size="large"
                >
                  <template v-slot:default>
                    <v-icon :color="site.logo" size="x-large"> </v-icon>
                  </template>
                </v-btn>
              </template>
              <span :class="computedTextColor">
                {{ site.text }}
              </span>
            </v-tooltip>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useColor } from '@/composables/useColor';

export default defineComponent({
  props: {
    titleColor: { type: String, default: '' },
    textColor: { type: String, default: '' },
  },
  setup(props) {
    const computedTitleColor = useColor(props.titleColor);
    const computedTextColor = useColor(props.textColor);

    return {
      computedTitleColor,
      computedTextColor,
    };
  },
  data: () => ({
    sites: [
      {
        text: 'Sur GitHub',
        icon: 'mdi-github',
        link: 'https://github.com/jrmdel',
        logo: 'black',
        back: 'white',
      },
      {
        text: 'Sur StackOverflow',
        icon: 'mdi-stack-overflow',
        link: 'https://stackoverflow.com/users/12194386',
        logo: '#f48024',
        back: 'white',
      },
      {
        text: 'Sur LinkedIn',
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/jeremie-deletraz/',
        logo: '#006192',
        back: 'white',
      },
      {
        text: 'Sur Strava',
        icon: 'custom:strava',
        link: 'https://www.strava.com/athletes/2740041',
        logo: '#FC4C02',
        back: 'white',
      },
    ],
  }),
});
</script>
