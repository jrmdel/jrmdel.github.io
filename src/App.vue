<template>
    <v-app>
        <v-img src="@/assets/cajina-mid.jpg" lazy-src="@/assets/cajina-min.jpg">
            <v-container fluid>
                <div class="mx-16 pa-16">
                <v-row>
                    <v-col cols="12">
                        <v-card elevation="12" class="tertiary">
                            <v-card-title>
                                <span class="text-h1 primaryLight--text">Ingénieur Fullstack JS & Data</span>
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
                <!--
                <v-row v-for="i in 9" :key="i">
                    <v-col>
                        <v-card>
                            <v-card-title>Blabla</v-card-title>
                            <v-card-text>
                                {{i}}
                                <p>azaza</p>
                                <p>aalmma</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn>HELP</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                -->
                <v-row justify="space-between">
                    <v-col cols="4">
                        <v-card elevation="12" class="primary">
                            <v-container>
                                <v-row justify="center">
                                    <v-col cols="auto">
                                        <v-avatar class="mx-2" size="256">
                                            <v-img 
                                                src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1025,w_1823,x_45,y_0/f_auto,q_auto,w_1100/v1602272367/shape/mentalfloss/633067-wikimedia_commons.png"
                                            ></v-img>
                                        </v-avatar>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-container>
                                        <v-row justify="center">
                                            <p class="text-h4 text-center white--text mx-3">Jeremie Deletraz</p>
                                            <!--
                                            <p class="text-h6 font-weight-regular text-center mx-3 tertiary--text">
                                                Je suis un ingénieur <span class="font-weight-medium">curieux</span>, repsonsable et enthousiaste, diplômé d'informatique. 
                                                Initialement destiné à évoluer dans le domaine paramédical, 
                                                j'ai décidé de reprendre mes études à 22 ans. Je me suis découvert 
                                                une passion pour la data, et une grande appétence pour le développement web JavaScript.
                                            </p>
                                            -->
                                            <p>
                                                <v-icon>mdi-medal</v-icon>
                                                <span>Heavy-weight champion</span>
                                            </p>
                                        </v-row>
                                    </v-container>
                                </v-row>
                            </v-container>
                            <v-card-title class="white--text">Blabla
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon large>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text>
                                <p>mop</p>
                                <p v-for="j in 3" :key="j">plaa{{j}}aa</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col>
                            <v-card class="mb-6 primaryLight">
                                <v-card-title class="text-h3 font-weight-light tertiary--text">A propos de moi</v-card-title>
                                <v-card-text>
                                    <p class="text-h6 font-weight-regular mx-3 tertiary--text">
                                        Je suis un ingénieur <span class="font-weight-medium">curieux</span>, repsonsable et enthousiaste, diplômé d'informatique. 
                                        Initialement destiné à évoluer dans le domaine paramédical, 
                                        j'ai décidé de reprendre mes études à 22 ans. Je me suis découvert 
                                        une passion pour la data, et une grande appétence pour le développement web JavaScript.
                                    </p>
                                </v-card-text>
                            </v-card>
                        
                            <v-card class="primaryLight">
                                <v-card-title class="text-h3 font-weight-light tertiary--text">Expériences</v-card-title>
                                <v-card-text>
                                    <v-timeline dense align-top>
                                        <v-timeline-item small color="primary">
                                            <v-card dark color="primary">
                                                <v-card-title>Nokia Lannion</v-card-title>
                                                <v-card-text class="tertiary--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque reiciendis vero quo laboriosam dolores vel tenetur dicta harum, consequuntur aut consequatur reprehenderit eligendi maxime facilis quod nesciunt animi commodi eveniet!</v-card-text>
                                            </v-card>
                                        </v-timeline-item>
                                        <v-timeline-item dark small color="secondary">
                                            <v-card color="secondary">
                                                <v-card-title>Ericsson Lannion</v-card-title>
                                                <v-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque reiciendis vero quo laboriosam dolores vel tenetur dicta harum, consequuntur aut consequatur reprehenderit eligendi maxime facilis quod nesciunt animi commodi eveniet!</v-card-text>
                                            </v-card>
                                        </v-timeline-item>
                                        <v-timeline-item small color="tertiary">
                                            <v-card dark color="tertiary">
                                                <v-card-title>La Lunetterie Annecy</v-card-title>
                                                <v-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque reiciendis vero quo laboriosam dolores vel tenetur dicta harum, consequuntur aut consequatur reprehenderit eligendi maxime facilis quod nesciunt animi commodi eveniet!</v-card-text>
                                            </v-card>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-card-text>
                            </v-card>
                    </v-col>
                </v-row>
                </div>
            </v-container>
        </v-img>
  </v-app>
</template>

<script>
export default {
    data: () => ({
        //
    }),
};
</script>

<style lang="scss">
    $icon-size: 256px;
</style>