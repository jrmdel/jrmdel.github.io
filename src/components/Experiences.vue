<template>
    <v-card class="primaryLight">
        <v-card-title class="text-h4 font-weight-light tertiary--text">Expériences</v-card-title>
        <v-card-text>
            <div class="hidden-xs-only">
                <v-timeline dense align-top>
                    <v-timeline-item small color="primary">
                        <Nokia/>
                    </v-timeline-item>
                    <v-timeline-item small color="tertiary">
                        <Ericsson/>
                    </v-timeline-item>
                    <v-timeline-item small color="primary">
                        <Lunetterie/>
                    </v-timeline-item>
                </v-timeline>
            </div>
            <div class="hidden-sm-and-up">
                <v-container fluid>
                    <v-row>
                        <v-col cols="12">
                            <Nokia/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <Ericsson/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <Lunetterie/>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import Nokia from "@/components/experiences/Nokia";
import Ericsson from "@/components/experiences/Ericsson";
import Lunetterie from "@/components/experiences/Lunetterie";

export default {
    components:{
        Nokia,
        Ericsson,
        Lunetterie
    },
}
</script>