<template>
    <div>
        <v-container>
            <v-row class="text-h4 font-weight-light tertiary--text">
                <v-col>Retrouvez-moi</v-col>
            </v-row>
            <!--Standard display except on medium screens-->
            <v-row align="center" justify="space-around" class="pa-4 hidden-md-and-up">
                <v-tooltip bottom v-for="(site,i) in sites" :key="i">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" fab :color="site.back" :href="site.link" target="_blank">
                            <v-icon :color="site.logo" x-large>{{site.icon}}</v-icon>
                        </v-btn>
                    </template>
                    <span>{{site.text}}</span>
                </v-tooltip>
            </v-row>
            <!--Visible as 2 rows only on md-->
            <v-row align="center" class="pa-4 hidden-sm-and-down">
                <v-col cols="6" v-for="(site,i) in sites" :key="i">
                    <v-row justify="center" class="mb-4 mb-md-8">
                        <v-tooltip bottom transition="scale-transition">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn fab v-bind="attrs" v-on="on" :color="site.back" :href="site.link" target="_blank">
                                    <v-icon :color="site.logo" x-large>{{site.icon}}</v-icon>
                                </v-btn>
                            </template>
                            <span>{{site.text}}</span>
                        </v-tooltip>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data:() => ({
        sites:[
            {text: "Mon génial GitHub", icon: "mdi-github", link: "https://github.com/jrmdel", logo:"black", back:"white"},
            {text: "Mon studieux Stack Overflow", icon: "mdi-stack-overflow", link: "https://stackoverflow.com/users/12194386", logo:"#f48024", back:"white"},
            {text: "Mon limpide LinkedIn", icon: "mdi-linkedin", link: "https://www.linkedin.com/in/jeremie-deletraz/", logo:"#006192", back:"white"},
            {text: "Mon sportif Strava", icon: "M14.92 17.16l1.83-3.63h2.7l-4.51 8.97l-4.57-8.97h2.7l1.85 3.63m-4.29-8.5l-2.45 4.89H4.55L10.61 1.5l6.13 12.05h-3.63l-2.48-4.89z", link: "https://www.strava.com/athletes/2740041", logo:"#FC4C02", back:"white"},
        ]
    })
}
</script>