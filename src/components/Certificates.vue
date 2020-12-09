<template>
    <div class="mt-n4">
        <v-container>
            <v-row class="text-h4 font-weight-light tertiary--text">
                <v-col>Certifications</v-col>
            </v-row>
            <v-row align="center" class="px-4" v-for="(crt,i) in cert" :key="i">
                <v-col cols="auto">
                    <v-icon color="tertiary">mdi-certificate-outline</v-icon>
                    <span class="ml-2">{{crt.year}}</span>
                </v-col>
                <v-col>
                    <span class="tertiary--text">{{crt.title}}</span>
                </v-col>
                <v-col cols="auto">
                    <v-icon color="tertiary">mdi-chart-box-outline</v-icon>
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
            {title: "Certification Le Robert", score: "827/1000", year: "2018", link:""}
        ],
    })
}
</script>