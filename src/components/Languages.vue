<template>
    <div class="mt-n4">
        <v-container>
            <v-row class="text-h4 font-weight-light tertiary--text">
                <v-col>Langues</v-col>
            </v-row>
            <v-row align="center" justify="space-around">
                <v-col cols="auto" v-for="(l, i) in languages" :key="i">
                    <v-progress-circular :rotate="360" :size="100" :width="6" :value="l.val" color="warning">
                        <span class="tertiary--text font-weight-medium">{{l.lang}}</span>
                    </v-progress-circular>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: ()=>({
        languages: [
            {lang: "Français", val:100},
            {lang: "Anglais", val: 95}
        ],
    })
}
</script>