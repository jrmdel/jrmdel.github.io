<template>
    <div class="mt-n4">
        <v-container>
            <v-row class="text-h4 font-weight-light tertiary--text">
                <v-col>Diplômes</v-col>
            </v-row>
            <v-row align="center" justify="space-around">
                <v-col cols="auto" lg="12" v-for="(d, i) in diplomas" :key="i">
                    <v-sheet outlined color="tertiary" rounded>
                    <v-card outlined color="primary">
                        <v-card-title>
                            <span class="text-subtitle-1">{{d.title}}</span>
                        </v-card-title>
                        <v-card-subtitle>
                            <v-row align="center" justify="space-between">
                                <v-col cols="auto">
                                    <v-icon small color="tertiary">mdi-bank-outline</v-icon>
                                    <span class="ml-2">{{d.school}}</span>
                                </v-col>
                                <v-col cols="auto">
                                    <v-icon small color="tertiary">mdi-certificate-outline</v-icon>
                                    <span class="ml-2">{{d.year}}</span>
                                </v-col>
                            </v-row>
                        </v-card-subtitle>
                        <v-card-actions v-if="d.skills">
                            <v-row no-gutters class="mt-n6">
                                <v-col class="mx-1" cols="auto" v-for="(skill, j) in d.skills" :key="j">
                                    <v-chip small class="primaryWhite--text ma-1" color="secondary">{{skill}}</v-chip>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: ()=>({
        diplomas: [
            {title: "Ingénieur informatique spécialité IA/Big Data", school: "ENSSAT - Lannion", year: "2020", skills: ["Génie Logiciel", "Web", "Sciences des données", "Machine Learning"]},
            {title: "BTS Opticien-Lunetier", school: "ISO - Lille", year: "2014"}
        ],
    })
}
</script>