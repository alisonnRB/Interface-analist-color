<template>
    <div class="input-content" :style="mode ? { 'height': '35%' } : null">
        <div class="lines" :style="mode ? { 'height': '0%' } : null">
            <img :src="drawble.line">
            <div class="image-dell" :style="mode ? { 'bottom': '100%' } : null"></div>
        </div>
        <div class="box">
            <h1>ANALIST</h1>
            <Custom-input @modeON="modeTurn" />
        </div>
    </div>
</template>

<script>
import line from '../icons/lines.png';
import CustomInput from './child/customInput.vue';

import color from '../../assets/js/global';

export default {
    name: 'inputView',
    components: {
        CustomInput,
    },
    data() {
        return {
            drawble: {
                line: line,
            },
            mode: false
        }
    },
    methods: {
        modeTurn(turn) {
            if (turn) {
                this.mode = true;
                this.$emit('modeON', true);
            }
        }
    }

}
</script>