<template>
  <div>
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col>{{ $t('find-me.title') }}</v-col>
      </v-row>
      <!--Standard display except on medium screens-->
      <v-row align="center" justify="space-around" class="pa-4 hidden-md-and-up">
        <v-tooltip v-for="(site, i) in sites" :key="i" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="flat"
              :color="site.backgroundColor"
              :href="site.link"
              :icon="site.icon"
              target="_blank"
              size="large"
            >
              <template v-slot:default>
                <v-icon :color="site.iconColor" size="x-large"> </v-icon>
              </template>
            </v-btn>
          </template>
          <span :class="computedTextColor">
            {{ site.text }}
          </span>
        </v-tooltip>
      </v-row>
      <!--Visible as 2 rows only on md-->
      <v-row align="center" class="pa-4 hidden-sm-and-down">
        <v-col v-for="(site, i) in sites" :key="i" cols="6">
          <v-row justify="center" class="mb-4 mb-md-8">
            <v-tooltip location="bottom" transition="scale-transition">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  variant="flat"
                  :color="site.backgroundColor"
                  :href="site.link"
                  :icon="site.icon"
                  target="_blank"
                  size="large"
                >
                  <template v-slot:default>
                    <v-icon :color="site.iconColor" size="x-large"> </v-icon>
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

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { useColor } from '@/composables/useColor';

interface Props {
  titleColor?: string;
  textColor?: string;
}
const { titleColor, textColor } = defineProps<Props>();
const computedTitleColor = useColor(titleColor);
const computedTextColor = useColor(textColor);

interface ISite {
  text: string;
  icon: string;
  link: string;
  iconColor: string;
  backgroundColor: string;
}
const { t } = useI18n();
const sites = computed<ISite[]>(() => [
  {
    text: t('find-me.github'),
    icon: 'mdi-github',
    link: 'https://github.com/jrmdel',
    iconColor: 'black',
    backgroundColor: 'white',
  },
  {
    text: t('find-me.stackoverflow'),
    icon: 'mdi-stack-overflow',
    link: 'https://stackoverflow.com/users/12194386',
    iconColor: '#f48024',
    backgroundColor: 'white',
  },
  {
    text: t('find-me.linkedin'),
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/in/jeremie-deletraz/',
    iconColor: '#006192',
    backgroundColor: 'white',
  },
  {
    text: t('find-me.strava'),
    icon: 'custom:strava',
    link: 'https://www.strava.com/athletes/2740041',
    iconColor: '#FC4C02',
    backgroundColor: 'white',
  },
]);
</script>
