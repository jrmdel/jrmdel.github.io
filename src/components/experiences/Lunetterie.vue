<template>
  <CardTemplate
    :cardColor="cardColor"
    cardTitle="Opticien diplômé"
    cardSubtitle="La Lunetterie"
    :headerTextColor="headerTextColor"
    :subtitleColor="subtitleColor"
    dateString="Août 2014 - Juin 2016"
    locationString="Annecy, France"
    :iconColor="iconColor"
    :textColor="bodyTextColor"
    :skills="skills"
  >
    <template v-slot:extra>
      <div>
        Magasin indépendant proposant principalement des lunettes de créateurs,
        optiques ou solaires.
      </div>
      <ul class="ml-2 mt-1">
        <li>Vente et conseils</li>
        <li>Responsable des examens de la vue</li>
        <li>Ajustage de montures et taille de verres</li>
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
    skills: ['Relation client', 'Organisation'],
  }),
};
</script>
