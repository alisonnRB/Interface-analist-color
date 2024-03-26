<template>
    <div class="input-content">
        <div class="palette">
            <span class="title-box">
                <h2>PALETA</h2>
            </span>

            <template v-if="palette.length > 0">
                <span class="content-color">
                    <circleColor v-for="(color, index) in palette" :key="index" :color="color" />
                </span>
            </template>

            <template v-else>
                <span>
                </span>
            </template>

        </div>
    </div>
</template>

<script>
import circleColor from './child/circleColor.vue';

export default {
    name: "contentInfo",
    data() {
        return {
            palette: [],
        }
    },
    components: {
        circleColor,
    },
    props: {
        file: {
            type: File,
            default: null
        },
        colors: {
            type: Object,
            default: null
        }
    },
    watch: {
        file(New, Old) {
            console.log(New)
        },
        colors(New, Old) {
            this.palette = [];
            if (New && New['palette-HEX']) {

                this.palette = New['palette-HEX'];
            } else {
                this.palette = []
            }
        }
    }
}

</script>
