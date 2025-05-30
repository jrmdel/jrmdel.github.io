<template>
  <div>
    <v-card slot="pdf-content" :color="cardColor">
      <v-card-title
        class="d-flex flex-column ga-4 justify-space-between align-end pa-4 ga-sm-2 flex-md-row ga-md-0 align-md-center"
      >
        <span
          class="text-sm-h2 font-weight-light text-h3"
          :class="computedTextColor"
          style="text-wrap-mode: wrap"
        >
          {{ $t('title.label') }}
        </span>

        <div class="d-flex ga-2 pl-md-6">
          <v-btn
            :aria-label="$t('common.buttons.change-language')"
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
            :aria-label="$t('common.buttons.download-cv')"
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

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { useColor } from '@/composables/useColor';

const PDF_NAME = 'cv-jeremie-deletraz.pdf';
const PDF_URL = 'https://rivonglade.onthewifi.com/html-to-pdf/api/v1/convert';

interface Props {
  cardColor: string;
  textColor?: string;
  iconColor: string;
  buttonColor: string;
  email?: string;
}
const { textColor, email } = defineProps<Props>();
const computedTextColor = useColor(textColor);

const { locale } = useI18n({ useScope: 'global' });
const changeLanguage = (): void => {
  const lang = locale.value === 'fr' ? 'en' : 'fr';
  console.log('Changing language to:', lang);
  locale.value = lang;
};

const hasValidEmail = computed(() => {
  return email?.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) != null;
});
const mailTo = computed(() => {
  let toReturn = `mailto:${email}`;
  toReturn += '?subject=Premier contact';
  toReturn += `&body=Bonjour Jérémie,%0D%0A%0D%0AJe viens de parcourir ton site ${document.URL} et je souhaite que l'on échange.`;
  return toReturn;
});

const isDownloading = ref(false);
const download = (): void => {
  isDownloading.value = true;

  const html = prepareHtml();
  if (!html) {
    console.error('Failed to prepare HTML for download');
    isDownloading.value = false;
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
      autoSaveFile(blob);
    })
    .catch((error) => {
      console.error('Error while downloading file:', error);
    })
    .finally(() => {
      isDownloading.value = false;
    });
};
const prepareHtml = (): string | void => {
  const cloned = document.querySelector('html')?.cloneNode(true) as HTMLHtmlElement | null;
  if (!cloned) {
    console.error('Failed to clone the HTML document');
    return;
  }
  removeUnwantedNodes(cloned);
  embedCss(cloned);
  addIconLink(cloned);

  return replaceImageUrls(cloned?.outerHTML);
};
const removeUnwantedNodes = (html: HTMLHtmlElement): void => {
  const nodesToDelete = html.querySelectorAll('#no-pdf');
  nodesToDelete.forEach((e) => {
    e.remove();
  });
};
const embedCss = (html: HTMLHtmlElement): void => {
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
};
const addIconLink = (html: HTMLHtmlElement): void => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css';
  html.querySelector('head')?.appendChild(link);
};
const replaceImageUrls = (htmlText: string): string => {
  const url = document.URL;
  const baseUrl = url.substring(0, url.lastIndexOf('/'));
  return htmlText.replace(/src=\"(.*)\.jpg"/g, (match, p1) => {
    const newUrl = `${baseUrl}${p1}.jpg`;
    return `src="${newUrl}"`;
  });
};
const autoSaveFile = (blob: Blob): void => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = PDF_NAME;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};
</script>
