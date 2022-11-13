<template>
    <CardTemplate 
        :cardColor="cardColor" cardTitle="Ingénieur fullstack pour la cybersécurité" cardSubtitle="Nokia"
        :headerTextColor="headerTextColor" :subtitleColor="subtitleColor"
        dateString="Sept. 2019 - Sept. 2020" locationString="Lannion, France" :iconColor="iconColor"
        :textColor="bodyTextColor" :skills="skills"
    >
        <template v-slot:content>
            <div>
                Pour terminer mon cursus ingénieur, j’ai réalisé une alternance d’un an au sein de Nokia Lannion.
                Le but de ma mission était de développer une preuve de concept
                d’une solution web sous la forme d’un dashboard de vulnérabilités pour venir répondre à des besoins axés cybersécurité.
            </div>
            <div class="mt-1">
                Partant de zéro, j’ai eu la possibilité d’aborder les nombreuses phases de ce projet :
            </div>
            <ul class="ml-2 mt-1">
                <li>Etat de l’art</li>
                <li>Rédaction de documentation technique (notamment cahier des charges)</li>
                <li>Choix de technologies</li>
                <li>Architecture logicielle et développement fullstack</li>
            </ul>
        </template>
        <template v-slot:extra>
            <div class="mt-1">
                J'ai également eu pour missions annexes :
            </div>
            <ul class="ml-2 mt-1">
                <li>Formation d'un nouvel arrivant sur le projet afin qu'il puisse amener la solution en production.</li>
                <li>Mise en place d’un contrôle d’accès souple reprenant les concepts de RBAC et de ABAC.</li>
                <li>Démonstration de notre solution à des collègues basé.e.s aux Etats-Unis.</li>
                <li>Proposition d’architecture permettant l’ajout de nouvelles fonctionnalités sous forme de micro-services.</li>
            </ul>
        </template>
    </CardTemplate>
</template>

<script>
import CardTemplate from './helpers/CardTemplate.vue';

export default {
    components: {
        CardTemplate,
    },
    props: {
        cardColor: {
            type: String,
        },
        subtitleColor: {
            type: String,
        },
        headerTextColor: {
            type: String,
        },
        bodyTextColor: {
            type: String,
        },
        iconColor: {
            type: String,
        },
    },
    data: () => ({
        skills: ["Node.JS", "Vue.JS", "MongoDB", "Git", "Linux"],
    })
}
</script>
