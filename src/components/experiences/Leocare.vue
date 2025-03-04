<template>
  <CardTemplate
    cardColor="primary"
    cardTitle="Ingénieur Fullstack TS"
    cardSubtitle="Leocare"
    headerTextColor="primaryWhite"
    subtitleColor="tertiary"
    dateString="Juil. 2023 - Aujourd'hui"
    locationString="Rennes, France"
    iconColor="tertiary"
    textColor="tertiary"
    :skills="skills">
    <template v-slot:content>
      <div>
        Dans cette start-up de la French Tech proposant des assurances pour les particuliers (auto,
        moto, habitation), j'ai eu l'opportunité de faire partie de l'équipe
        <span class="font-italic">Customer Care/Sinistres</span>, garante du développement de
        l'outil interne permettant le suivi des dossiers clients et l'indemnisation en cas de
        sinistre.
      </div>
      <ul class="ml-2 mt-1">
        <li>Développement dans un contexte métier exigeant</li>
        <li>Revues de code au sein de l'équipe</li>
        <li>Rédaction de tests unitaires</li>
        <li>Aide à la montée en compétences de profils juniors</li>
      </ul>
    </template>
  </CardTemplate>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CardTemplate from '@/components/experiences/helpers/CardTemplate.vue';

export default defineComponent({
  components: {
    CardTemplate,
  },
  data: () => ({
    skills: ['Angular', 'Nest.JS', 'MongoDB', 'Jest'],
  }),
});
</script>
