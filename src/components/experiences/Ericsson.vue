<template>
  <CardTemplate
    :cardColor="cardColor"
    cardTitle="Développeur back-end"
    cardSubtitle="Ericsson"
    :headerTextColor="headerTextColor"
    :subtitleColor="subtitleColor"
    dateString="Juil. 2019 - Aout 2019"
    locationString="Lannion, France"
    :iconColor="iconColor"
    :textColor="bodyTextColor"
    :skills="skills"
  >
    <template v-slot:content>
      <div>
        Stage de 7 semaines en développement logiciel, sur un projet web de gestion de robots de
        test en Java Spring Boot au sein d'une équipe de 4 personnes.
      </div>
    </template>
    <template v-slot:extra>
      <div class="mt-1">
        Le but du stage était de faire évoluer la solution de test, la faisant passer de tests
        restreints à un seul robot, à une solution de tests distribués pouvant faire intervenir
        plusieurs robots. Cela m'a permis d'approfondir des notions déjà connues comme :
      </div>
      <ul class="ml-4 mt-1">
        <li>Développement Java et Web</li>
        <li>Mise en place de sockets</li>
        <li>Travail en équipe</li>
      </ul>
      <div class="mt-1">Mais également de nouvelles notions comme :</div>
      <ul class="ml-4 mt-1">
        <li>Manipulation de Raspberry Pi</li>
        <li>Développement avec le framework Spring Boot</li>
        <li>Lien entre code et base de données via l'ORM Hibernate</li>
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
  props: {
    cardColor: { type: String },
    subtitleColor: { type: String },
    headerTextColor: { type: String },
    bodyTextColor: { type: String },
    iconColor: { type: String },
  },
  data: () => ({
    skills: ['Java Spring Boot', 'MySQL', 'API Rest', 'Redmine', 'Méthodes Agiles'],
  }),
});
</script>
