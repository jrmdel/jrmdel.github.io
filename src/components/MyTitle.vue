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
        <v-btn
          class="ml-2"
          :color="buttonColor"
          :loading="isDownloading"
          fab
          outlined
          @click="download"
        >
          <v-icon :color="iconColor">
            mdi-download
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
const PDF_NAME = 'cv-jeremie-deletraz.pdf';
const PDF_URL = 'https://rivonglade.onthewifi.com/html-to-pdf/api/v1/convert';

export default {
  props: {
    cardColor: {
      type: String,
    },
    textColor: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
    },
    buttonColor: {
      type: String,
    },
    email: {
      type: String,
      default: '',
    },
  },
  computed: {
    computedTextColor: {
      get: function() {
        return this.textColor.length > 0 ? `${this.textColor}--text` : '';
      },
    },
    hasValidEmail: {
      get: function() {
        return this.email.length > 0
          ? this.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) != null
          : false;
      },
    },
    mailTo: {
      get: function() {
        let toReturn = `mailto:${this.email}`;
        toReturn += '?subject=Premier contact';
        toReturn += `&body=Bonjour Jérémie,%0D%0A%0D%0AJe viens de parcourir ton site ${document.URL} et je souhaite que l'on échange.`;
        return toReturn;
      },
    },
  },
  data: () => ({
    isDownloading: false,
  }),
  methods: {
    async download() {
      this.isDownloading = true;

      const html = await this.prepareHtml();
      const formData = new FormData();
      formData.append('file', new Blob([html], { type: 'text/html' }));

      fetch(PDF_URL, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.blob())
        .then(blob => {
          this.autoSaveFile(blob);
        })
        .catch(error => {
          console.error('Error while downloading file:', error);
        })
        .finally(() => {
          this.isDownloading = false;
        });
    },
    prepareHtml() {
      const cloned = document.querySelector('html').cloneNode(true);
      const nodesToDelete = cloned.querySelectorAll('#no-pdf');
      nodesToDelete.forEach(e => {
        e.remove();
      });
      this.embedCss(cloned);

      return cloned.outerHTML;
    },
    embedCss(html) {
      const styleSheets = Array.from(document.styleSheets);
      styleSheets.forEach(sheet => {
        try {
          if (sheet.cssRules) {
            const style = document.createElement('style');
            style.textContent = Array.from(sheet.cssRules)
              .map(rule => rule.cssText)
              .join('\n');
            html.querySelector('head').appendChild(style);
          }
        } catch (e) {
          console.warn(`Unable to access CSS rules for ${sheet.href}`, e);
        }
      });
    },
    autoSaveFile(blob) {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = PDF_NAME;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    },
  },
};
</script>
