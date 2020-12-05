<template>
    <v-card class="mt-6" color="primaryLight">
        <v-card-title class="text-h4 font-weight-light tertiary--text">Diplômes</v-card-title>
        <v-card-text>
            <v-timeline dense>
                <v-timeline-item small>
                    <v-card dark outlined color="primary">
                        <v-card-title>Ecole d'ingénieur en informatique : spécialité IA/Big Data</v-card-title>
                        <v-card-subtitle>
                            <span class="tertiary--text text-h6">ENSSAT</span>
                        </v-card-subtitle>
                        <v-card-text class="mt-n3 text-subtitle-2 ">
                            <v-row align="center" justify="space-between">
                                <v-col cols="auto">
                                    <v-icon color="tertiary">mdi-calendar-month</v-icon>
                                    <span class="ml-2">Sept. 2017 - Sept. 2020</span>
                                </v-col>
                                <v-col cols="auto">
                                    <v-icon color="tertiary">mdi-map-marker-outline</v-icon>
                                    <span class="ml-2">Lannion, France</span>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-row no-gutters class="mt-n4">
                                <v-col cols="auto" v-for="(skill, i) in enssatSkills" :key="i">
                                    <v-chip class="primaryWhite--text ma-2" color="secondary">{{skill}}</v-chip>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: ()=>({
        enssatSkills: ["IA", "Génie Logiciel", "Technologies Web", "Sciences des données", "Machine Learning"]
    })
}
</script>