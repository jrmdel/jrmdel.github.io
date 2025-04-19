import { h } from 'vue';
import type { IconProps, IconSet } from 'vuetify';

import mongodb from '@/components/icons/MongoDb.vue';
import mysql from '@/components/icons/MySql.vue';
import nestjs from '@/components/icons/NestJs.vue';
import postgre from '@/components/icons/Postgre.vue';
import powerbi from '@/components/icons/PowerBi.vue';
import strava from '@/components/icons/Strava.vue';

const customSvgNameToComponent: any = {
  nestjs,
  powerbi,
  postgre,
  mysql,
  mongodb,
  strava,
};

const customIcons: IconSet = {
  component: (props: IconProps) =>
    h(customSvgNameToComponent[props.icon as string], { class: 'v-icon__svg' }),
};

export { customIcons };
