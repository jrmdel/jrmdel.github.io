<template>
    <v-btn v-if="!isDisabled" class="mx-2" small text outlined :retain-focus-on-click="false" fab @click="sendToggle">
        <v-icon class="toggleUpDown" :class='{ "rotate": displayMore }'>
            mdi-chevron-down
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    props: {
        displayMore: {
            type: Boolean,
            default: true,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        sendToggle() {
            this.$emit("toggle", !this.displayMore);
        },
    },
}
</script>

<style scoped>
    .toggleUpDown {
        transition: transform .3s ease-in-out !important;  
    }

    .toggleUpDown.rotate {
        transform: rotate(180deg);
    }
</style>