<template>
  <div>
    <v-card :color="cardColor" slot="pdf-content">
      <v-card-title>
        <span
          class="text-sm-h2 font-weight-light text-h3"
          :class="computedTextColor"
        >
          Ingénieur Fullstack JS & Data
        </span>
        <v-spacer />
        <v-btn
          v-show="hasValidEmail"
          :color="buttonColor"
          fab
          outlined
          :href="mailTo"
        >
          <v-icon :color="iconColor"> mdi-at </v-icon>
        </v-btn>
        <!-- <v-btn :color="buttonColor" fab large outlined @click="download">
                    <v-icon :color="iconColor">
                        mdi-download
                    </v-icon>
                </v-btn> -->
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    cardColor: {
      type: String,
    },
    textColor: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
    },
    buttonColor: {
      type: String,
    },
    email: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedTextColor: {
      get: function () {
        return this.textColor.length > 0 ? `${this.textColor}--text` : "";
      },
    },
    hasValidEmail: {
      get: function () {
        return this.email.length > 0
          ? this.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) != null
          : false;
      },
    },
    mailTo: {
      get: function () {
        let toReturn = `mailto:${this.email}`;
        toReturn += "?subject=Premier contact";
        toReturn += `&body=Bonjour Jérémie,%0D%0A%0D%0AJe viens de parcourir ton site ${document.URL} et je souhaite que l'on échange.`;
        return toReturn;
      },
    },
  },
};
</script>