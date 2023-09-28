<template>
  <ProjectTemplate
    title="Natural Language Processing"
    :titleColor="titleColor"
    :cardColor="cardColor"
    :iconColor="iconColor"
    :headerTextColor="headerTextColor"
    leftIcon="mdi-school-outline"
    leftText="Scolaire"
    rightIcon="mdi-timelapse"
    rightText="+30h"
    :textColor="textColor"
    :skills="skills"
  >
    <template v-slot:content>
      <div>
        Par équipe de 4, nous devions entraîner un réseau de neurones via
        différentes méthodes afin qu'il traduise de courtes phrases. Nous avons
        essayé plusieurs architectures (LSTM, RNN, avec ou sans dropout, avec ou
        sans attention) et les avons évalué via le score BLEU et le Word Error
        Rate.
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
    skills: ["Python", "Keras"],
  }),
};
</script>