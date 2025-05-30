<template>
  <div>
    <v-container>
      <v-row justify="center" class="fill-width mt-1">
        <v-col cols="auto">
          <v-avatar size="250" :color="avatarBorderColor">
            <v-avatar class="mx-2" size="240">
              <v-img
                class="zoom-sm"
                naturalHeight="400"
                height="300"
                src="/me-mid.jpg"
                lazy-src="/me-min.jpg"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary" />
                  </v-row>
                </template>
              </v-img>
            </v-avatar>
          </v-avatar>
        </v-col>
      </v-row>
      <v-row>
        <v-container>
          <v-row justify="center">
            <div class="text-h4 text-center mx-3" :class="computedNameColor">Jeremie Deletraz</div>
          </v-row>
          <v-row align="center" justify="center" class="pt-4">
            <v-icon :color="iconColor"> mdi-card-account-details-outline </v-icon>
            <span :class="computedTextColor" class="font-weight-regular text-h6 pl-4">
              {{ age }} {{ $t('identity.years-old') }}
            </span>
          </v-row>
          <v-row align="center" justify="center" class="pt-2">
            <v-icon :color="iconColor"> mdi-map-marker-outline </v-icon>
            <span :class="computedTextColor" class="font-weight-regular text-h6 pl-4">
              France
            </span>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useColor } from '@/composables/useColor';

interface Props {
  avatarBorderColor?: string;
  nameColor?: string;
  textColor?: string;
  iconColor?: string;
}
const { nameColor, textColor } = defineProps<Props>();
const computedNameColor = useColor(nameColor);
const computedTextColor = useColor(textColor);

const birthTime = 763603200000;
const age = Math.floor((Date.now() - birthTime) / 3.15576e10);
</script>

<style lang="scss">
.zoom-sm {
  .v-img__img {
    height: 116%;
    width: 116%;
    top: -8%;
    left: -8%;
  }
}
</style>
