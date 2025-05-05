<template>
  <div>
    <v-card slot="pdf-content" :color="cardColor">
      <v-card-title class="d-flex justify-space-between align-end align-md-center pa-4">
        <span
          class="text-sm-h2 font-weight-light text-h3"
          :class="computedTextColor"
          style="text-wrap-mode: wrap"
        >
          {{ $t('title.label') }}
        </span>

        <div class="d-flex ga-2 pl-5">
          <v-btn
            :color="buttonColor"
            variant="outlined"
            icon="mdi-translate"
            @click="changeLanguage"
          >
            <template v-slot:default>
              <v-icon :color="iconColor"></v-icon>
            </template>
          </v-btn>
          <v-btn
            v-show="hasValidEmail"
            :color="buttonColor"
            variant="outlined"
            icon="mdi-at"
            :href="mailTo"
          >
            <template v-slot:default>
              <v-icon :color="iconColor"></v-icon>
            </template>
          </v-btn>
          <v-btn
            :color="buttonColor"
            :loading="isDownloading"
            variant="outlined"
            icon="mdi-download"
            @click="download"
          >
            <template v-slot:default>
              <v-icon :color="iconColor"></v-icon>
            </template>
          </v-btn>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useColor } from '@/composables/useColor';

const PDF_NAME = 'cv-jeremie-deletraz.pdf';
const PDF_URL = 'https://rivonglade.onthewifi.com/html-to-pdf/api/v1/convert';

export default defineComponent({
  props: {
    cardColor: { type: String },
    textColor: { type: String, default: '' },
    iconColor: { type: String },
    buttonColor: { type: String },
    email: { type: String, default: '' },
  },
  setup(props) {
    const computedTextColor = useColor(props.textColor);
    const { locale } = useI18n({ useScope: 'global' });

    const changeLanguage = (): void => {
      const lang = locale.value === 'fr' ? 'en' : 'fr';
      console.log('Changing language to:', lang);
      locale.value = lang;
    };

    return { changeLanguage, computedTextColor };
  },
  data: () => ({
    isDownloading: false,
  }),
  computed: {
    hasValidEmail() {
      return this.email.length > 0
        ? this.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) != null
        : false;
    },
    mailTo() {
      let toReturn = `mailto:${this.email}`;
      toReturn += '?subject=Premier contact';
      toReturn += `&body=Bonjour Jérémie,%0D%0A%0D%0AJe viens de parcourir ton site ${document.URL} et je souhaite que l'on échange.`;
      return toReturn;
    },
  },
  methods: {
    download(): void {
      this.isDownloading = true;

      const html = this.prepareHtml();
      if (!html) {
        console.error('Failed to prepare HTML for download');
        this.isDownloading = false;
        return;
      }
      const formData = new FormData();
      formData.append('file', new Blob([html], { type: 'text/html' }));

      fetch(PDF_URL, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.blob())
        .then((blob) => {
          this.autoSaveFile(blob);
        })
        .catch((error) => {
          console.error('Error while downloading file:', error);
        })
        .finally(() => {
          this.isDownloading = false;
        });
    },
    prepareHtml(): string | void {
      const cloned = document.querySelector('html')?.cloneNode(true) as HTMLHtmlElement | null;
      if (!cloned) {
        console.error('Failed to clone the HTML document');
        return;
      }
      this.removeUnwantedNodes(cloned);
      this.embedCss(cloned);
      this.addIconLink(cloned);

      return this.replaceImageUrls(cloned?.outerHTML);
    },
    removeUnwantedNodes(html: HTMLHtmlElement): void {
      const nodesToDelete = html.querySelectorAll('#no-pdf');
      nodesToDelete.forEach((e) => {
        e.remove();
      });
    },
    embedCss(html: HTMLHtmlElement): void {
      const styleSheets = Array.from(document.styleSheets);
      styleSheets.forEach((sheet) => {
        try {
          if (sheet.cssRules) {
            const style = document.createElement('style');
            style.textContent = Array.from(sheet.cssRules)
              .map((rule) => rule.cssText)
              .join('\n');
            html.querySelector('head')?.appendChild(style);
          }
        } catch (e) {
          console.warn(`Unable to access CSS rules for ${sheet.href}`, e);
        }
      });
    },
    addIconLink(html: HTMLHtmlElement): void {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css';
      html.querySelector('head')?.appendChild(link);
    },
    replaceImageUrls(htmlText: string): string {
      const url = document.URL;
      const baseUrl = url.substring(0, url.lastIndexOf('/'));
      return htmlText.replace(/src=\"(.*)\.jpg"/g, (match, p1) => {
        const newUrl = `${baseUrl}${p1}.jpg`;
        return `src="${newUrl}"`;
      });
    },
    autoSaveFile(blob: Blob): void {
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
});
</script>
