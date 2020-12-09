<template>
    <v-card dark color="primary">
        <v-card-title>Natural Language Processing</v-card-title>
        <v-card-subtitle>
            <v-row align="center" no-gutters>
                <v-icon color="tertiary">mdi-school-outline</v-icon>
                <span class="ml-2 primaryWhite--text">Scolaire</span>
            </v-row>
        </v-card-subtitle>
        <v-card-text>
            <div class="tertiary--text">
                Par équipe de 4, nous devions entraîner un réseau de neurones via différentes méthodes
                afin qu'il traduise de courtes phrases.
                Nous avons essayé plusieurs architectures (LSTM, RNN, avec ou sans dropout, avec ou sans attention)
                et les avons évalué via le score BLEU et le Word Error Rate.
            </div>
        </v-card-text>
        <v-card-actions class="mt-n3">
            <v-chip small class="tertiary--text my-1 ml-2" color="warning">Python</v-chip>
            <v-chip small class="tertiary--text my-1 ml-2" color="warning">Keras</v-chip>
        </v-card-actions>
    </v-card>
</template>