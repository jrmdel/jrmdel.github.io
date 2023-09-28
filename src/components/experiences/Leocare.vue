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
    :skills="skills"
  >
    <template v-slot:content>
      <div>
        Dans cette start-up proposant des assurances pour les particuliers
        (auto, moto, habitation), j'ai eu l'opportunité de faire partie de
        l'équipe <span class="font-italic">Customer Care</span>, garante du
        développement de l'outil interne permettant aux conseillers et
        conseillères de suivre au mieux les dossiers clients.
      </div>
      <ul class="ml-2 mt-1">
        <li>Développement dans un contexte métier exigeant</li>
        <li>Revues de code au sein de l'équipe</li>
      </ul>
    </template>
  </CardTemplate>
</template>

<script>
import CardTemplate from "./helpers/CardTemplate.vue";

export default {
  components: {
    CardTemplate,
  },
  data: () => ({
    skills: ["Angular", "Nest.JS", "MongoDB", "Jest", "Lean Management"],
  }),
};
</script>