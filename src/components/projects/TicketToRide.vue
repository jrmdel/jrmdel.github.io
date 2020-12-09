<template>
    <v-card dark color="primary">
        <v-card-title>Ticket To Ride</v-card-title>
        <v-card-subtitle>
            <v-row align="center" no-gutters>
                <v-icon color="tertiary">mdi-atom-variant</v-icon>
                <span class="ml-2 primaryWhite--text">Personnel</span>
            </v-row>
        </v-card-subtitle>
        <v-card-text>
            <div class="tertiary--text">
                Réalisation d'une application web responsive permettant le suivi et l'aide au décompte des points
                lors d'une partie du jeu <span class="font-italic">Les Aventuriers du Rail Autout du Monde</span>.
                Les parties sont stockées sur Firebase et consultables en temps réel par les joueurs.euses.
            </div>
        </v-card-text>
        <v-card-actions class="mt-n3">
            <v-chip small class="tertiary--text my-1 ml-2" color="warning">Vue.JS</v-chip>
            <v-chip small class="tertiary--text my-1 ml-2" color="warning">Firebase</v-chip>
            <v-spacer></v-spacer>
            <v-btn color="primaryWhite" text target="_blank" href="https://jrmdel.github.io/TicketToRide">
                <v-icon >mdi-open-in-new</v-icon>
                <span class="ml-1">Open</span>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>