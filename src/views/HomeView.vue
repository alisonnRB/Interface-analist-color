<template>
    <section :style="mode ? { 'height': '35vh' } : null" class="input-content-part">
        <inputView @modeON="modeTurn" />
    </section>
    <section :style="mode ? { 'min-height': '65vh', 'width': '100vw' } : null" class="information-content-part">
        <contentInfo />
    </section>
</template>

<script>
import inputView from '../components/inputContent/content.vue';
import contentInfo from '../components/informationContent/content.vue';

export default {
    name: 'HomeView',
    data() {
        return {
            mode: false
        }
    },
    methods: {
        modeTurn(mode) {
            if (mode) {
                this.mode = mode;
            }
        },
    },
    components: {
        inputView,
        contentInfo,
    }
}
</script>