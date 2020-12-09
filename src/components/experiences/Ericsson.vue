<template>
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
        skills: ["Java Spring Boot", "MySQL", "API Rest", "Redmine", "Méthodes Agiles"]
    })
}
</script>