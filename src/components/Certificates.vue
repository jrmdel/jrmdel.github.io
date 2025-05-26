<template>
  <div class="mt-2">
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col> {{ $t('certificates.title') }} </v-col>
      </v-row>
      <!--Visible except on xs and medium screens-->
      <v-row
        v-for="(certificate, i) in certificates"
        :key="i"
        align="center"
        class="px-2 hidden-xs hidden-md"
      >
        <v-col cols="auto">
          <v-row class="my-n1" no-gutters align="center">
            <v-icon class="mr-2" small :color="iconColor"> mdi-certificate-outline </v-icon>
            <span class="text-subtitle-2" :class="computedTextColor">
              {{ certificate.year }}
            </span>
          </v-row>
        </v-col>
        <v-col class="d-flex">
          <span
            class="font-weight-medium d-flex align-center"
            :class="computedCertificateTextColor"
          >
            {{ certificate.title }}
          </span>
        </v-col>
        <v-col v-if="certificate.score" cols="auto">
          <v-icon small color="warning" class="mr-2"> mdi-chart-box-outline </v-icon>
          <a
            v-if="certificate.link"
            class="text-subtitle-2"
            :class="computedTextColor"
            :href="certificate.link"
            target="_blank"
          >
            {{ certificate.score }}
          </a>
          <span v-else class="text-subtitle-2" :class="computedTextColor">{{
            certificate.score
          }}</span>
        </v-col>
      </v-row>
      <!--Only on extra-small and medium-->
      <v-row class="hidden-sm hidden-lg-and-up" no-gutters>
        <v-col v-for="(certificate, i) in certificates" :key="i" cols="12" class="my-1">
          <v-divider></v-divider>
          <v-card variant="text">
            <v-card-title>
              <span
                class="text-subtitle-1 font-weight-medium"
                :class="computedCertificateTextColor"
              >
                {{ certificate.title }}
              </span>
            </v-card-title>
            <v-card-text>
              <v-row align="center" justify="space-between">
                <v-col cols="auto">
                  <v-row class="my-n1" no-gutters align="center">
                    <v-icon class="mr-2" small :color="iconColor"> mdi-certificate-outline </v-icon>
                    <span class="text-subtitle-2" :class="computedTextColor">
                      {{ certificate.year }}
                    </span>
                  </v-row>
                </v-col>
                <v-col v-if="certificate.score" cols="auto">
                  <v-icon class="mr-2" small color="warning"> mdi-chart-box-outline </v-icon>
                  <a
                    v-if="certificate.link"
                    class="text-subtitle-2"
                    :class="computedTextColor"
                    :href="certificate.link"
                    target="_blank"
                  >
                    {{ certificate.score }}
                  </a>
                  <span v-else class="text-subtitle-2" :class="computedTextColor">{{
                    certificate.score
                  }}</span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="hidden-sm hidden-lg-and-up" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useColor } from '@/composables/useColor';

interface ICertificate {
  title: string;
  score: string;
  year: string;
  link?: string;
}

export default defineComponent({
  props: {
    titleColor: { type: String, default: '' },
    certificateTextColor: { type: String, default: '' },
    textColor: { type: String, default: '' },
    iconColor: { type: String, default: '' },
  },
  setup(props) {
    const computedTitleColor = useColor(props.titleColor);
    const computedCertificateTextColor = useColor(props.certificateTextColor);
    const computedTextColor = useColor(props.textColor);

    const certificates: ICertificate[] = [
      {
        title: 'Develop Your Cultural Intelligence',
        score: '87/100',
        year: '2020',
        link: 'https://www.futurelearn.com/certificates/10ayxkf',
      },
      {
        title: 'Le Robert',
        score: '829/1000',
        year: '2018 ',
        link: 'https://examen.certification-le-robert.com/index.html#/certificationPublic/SPUB3VAK2G',
      },
      {
        title: 'TOEIC',
        score: '960/990',
        year: '2018',
      },
    ];

    return {
      computedTitleColor,
      computedCertificateTextColor,
      computedTextColor,
      certificates,
    };
  },
});
</script>

<style scoped>
.custom-btn {
  text-transform: capitalize;
  letter-spacing: normal;
  font-weight: 600;
}
</style>
