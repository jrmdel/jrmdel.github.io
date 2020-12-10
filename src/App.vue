<template>
    <v-app>
        <div class="background">
            <v-container fluid>
                <div class="mx-md-8 pa-lg-16">
                    <v-row>
                        <v-col cols="12">
                            <v-card class="tertiary" ref="title">
                                <v-card-title>
                                    <span class="text-sm-h2 font-weight-light text-h3 primaryLight--text">Ingénieur Fullstack JS & Data</span>
                                </v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row justify="space-between">
                        <v-col cols="12" md="4">
                            <v-card class="primary fill-height">
                                <Identity/>
                                <Diploma ref="diplomas"/>
                                <Languages/>
                                <Certificates/>
                                <Skills ref="skills"/>
                                <FindMe/>
                            </v-card>
                        </v-col>
                        <v-col>
                                <AboutMe ref="about-me"/>
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
import FindMe from "@/components/FindMe";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Diploma from '@/components/Diploma.vue';
import Projects from '@/components/Projects.vue';
import Certificates from "@/components/Certificates";
import Identity from "@/components/Identity"

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
        Certificates
    },
    data:()=>({
        jumps:[
            {name: "Titre", tag:"title"},
            {name: "Diplômes", tag:"diplomas"},
            {name: "Compétences", tag:"skills"},
            {name: "A propos de moi", tag:"about-me"},
            {name: "Expériences", tag:"experiences"},
            {name: "Projets et réalisations", tag:"projects"}
        ]
    }),
    methods:{
        jumpTo(tag){
            this.$vuetify.goTo(this.$refs[tag], {easing: 'easeInOutCubic', duration:400})
        }
    }
};
</script>

<style>
    .v-card__text, .v-card__title {
       word-break: normal; /* maybe !important  */
    }
</style>