<template>
    <div class="mt-n4">
        <v-container>
            <v-row class="text-h4 font-weight-light tertiary--text">
                <v-col>Certifications</v-col>
            </v-row>
            <v-row align="center" class="px-2" v-for="(crt,i) in cert" :key="i">
                <v-col cols="auto">
                    <v-row class="my-n1" no-gutters align="center">
                    <v-btn icon :disabled="!crt.link" :href="crt.link">
                        <v-icon color="tertiary">mdi-certificate-outline</v-icon>
                    </v-btn>
                    <span class="ml-2">{{crt.year}}</span>
                    </v-row>
                </v-col>
                <v-col>
                    <span class="tertiary--text">{{crt.title}}</span>
                </v-col>
                <v-col v-if="crt.score" cols="auto">
                    <v-icon small color="tertiary">mdi-chart-box-outline</v-icon>
                    <span class="ml-2">{{crt.score}}</span>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: ()=>({
        cert: [
            {title: "TOEIC", score: "960/990", year: "2018"},
            {title: "Le Robert", score: "829/1000", year: "2018", link:"https://examen.certification-le-robert.com/index.html#/certificationPublic/SPUB3VAK2G"},
            {title: "Develop Your Cultural Intelligence", year:"2020", link:"https://www.futurelearn.com/certificates/10ayxkf"}
        ],
    })
}
</script>