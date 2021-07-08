<template>
    <v-hover v-slot="{ hover }">
        <v-card dark color="tertiary">
            <v-card-title class="text-wrap">Ingénieur informatique</v-card-title>
            <v-card-subtitle>
                <span class="primaryLight--text text-h6">Astek</span>
            </v-card-subtitle>
            <v-card-text class="mt-n3 text-subtitle-2 ">
                <v-row align="center" justify="space-between">
                    <v-col cols="auto">
                        <v-icon color="primaryLight">mdi-calendar-month</v-icon>
                        <span class="ml-2">Janv. 2021 - Aujourd'hui</span>
                    </v-col>
                    <v-col cols="auto">
                        <v-icon color="primaryLight">mdi-map-marker-outline</v-icon>
                        <span class="ml-2">Rennes, France</span>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-text class="mt-n8 primaryLight--text">
                <div>
                    Pour l'un des clients d'Astek, basé à Vannes et spécialisé dans le développement de plateformes
                    d'aides publiques à destination des collectivités, j'interviens en tant que développeur
                    au sein de l'équipe Support. Cette mission me fait opérer sur un périmètre large, allant des 
                    bases de données aux conteneurs Docker, et me confronte aux problématiques fonctionnelles et techniques
                    que l'on peut rencontrer sur un environnement de production utilisé par un grand nombre de personnes.
                </div>
                <div class="mt-2">
                            J'ai ainsi pu parfaire certaines compétences annexes :
                        </div>
                        <ul class="ml-2 mt-1">
                            <li>S'adapter à un projet à grande échelle</li>
                            <li>Améliorer ma capacité à résoudre des problèmes</li>
                            <li>Prendre des responsabilités</li>
                        </ul>
                <v-expand-transition>
                    <div v-if="hover">
                        
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
        skills: ["Node.JS", "MongoDB", "Elastic Search", "Jira", "Kanban"]
    })
}
</script>