<template>
  <v-app>
    <div class="background">
      <v-container fluid>
        <div class="mx-md-8 pa-lg-16">
          <v-row>
            <v-col cols="12">
              <MyTitle
                id="title"
                textColor="primaryLight"
                cardColor="tertiary"
                iconColor="primaryLight"
                buttonColor="primary"
                :email="email"
              />
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="12" md="4">
              <v-card color="tertiary" class="fill-height">
                <Identity
                  avatarBorderColor="primary"
                  nameColor="white"
                  iconColor="primary"
                  textColor="primaryWhite"
                />
                <Diploma
                  id="diplomas"
                  titleColor="white"
                  diplomaTextColor="primaryWhite"
                  iconColor="primary"
                  textColor="primaryLight"
                />
                <Languages titleColor="white" textColor="primaryWhite" />
                <Certificates
                  titleColor="white"
                  certificateTextColor="primaryWhite"
                  iconColor="primary"
                  textColor="primaryLight"
                />
                <Skills
                  id="skills"
                  titleColor="white"
                  textColor="primaryWhite"
                  iconColor="primary"
                />
                <FindMe titleColor="white" textColor="primaryWhite" />
              </v-card>
            </v-col>
            <v-col>
              <AboutMe
                id="about-me"
                cardColor="primaryLight"
                titleColor="tertiary"
                bodyTextColor="tertiary"
              />
              <Experiences id="experiences" />
              <Projects id="projects" />
            </v-col>
          </v-row>
        </div>
      </v-container>
      <v-menu id="no-pdf" transition="slide-y-reverse-transition" location="end">
        <template v-slot:activator="{ props }">
          <v-fab
            id="no-pdf"
            v-bind="props"
            class="hidden-md-and-up"
            color="secondary"
            :app="true"
            size="large"
            location="bottom right"
            icon
          >
            <v-icon>mdi-menu</v-icon>
          </v-fab>
        </template>
        <v-card max-width="250">
          <v-list density="compact" color="background">
            <v-list-subheader class="text-body-2 ml-1">Aller à</v-list-subheader>
            <v-list-item v-for="(jump, i) in jumps" :key="i" @click="jumpTo(jump.tag)">
              {{ jump.name }}
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AboutMe from '@/components/AboutMe.vue';
import Certificates from '@/components/Certificates.vue';
import Diploma from '@/components/Diploma.vue';
import Experiences from '@/components/Experiences.vue';
import FindMe from '@/components/FindMe.vue';
import Identity from '@/components/Identity.vue';
import Languages from '@/components/Languages.vue';
import MyTitle from '@/components/MyTitle.vue';
import Projects from '@/components/Projects.vue';
import Skills from '@/components/Skills.vue';
import { useGoTo } from 'vuetify';

export default defineComponent({
  setup() {
    const goTo = useGoTo();
    const jumpTo = (tag: string): void => {
      goTo(tag, {
        easing: 'easeInOutCubic',
        duration: 400,
        offset: -15,
      });
    };
    return { jumpTo };
  },
  components: {
    Identity,
    FindMe,
    Skills,
    Languages,
    AboutMe,
    Experiences,
    Diploma,
    Projects,
    Certificates,
    MyTitle,
  },
  data: () => ({
    jumps: [
      { name: 'Titre', tag: '#title' },
      { name: 'Diplômes', tag: '#diplomas' },
      { name: 'Compétences', tag: '#skills' },
      { name: 'A propos de moi', tag: '#about-me' },
      { name: 'Expériences', tag: '#experiences' },
      { name: 'Projets et réalisations', tag: '#projects' },
    ],
    email: 'jeremie.deletraz@gmail.com',
  }),
});
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
