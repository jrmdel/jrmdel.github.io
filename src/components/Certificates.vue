<template>
  <div class="mt-2">
    <v-container>
      <v-row class="my-2 text-h4 font-weight-light" :class="computedTitleColor">
        <v-col> Certifications </v-col>
      </v-row>
      <!--Visible except on xs and medium screens-->
      <v-row
        align="center"
        class="px-2 hidden-xs-only hidden-md-only"
        v-for="(crt, i) in cert"
        :key="i"
      >
        <v-col cols="auto">
          <v-row class="my-n1" no-gutters align="center">
            <v-icon class="mr-2" small :color="iconColor">
              mdi-certificate-outline
            </v-icon>
            <span class="text-subtitle-2" :class="computedTextColor">
              {{ crt.year }}
            </span>
          </v-row>
        </v-col>
        <v-col class="d-flex">
          <span
            class="font-weight-medium d-flex align-center"
            :class="computedCertificateTextColor"
          >
            {{ crt.title }}
          </span>
        </v-col>
        <v-col v-if="crt.score" cols="auto">
          <v-icon small color="warning" class="mr-2">
            mdi-chart-box-outline
          </v-icon>
          <a
            v-if="crt.link"
            class="text-subtitle-2"
            :class="computedTextColor"
            :href="crt.link"
            target="_blank"
            >{{ crt.score }}</a
          >
          <span v-else class="text-subtitle-2" :class="computedTextColor">{{
            crt.score
          }}</span>
        </v-col>
      </v-row>
      <!--Only on extra-small and medium-->
      <v-row class="hidden-sm-only hidden-lg-and-up" no-gutters>
        <v-col cols="12" v-for="(crt, i) in cert" :key="i" class="my-1">
          <v-divider></v-divider>
          <v-card outlined :color="cardColor">
            <v-card-title>
              <span
                class="text-subtitle-1 font-weight-medium"
                :class="computedCertificateTextColor"
              >
                {{ crt.title }}
              </span>
            </v-card-title>
            <v-card-subtitle>
              <v-row align="center" justify="space-between">
                <v-col cols="auto">
                  <v-row class="my-n1" no-gutters align="center">
                    <v-icon class="mr-2" small :color="iconColor">
                      mdi-certificate-outline
                    </v-icon>
                    <span class="text-subtitle-2" :class="computedTextColor">
                      {{ crt.year }}
                    </span>
                  </v-row>
                </v-col>
                <v-col v-if="crt.score" cols="auto">
                  <v-icon class="mr-2" small color="warning">
                    mdi-chart-box-outline
                  </v-icon>
                  <a
                    v-if="crt.link"
                    class="text-subtitle-2"
                    :class="computedTextColor"
                    :href="crt.link"
                    target="_blank"
                    >{{ crt.score }}</a
                  >
                  <span
                    v-else
                    class="text-subtitle-2"
                    :class="computedTextColor"
                    >{{ crt.score }}</span
                  >
                </v-col>
              </v-row>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="hidden-sm-only hidden-lg-and-up" />
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    titleColor: {
      type: String,
      default: '',
    },
    cardColor: {
      type: String,
      default: '',
    },
    certificateTextColor: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    cert: [
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
        link:
          'https://examen.certification-le-robert.com/index.html#/certificationPublic/SPUB3VAK2G',
      },
      {
        title: 'TOEIC',
        score: '960/990',
        year: '2018',
      },
    ],
  }),
  computed: {
    computedTitleColor: {
      get: function() {
        return this.titleColor.length > 0 ? `${this.titleColor}--text` : '';
      },
    },
    computedCertificateTextColor: {
      get: function() {
        return this.certificateTextColor.length > 0
          ? `${this.certificateTextColor}--text`
          : '';
      },
    },
    computedTextColor: {
      get: function() {
        return this.textColor.length > 0 ? `${this.textColor}--text` : '';
      },
    },
  },
};
</script>

<style scoped>
.custom-btn {
  text-transform: capitalize;
  letter-spacing: normal;
  font-weight: 600;
}
</style>
