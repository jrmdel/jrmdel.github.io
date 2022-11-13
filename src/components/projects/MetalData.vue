<template>
    <ProjectTemplate
        title="Analyse et fouille de données" :titleColor="titleColor" :cardColor="cardColor"
        :iconColor="iconColor" :headerTextColor="headerTextColor"
        leftIcon="mdi-school-outline" leftText="Scolaire"
        rightIcon="mdi-timelapse" rightText="+60h"
        :textColor="textColor" :skills="skills" link="https://jrmdel.github.io/Metal100/"
    >
        <template v-slot:content>
            <div>
                Extraction d’information à partir d’un jeu de données de 1000 chansons, issues de l’API Spotify,
                en utilisant des méthodes d’analyse (AFC, ACP et ACM).
                L'étude était axée sur l’analyse des relations entre les chansons présentes sur les 100 meilleurs
                albums de métal selon le 
                <a target="_blank" href="https://www.rollingstone.com/music/music-lists/the-100-greatest-metal-albums-of-all-time-113614">
                magazine Rolling Stones.
                </a>
            </div>
        </template>
    </ProjectTemplate>
</template>

<script>
import ProjectTemplate from './helpers/ProjectTemplate.vue';

export default {
    components: {
        ProjectTemplate,
    },
    props: {
        iconColor: {
            type: String,
        },
        cardColor: {
            type: String,
        },
        titleColor: {
            type: String,
        },
        textColor: {
            type: String,
        },
        headerTextColor: {
            type: String,
        },
    },
    data: () => ({
        skills: ["R", "RStudio"]
    }),
}
</script>