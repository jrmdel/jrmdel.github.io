<template>
    <v-card class="primaryLight">
        <v-card-title class="text-h4 font-weight-light tertiary--text">Expériences</v-card-title>
        <v-card-text>
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