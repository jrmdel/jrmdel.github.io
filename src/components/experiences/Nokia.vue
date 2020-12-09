<template>
    <v-hover v-slot="{ hover }">
        <v-card dark color="primary">
            <v-card-title class="text-wrap">Ingénieur fullstack pour la cybersécurité</v-card-title>
            <v-card-subtitle>
                <span class="tertiary--text text-h6">Nokia</span>
            </v-card-subtitle>
            <v-card-text class="mt-n3 text-subtitle-2 ">
                <v-row align="center" justify="space-between">
                    <v-col cols="auto">
                        <v-icon color="tertiary">mdi-calendar-month</v-icon>
                        <span class="ml-2">Sept. 2019 - Sept. 2020</span>
                    </v-col>
                    <v-col cols="auto">
                        <v-icon color="tertiary">mdi-map-marker-outline</v-icon>
                        <span class="ml-2">Lannion, France</span>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-text class="mt-n8 tertiary--text">
                <div>
                    Pour terminer mon cursus ingénieur, j’ai réalisé une alternance d’un an au sein de Nokia Lannion.
                    Le but de ma mission était de développer une preuve de concept
                    d’une solution web sous la forme d’un dashboard de vulnérabilités pour venir répondre à des besoins axés cybersécurité.
                </div>
                <div class="mt-1">
                    Partant de zéro, j’ai eu la possibilité d’aborder les nombreuses phases de ce projet :
                </div>
                <ul class="ml-2 mt-1">
                    <li>Etat de l’art</li>
                    <li>Rédaction de documentation technique (notamment cahier des charges)</li>
                    <li>Choix de technologies</li>
                    <li>Architecture logicielle et développement fullstack</li>
                </ul>
                <v-expand-transition>
                    <div v-if="hover">
                        <div class="mt-1">
                            J'ai également eu pour missions annexes :
                        </div>
                        <ul class="ml-2 mt-1">
                            <li>Formation d'un nouvel arrivant sur le projet afin qu'il puisse amener la solution en production.</li>
                            <li>Mise en place d’un contrôle d’accès souple reprenant les concepts de RBAC et de ABAC.</li>
                            <li>Démonstration de notre solution à des collègues basé.e.s aux Etats-Unis.</li>
                            <li>Proposition d’architecture permettant l’ajout de nouvelles fonctionnalités sous forme de micro-services.</li>
                        </ul>
                    </div>
                </v-expand-transition>
            </v-card-text>
            <v-card-actions>
                <v-row no-gutters class="mt-n2">
                    <v-col cols="auto" v-for="(skill, i) in skills" :key="i">
                        <v-chip class="tertiary--text ma-2" color="warning">{{skill}}</v-chip>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    data:()=>({
        skills: ["Node.JS", "Vue.JS", "MongoDB", "Git", "Linux", "Méthodes Agiles"]
    })
}
</script>