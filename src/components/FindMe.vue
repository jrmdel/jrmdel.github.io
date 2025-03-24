<template>
  <div>
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col>Retrouvez-moi</v-col>
      </v-row>
      <!--Standard display except on medium screens-->
      <v-row align="center" justify="space-around" class="pa-4 hidden-md-and-up">
        <v-tooltip :color="tooltipColor" location="bottom" v-for="(site, i) in sites" :key="i">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" fab :color="site.back" :href="site.link" target="_blank">
              <v-icon :color="site.logo" x-large>
                {{ site.icon }}
              </v-icon>
            </v-btn>
          </template>
          <span :class="computedTextColor">
            {{ site.text }}
          </span>
        </v-tooltip>
      </v-row>
      <!--Visible as 2 rows only on md-->
      <v-row id="no-pdf" align="center" class="pa-4 hidden-sm-and-down">
        <v-col cols="6" v-for="(site, i) in sites" :key="i">
          <v-row justify="center" class="mb-4 mb-md-8">
            <v-tooltip :color="tooltipColor" location="bottom" transition="scale-transition">
              <template v-slot:activator="{ props }">
                <v-btn fab v-bind="props" :color="site.back" :href="site.link" target="_blank">
                  <v-icon :color="site.logo" x-large>
                    {{ site.icon }}
                  </v-icon>
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
    tooltipColor: { type: String },
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
