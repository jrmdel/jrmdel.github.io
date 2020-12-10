<template>
    <v-card class="mt-6" color="primaryLight">
        <v-card-title class="text-h4 font-weight-light tertiary--text">Projets & Réalisations</v-card-title>
        <v-card-text>
            <!--On large devices-->
            <v-row class="hidden-md-and-down">
                <v-col cols="12" sm="6">
                    <v-row>
                        <v-col cols="12">
                            <ChatbotWeb/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <TicketToRide/>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-row>
                        <v-col cols="12">
                            <NLP/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <ClimateData/>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <!--On small devices-->
            <v-row class="hidden-lg-and-up">
                <v-col cols="12">
                    <v-row>
                        <v-col cols="12">
                            <ChatbotWeb/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <NLP/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <ClimateData/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <TicketToRide/>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import ChatbotWeb from "@/components/projects/ChatbotWeb"
import TicketToRide from "@/components/projects/TicketToRide"
import NLP from "@/components/projects/NLP"
import ClimateData from "@/components/projects/ClimateData"

export default {
    components:{
        ChatbotWeb,
        TicketToRide,
        NLP,
        ClimateData
    },
    data: ()=>({
        
    })
}
</script>