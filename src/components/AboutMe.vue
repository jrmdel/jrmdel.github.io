<template>
    <v-card class="mb-6" :color="cardColor">
        <v-card-title class="text-h4 font-weight-light" :class="computedTitleColor">A propos de moi</v-card-title>
        <v-card-text >
            <p class="text-subtitle-1 font-weight-regular mx-3" :class="computedTextColor">
                Je suis un ingénieur <span class="font-weight-medium">curieux</span>,
                <span class="font-weight-medium">responsable</span> et <span class="font-weight-medium">enthousiaste</span>,
                diplômé d'informatique. Initialement destiné à évoluer dans le domaine paramédical, 
                j'ai décidé de reprendre mes études à 22 ans. Je me suis découvert 
                une passion pour la <span class="font-weight-medium">data</span>,
                et une grande appétence pour le développement <span class="font-weight-medium">web</span> JavaScript.
            </p>
            <p class="text-subtitle-1 font-weight-regular mx-3" :class="computedTextColor">
                Mon ambition à terme : pouvoir rejoindre un projet ayant un impact environnemental/sociétal positif pour aligner
                mon travail sur mes valeurs individuelles, et tenter de faire bouger les choses.
            </p>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        cardColor: {
            type: String,
        },
        titleColor: {
            type: String,
            default: ""
        },
        bodyTextColor: {
            type: String,
            default: ""
        },
    },
    computed: {
        computedTitleColor: {
            get: function () {
                return this.titleColor.length > 0 ?
                    `${this.titleColor}--text` :
                    ""
            },
        },
        computedTextColor: {
            get: function () {
                return this.bodyTextColor.length > 0 ?
                    `${this.bodyTextColor}--text` :
                    ""
            },
        },
    },
}
</script>