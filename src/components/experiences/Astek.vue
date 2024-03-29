<template>
  <CardTemplate
    :cardColor="cardColor"
    cardTitle="Ingénieur informatique"
    cardSubtitle="Astek"
    :headerTextColor="headerTextColor"
    :subtitleColor="subtitleColor"
    dateString="Janv. 2021 - Sept. 2021"
    locationString="Rennes, France"
    :iconColor="iconColor"
    :textColor="bodyTextColor"
    :skills="skills"
  >
    <template v-slot:content>
      <div>
        Pour l'un des clients d'Astek, basé à Vannes et spécialisé dans le
        développement de plateformes d'aides publiques à destination des
        collectivités, je suis intervenu en tant que développeur au sein de
        l'équipe Support. Cette mission m'a fait opérer sur un périmètre large,
        allant des bases de données aux conteneurs Docker, et m'a confronté aux
        problématiques fonctionnelles et techniques que l'on peut rencontrer sur
        un environnement de production utilisé par un grand nombre de personnes.
      </div>
    </template>
    <template v-slot:extra>
      <div class="mt-2">
        J'ai ainsi pu parfaire certaines compétences annexes :
      </div>
      <ul class="ml-2 mt-1">
        <li>S'adapter à un projet à grande échelle</li>
        <li>Améliorer ma capacité à résoudre des problèmes</li>
        <li>Prendre des responsabilités</li>
      </ul>
    </template>
  </CardTemplate>
</template>

<script>
import CardTemplate from './helpers/CardTemplate.vue';

export default {
  components: {
    CardTemplate,
  },
  props: {
    cardColor: {
      type: String,
    },
    subtitleColor: {
      type: String,
    },
    headerTextColor: {
      type: String,
    },
    bodyTextColor: {
      type: String,
    },
    iconColor: {
      type: String,
    },
  },
  data: () => ({
    skills: ['Node.JS', 'MongoDB', 'Elastic Search', 'Jira', 'Kanban'],
  }),
};
</script>
