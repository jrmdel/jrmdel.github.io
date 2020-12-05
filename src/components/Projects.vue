<template>
    <v-card class="mt-6" color="primaryLight">
        <v-card-title class="text-h4 font-weight-light tertiary--text">Projets & Réalisations</v-card-title>
        <v-card-text>
            <v-row >
                <v-col cols="6">
                    <v-row>
                        <v-col cols="12">
                            <v-card dark color="tertiary">
                                <v-card-title>Chatbot web</v-card-title>
                                <v-card-subtitle>
                                    <v-row align="center" no-gutters>
                                        <v-icon color="primaryLight">mdi-school-outline</v-icon>
                                        <span class="ml-2 primaryWhite--text">Scolaire</span>
                                    </v-row>
                                </v-card-subtitle>
                                <v-card-text>
                                    <div class="primaryLight--text">
                                        Réalisation d'un site web d'administration de chatbots
                                        dans lequel nous devions mettre en place l'architecture REST en back-end
                                        et également faire le lien avec l'API Discord.
                                    </div>
                                </v-card-text>
                                <v-card-actions class="mt-n3">
                                    <v-chip draggable small class="tertiary--text my-1 ml-2" color="warning">Node.JS</v-chip>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
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
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="6">
                    <v-row>
                        <v-col cols="12">
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
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
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
                                        Projet initié avec un ami dans le but de nous faire manipuler les données grâce au langage R.
                                        Nous avons choisi un sujet qui nous tient à coeur, à savoir, étudier un jeu de données climatiques. 
                                    </div>
                                </v-card-text>
                                <v-card-actions class="mt-n3">
                                    <v-chip small class="tertiary--text my-1 ml-2" color="warning">R</v-chip>
                                    <v-chip small class="tertiary--text my-1 ml-2" color="warning">RStudio</v-chip>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primaryWhite" text target="_blank" href="https://github.com/jrmdel/Climate_Data_Analysis">
                                        <v-icon >mdi-open-in-new</v-icon>
                                        <span class="ml-1">Open</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: ()=>({
        
    })
}
</script>