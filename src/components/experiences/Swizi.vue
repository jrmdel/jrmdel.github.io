<template>
  <CardTemplate
    cardColor="primary"
    cardTitle="Ingénieur Back-end JS & Lead Data"
    cardSubtitle="Swizi by Open"
    headerTextColor="primaryWhite"
    subtitleColor="tertiary"
    dateString="Oct. 2021 - Mai 2023"
    locationString="Rennes, France"
    iconColor="tertiary"
    textColor="tertiary"
    :skills="skills"
  >
    <template v-slot:content>
      <div>
        Swizi étant principalement une solution de flex-office, elle vient
        s'interfacer sur les briques logicielles présentes dans les bâtiments de
        ses clients. Dans ce contexte, j'étais responsable du développement des
        connecteurs IoT et services tiers.
      </div>
      <ul class="ml-2 mt-1">
        <li>Interaction avec des API externes</li>
        <li>Développement de webservices</li>
      </ul>
    </template>
    <template v-slot:extra>
      <div class="mt-2">
        Puisque nous récupérions beaucoup de données liées aux bâtiments
        (occupation, comptage, réunions...), il était évident de traiter ces
        précieuses informations. J'ai ainsi pris le lead sur toute la partie
        Data, et l'ai déployée <span class="font-italic">from scratch</span> :
      </div>
      <ul class="ml-2 mt-1">
        <li>
          Mise en place de l'infrastructure Azure et du datalake en 3 zones
          (gold, silver et bronze)
        </li>
        <li>Création des pipelines de récupération de données dans Synapse</li>
        <li>Développement des notebooks Python de traitement de la donnée</li>
        <li>Conception des dashboards sur PowerBI Desktop</li>
        <li>
          Mise à disposition via la solution
          <span class="font-italic">embedded</span>
        </li>
      </ul>
    </template>
  </CardTemplate>
</template>

<script>
import CardTemplate from "./helpers/CardTemplate.vue";

export default {
  components: {
    CardTemplate,
  },
  data: () => ({
    skills: ["Node.JS", "Python", "Pandas", "Azure Synapse", "PowerBI"],
  }),
};
</script>