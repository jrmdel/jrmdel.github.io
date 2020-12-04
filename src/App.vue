<template>
    <v-app>
        <v-img src="@/assets/cajina-mid.jpg" lazy-src="@/assets/cajina-min.jpg">
            <v-container fluid>
                <div class="mx-md-8 pa-lg-16">
                <v-row>
                    <v-col cols="12">
                        <v-card elevation="12" class="tertiary">
                            <v-card-title>
                                <span class="text-h2 primaryLight--text">Ingénieur Fullstack JS & Data</span>
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
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
                                            <div class="text-h4 text-center tertiary--text mx-3">Jeremie Deletraz</div>
                                        </v-row>
                                        <v-row align="center" justify="center" class="pt-4">
                                            <v-icon>mdi-card-account-details-outline</v-icon>
                                            <span class="tertiary--text font-weight-regular text-h6 pl-4">{{computeAge}} ans</span>
                                        </v-row>
                                        <v-row align="center" justify="center" class="pt-2">
                                            <v-icon>mdi-map-marker-outline</v-icon>
                                            <span class="tertiary--text font-weight-regular text-h6 pl-4">France</span>
                                        </v-row>
                                    </v-container>
                                </v-row>
                            </v-container>
                            <Languages/>
                            <Skills/>
                            <FindMe/>
                        </v-card>
                    </v-col>
                    <v-col>
                            <AboutMe/>
                            <Experiences/>
                    </v-col>
                </v-row>
                </div>
            </v-container>
        </v-img>
  </v-app>
</template>

<script>
import FindMe from "@/components/FindMe";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";

export default {
    components:{
        FindMe,
        Skills,
        Languages,
        AboutMe,
        Experiences
    },
    data: () => ({
        birthdate: new Date(Date.parse("1994-03-14")),
    }),
    computed:{
        computeAge(){
            return Math.floor((new Date() - this.birthdate.getTime()) / 3.15576e+10)
        }
    }
};
</script>

<style>
    .v-card__text, .v-card__title {
       word-break: normal; /* maybe !important  */
    }
</style>