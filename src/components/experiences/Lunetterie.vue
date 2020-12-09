<template>
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
        skills: ["Relation client", "Organisation"]
    })
}
</script>