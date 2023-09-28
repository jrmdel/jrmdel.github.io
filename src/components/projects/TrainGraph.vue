<template>
  <ProjectTemplate
    title="Train Graph"
    :titleColor="titleColor"
    :cardColor="cardColor"
    :iconColor="iconColor"
    :headerTextColor="headerTextColor"
    leftIcon="mdi-atom-variant"
    leftText="Personnel"
    rightIcon="mdi-timelapse"
    rightText="+30h"
    :textColor="textColor"
    :skills="skills"
    link="https://github.com/jrmdel/cities-distances"
  >
    <template v-slot:content>
      <div>
        Prise en main d'une base de données Graph par la représentation de
        données ferroviaires. Celles-ci ont été récupérées via l'API Navitia de
        la SNCF et insérées dans Neo4j. Le but est de faire des statistiques sur
        l'inter-connexion des villes.
      </div>
    </template>
  </ProjectTemplate>
</template>

<script>
import ProjectTemplate from "./helpers/ProjectTemplate.vue";

export default {
  components: {
    ProjectTemplate,
  },
  props: {
    iconColor: {
      type: String,
    },
    cardColor: {
      type: String,
    },
    titleColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    headerTextColor: {
      type: String,
    },
  },
  data: () => ({
    skills: ["Neo4j", "JavaScript"],
  }),
};
</script>