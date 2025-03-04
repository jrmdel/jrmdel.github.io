<template>
  <v-card dark color="tertiary">
    <v-card-title>Analyse de données</v-card-title>
    <v-card-subtitle>
      <v-row align="center" no-gutters>
        <v-icon color="primaryLight">mdi-atom-variant</v-icon>
        <span class="ml-2 primaryWhite--text">Personnel</span>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      <div class="primaryLight--text">
        Projet initié avec un ami dans le but de nous faire manipuler les données grâce au langage
        R. Nous avons choisi un sujet qui nous tient à coeur, à savoir, étudier un jeu de données
        climatiques.
      </div>
    </v-card-text>
    <v-card-actions class="mt-n3">
      <v-chip small class="tertiary--text my-1 ml-2" color="warning">R</v-chip>
      <v-chip small class="tertiary--text my-1 ml-2" color="warning">RStudio</v-chip>
      <v-spacer></v-spacer>
      <v-btn
        color="primaryWhite"
        variant="text"
        target="_blank"
        href="https://github.com/jrmdel/Climate_Data_Analysis"
      >
        <v-icon>mdi-open-in-new</v-icon>
        <span class="ml-1">Open</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
