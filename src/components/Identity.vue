<template>
    <div>
        <v-container>
            <v-row justify="center" class="fill-width">
                <v-col cols="auto">
                    <v-avatar class="mx-2" size="240">
                        <v-img height="300" src="@/assets/me-mid.jpg" lazy-src="@/assets/me-min.jpg">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="primary"
                                    ></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
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
    </div>
</template>

<script>
export default {
    data: () => ({
        birthdate: new Date(Date.parse("1994-03-14")),
    }),
    computed:{
        computeAge(){
            return Math.floor((new Date() - this.birthdate.getTime()) / 3.15576e+10)
        }
    }
}
</script>