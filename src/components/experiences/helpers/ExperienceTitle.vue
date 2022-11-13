<template>
    <div>
        <v-card-title class="text-wrap" :class="computedTitleColor">{{ title }}</v-card-title>
        <v-card-subtitle>
            <span class="text-h6" :class="computedSubtitleColor">{{ subtitle }}</span>
        </v-card-subtitle>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        titleColor: {
            type: String,
            default: "",
        },
        subtitle: {
            type: String,
        },
        subtitleColor: {
            type: String,
            default: "",
        },
    },
    computed: {
        computedTitleColor: {
            get: function () {
                return this.titleColor.length > 0 ?
                    `${this.titleColor}--text` :
                    ""
            },
        },
        computedSubtitleColor: {
            get: function () {
                return this.subtitleColor.length > 0 ?
                    `${this.subtitleColor}--text` :
                    ""
            },
        },
    },
}
</script>