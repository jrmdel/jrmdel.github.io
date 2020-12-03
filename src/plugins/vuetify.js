import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                /*
                // First set
                primary: "#6369D1",
                secondary: "#60E1E0",
                tertiary:"#31393C",
                quaternary: "#4C2C69",
                accent: "#FFDA22",
                error:"#540B0E",
                background: "#F5ECEB"
                */
                
                // Second set
                primary:"#548096",
                primaryLight: "#93AEBC",
                secondary:"#6D1A36",
                tertiary: "#192C32",
                quaternary:"#916953",
                accent: "#F9E900",
                warning:"#F6AE2D",
                error:"#96031A",
            }
            
        }
    }
});
