<template>
    <v-card class="primaryLight">
        <v-card-title class="text-h4 font-weight-light tertiary--text">Expériences</v-card-title>
        <v-card-text>
            <v-timeline dense align-top>
                <v-timeline-item small color="primary">
                    <v-hover v-slot="{ hover }">
                        <v-card dark color="primary">
                            <v-card-title class="text-wrap">Ingénieur recherche et développement d'une solution web pour la cybersécurité</v-card-title>
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
                                    Le but de ma mission était de développer une
                                    <span class="primaryLight--text">preuve de concept</span>
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
                                    <v-col cols="auto" v-for="(skill, i) in skillsNokia" :key="i">
                                        <v-chip class="tertiary--text ma-2" color="warning">{{skill}}</v-chip>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </v-timeline-item>
                <v-timeline-item small color="tertiary">
                    <v-hover v-slot="{ hover }">
                        <v-card dark color="tertiary">
                            <v-card-title class="text-wrap">Développeur back-end</v-card-title>
                            <v-card-subtitle>
                                <span class="primaryLight--text text-h6">Ericsson</span>
                            </v-card-subtitle>
                            <v-card-text class="mt-n3 text-subtitle-2 ">
                                <v-row align="center" justify="space-between">
                                    <v-col cols="auto">
                                        <v-icon color="primaryLight">mdi-calendar-month</v-icon>
                                        <span class="ml-2">Juil. 2019 - Aout. 2019</span>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-icon color="primaryLight">mdi-map-marker-outline</v-icon>
                                        <span class="ml-2">Lannion, France</span>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-text class="mt-n8 primaryLight--text">
                                <div>
                                    Stage de 7 semaines en développement logiciel,
                                    sur un projet web de gestion de robots de test en Java Spring Boot au sein d’une équipe de 4 personnes.
                                </div>
                                <v-expand-transition>
                                    <div v-if="hover">
                                        <div class="mt-1">
                                            Le but du stage était de faire évoluer la solution de test,
                                            la faisant passer de tests restreints à un seul robot,
                                            à une solution de tests distribués pouvant faire intervenir plusieurs robots.
                                            Cela m'a permis d'approfondir des notions déjà connues comme :
                                        </div>
                                        <ul class="ml-2 mt-1">
                                            <li>Développement Java et Web</li>
                                            <li>Mise en place de sockets</li>
                                            <li>Travail en équipe</li>
                                        </ul>
                                        <div class="mt-1">
                                            Mais également de nouvelles notions comme :
                                        </div>
                                        <ul class="ml-2 mt-1">
                                            <li>Manipulation de Raspberry Pi</li>
                                            <li>Développement avec le framework Spring Boot</li>
                                            <li>Lien entre code et base de données via l'ORM Hibernate</li>
                                        </ul>
                                    </div>
                                </v-expand-transition>
                            </v-card-text>
                            <v-card-actions>
                                <v-row no-gutters class="mt-n2">
                                    <v-col cols="auto" v-for="(skill, i) in skillsEricsson" :key="i">
                                        <v-chip class="tertiary--text ma-2" color="warning">{{skill}}</v-chip>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </v-timeline-item>
                <v-timeline-item small color="primary">
                    <v-hover v-slot="{ hover }">
                        <v-card dark color="primary">
                            <v-card-title>Opticien</v-card-title>
                            <v-card-subtitle>
                                <span class="tertiary--text text-h6">La Lunetterie</span>
                            </v-card-subtitle>
                            <v-card-text class="mt-n4 text-subtitle-2 ">
                                <v-row align="center" justify="space-between">
                                    <v-col cols="auto">
                                        <v-icon color="tertiary">mdi-calendar-month</v-icon>
                                        <span class="ml-2">Août 2014 - Juin 2016</span>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-icon color="tertiary">mdi-map-marker-outline</v-icon>
                                        <span class="ml-2">Annecy, France</span>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-text class="mt-n8 tertiary--text">
                                <v-expand-transition>
                                    <div v-if="hover" >
                                        <div>
                                            Magasin indépendant proposant principalement des lunettes de créateurs, optiques ou solaires.
                                        </div>
                                        <ul class="ml-2 mt-1">
                                            <li>Vente et conseils</li>
                                            <li>Responsable des examens de la vue</li>
                                            <li>Ajustage de montures et taille de verres</li>
                                        </ul>
                                    </div>
                                </v-expand-transition>
                            </v-card-text>
                            <v-card-actions>
                                <v-row no-gutters :class="hover ? 'mt-n4' : 'mt-n6'">
                                    <v-col cols="auto" v-for="(skill, i) in skillsLunetterie" :key="i">
                                        <v-chip class="tertiary--text ma-2" color="warning">{{skill}}</v-chip>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data:()=>({
        skillsNokia: ["Node.JS", "Vue.JS", "MongoDB", "Git", "Linux", "Méthodes Agiles"],
        skillsEricsson: ["Java Spring Boot", "MySQL", "API Rest", "Redmine", "Méthodes Agiles"],
        skillsLunetterie: ["Relation client", "Organisation"]
    })
}
</script>