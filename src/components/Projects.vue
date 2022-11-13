<template>
    <v-card class="mt-6" color="primaryLight">
        <v-card-title class="text-h4 font-weight-light tertiary--text">Projets & Réalisations</v-card-title>
        <v-card-text>
            <!--On large devices-->
            <v-row class="hidden-md-and-down">
                <v-col cols="12" sm="6">
                    <v-row>
                        <v-col cols="12">
                            <TicketToRide cardColor="primary" titleColor="white" textColor="tertiary" headerTextColor="primaryWhite" iconColor="tertiary"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <NLP cardColor="tertiary" titleColor="white" textColor="primaryWhite" headerTextColor="primaryLight" iconColor="primary"/>
                        </v-col>
                    </v-row>
                    <v-expand-transition>
                        <v-row v-show="displayMore">
                            <v-col cols="12">
                                <CityCompass cardColor="primary" titleColor="white" textColor="tertiary" headerTextColor="primaryWhite" iconColor="tertiary"/>
                            </v-col>
                        </v-row>
                    </v-expand-transition>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-row>
                        <v-col cols="12">
                            <MetalData cardColor="tertiary" titleColor="white" textColor="primaryWhite" headerTextColor="primaryLight" iconColor="primary"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <TrainGraph cardColor="primary" titleColor="white" textColor="tertiary" headerTextColor="primaryWhite" iconColor="tertiary"/>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" class="mt-n2">
                    <SeeMore :displayMore="displayMore" @toggle="v => displayMore = v"/>
                </v-col>
            </v-row>
            <!--On small devices-->
            <v-row class="hidden-lg-and-up">
                <v-col cols="12">
                    <v-row>
                        <v-col cols="12">
                            <TicketToRide cardColor="primary" titleColor="white" textColor="tertiary" headerTextColor="primaryWhite" iconColor="tertiary"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <MetalData cardColor="tertiary" titleColor="white" textColor="primaryWhite" headerTextColor="primaryLight" iconColor="primary"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <TrainGraph cardColor="primary" titleColor="white" textColor="tertiary" headerTextColor="primaryWhite" iconColor="tertiary"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <NLP cardColor="tertiary" titleColor="white" textColor="primaryWhite" headerTextColor="primaryLight" iconColor="primary"/>
                        </v-col>
                    </v-row>
                    <v-expand-transition>
                        <v-row v-show="displayMore">
                            <v-col cols="12">
                                <CityCompass cardColor="primary" titleColor="white" textColor="tertiary" headerTextColor="primaryWhite" iconColor="tertiary"/>
                            </v-col>
                        </v-row>
                    </v-expand-transition>
                    <SeeMore :displayMore="displayMore" @toggle="v => displayMore = v"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
// import ChatbotWeb from "@/components/projects/ChatbotWeb"
// import ClimateData from "@/components/projects/ClimateData"
import TicketToRide from "./projects/TicketToRide.vue"
import NLP from "./projects/NLP.vue"
import MetalData from "./projects/MetalData.vue"
import CityCompass from "./projects/CityCompass.vue"
import TrainGraph from "./projects/TrainGraph.vue"
import SeeMore from "./helpers/SeeMore.vue"

export default {
    components:{
        // ChatbotWeb,
        // ClimateData,
        TicketToRide,
        NLP,
        MetalData,
        CityCompass,
        TrainGraph,
        SeeMore,
    },
    data: ()=>({
        displayMore: false,
    })
}
</script>