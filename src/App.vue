<template>
    <v-app>
        <div class="background">
            <v-container fluid>
                <div class="mx-md-8 pa-lg-16">
                    <v-row>
                        <v-col cols="12">
                            <MyTitle ref="title"
                                textColor="primaryLight" cardColor="tertiary" iconColor="primaryLight"
                                buttonColor="primary" :email="email"
                            />
                        </v-col>
                    </v-row>
                    <v-row justify="space-between">
                        <v-col cols="12" md="4">
                            <v-card class="tertiary fill-height">
                                <Identity
                                    avatarBorderColor="primary" nameColor="white"
                                    iconColor="primary" textColor="primaryWhite"
                                />
                                <Diploma ref="diplomas"
                                    cardColor="tertiary" titleColor="white" diplomaTextColor="primaryWhite"
                                    iconColor="primary" textColor="primaryLight" chipTextColor="tertiary"
                                />
                                <Languages
                                    titleColor="white" textColor="primaryWhite"
                                />
                                <Certificates
                                    cardColor="tertiary" titleColor="white" certificateTextColor="primaryWhite"
                                    iconColor="primary" textColor="primaryLight"
                                />
                                <Skills ref="skills"
                                    titleColor="white" textColor="primaryWhite" iconColor="primary"
                                />
                                <FindMe
                                    titleColor="white" tooltipColor="primaryLight" textColor="tertiary"
                                />
                            </v-card>
                        </v-col>
                        <v-col>
                                <AboutMe ref="about-me"
                                    cardColor="primaryLight" titleColor="tertiary" bodyTextColor="tertiary"
                                />
                                <Experiences ref="experiences"/>
                                <Projects ref="projects"/>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
            <v-menu transition="scroll-y-reverse-transition" offset-y>
                <template v-slot:activator="{on, attrs}">
                    <v-btn v-bind="attrs" v-on="on" class="hidden-md-and-up"
                    fab color="secondary" large dark fixed bottom right>
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list dense color="background">
                    <v-subheader class="text-body-2 ml-1">Aller à</v-subheader>
                    <v-list-item v-for="(jump,i) in jumps" :key="i" @click="jumpTo(jump.tag)">
                        <v-list-item-content >{{jump.name}}</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
  </v-app>
</template>

<script>
import FindMe from "./components/FindMe.vue";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Diploma from '@/components/Diploma.vue';
import Projects from '@/components/Projects.vue';
import Certificates from "@/components/Certificates";
import Identity from "@/components/Identity"
import MyTitle from './components/MyTitle.vue';

export default {
    components:{
        Identity,
        FindMe,
        Skills,
        Languages,
        AboutMe,
        Experiences,
        Diploma,
        Projects,
        Certificates,
        MyTitle
    },
    data: () => ({
        jumps: [
            { name: "Titre", tag: "title" },
            { name: "Diplômes", tag: "diplomas" },
            { name: "Compétences", tag: "skills" },
            { name: "A propos de moi", tag: "about-me" },
            { name: "Expériences", tag: "experiences" },
            { name: "Projets et réalisations", tag: "projects" }
        ],
        email: "jeremie.deletraz@gmail.com"
    }),
    methods: {
        jumpTo(tag) {
            this.$vuetify.goTo(this.$refs[tag], { easing: 'easeInOutCubic', duration: 400 });
        }
    }
};
</script>

<style>
    .v-card__text, .v-card__title {
       word-break: normal; /* maybe !important  */
    }
</style>