<template>
  <ProjectTemplate
    title="Ticket To Ride"
    :titleColor="titleColor"
    :cardColor="cardColor"
    :iconColor="iconColor"
    :headerTextColor="headerTextColor"
    leftIcon="mdi-atom-variant"
    leftText="Personnel"
    rightIcon="mdi-timelapse"
    rightText="+200h"
    :textColor="textColor"
    :skills="skills"
    link="https://jrmdel.github.io/TicketToRide"
  >
    <template v-slot:content>
      <div>
        Développement d'une application web responsive et serverless permettant
        le suivi et l'aide au décompte des points lors d'une partie du jeu
        <span class="font-italic">Les Aventuriers du Rail</span>. Les parties
        sont stockées sur Firebase et consultables en temps réel par les joueurs
        et joueuses.
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
    skills: ['Vue.JS', 'Firebase'],
  }),
};
</script>
