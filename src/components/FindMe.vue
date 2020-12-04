<template>
    <div>
        <v-container>
            <v-row class="text-h4 font-weight-light tertiary--text">
                <v-col>Retrouvez-moi</v-col>
            </v-row>
            <v-row align="center" justify="space-around" class="pa-4">
                <v-btn v-for="(site,i) in sites" :key="i" fab :color="site.back" :href="site.link" target="_blank">
                    <v-icon :color="site.logo" x-large>{{site.icon}}</v-icon>
                </v-btn>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data:() => ({
        sites:[
            {icon: "mdi-github", link: "https://github.com/jrmdel", logo:"black", back:"white"},
            {icon: "mdi-stack-overflow", link: "https://stackoverflow.com/users/12194386", logo:"#f48024", back:"white"},
            {icon: "mdi-linkedin", link: "https://www.linkedin.com/in/jeremie-deletraz/", logo:"#006192", back:"white"},
            {icon: "M14.92 17.16l1.83-3.63h2.7l-4.51 8.97l-4.57-8.97h2.7l1.85 3.63m-4.29-8.5l-2.45 4.89H4.55L10.61 1.5l6.13 12.05h-3.63l-2.48-4.89z", link: "https://www.strava.com/athletes/2740041", logo:"#FC4C02", back:"white"},
        ]
    })
}
</script>