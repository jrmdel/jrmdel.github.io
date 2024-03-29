<template>
  <ProjectTemplate
    title="City Compass"
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
    link="https://jrmdel.github.io/cities-game/"
  >
    <template v-slot:content>
      <div>
        Création d'une application web ludique ayant pour but de tester ses
        connaissances en géographie française. Les questions sont générées
        aléatoirement et les tentatives sont stockées pour, à terme, pouvoir
        analyser les données récupérées.
      </div>
    </template>
  </ProjectTemplate>
</template>

<script>
import ProjectTemplate from './helpers/ProjectTemplate.vue';

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
    skills: ['Vue.JS', 'SVG'],
  }),
};
</script>
