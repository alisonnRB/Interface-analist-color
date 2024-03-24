<template>
    <div class="input-content">
        <div class="lines">
            <img :src="drawble.line">
        </div>
        <div class="box">
            <h1>ANALIST</h1>
            <Custom-input />
        </div>
    </div>
</template>

<script>
    import line from '../icons/lines.png';
    import CustomInput from './child/customInput.vue';

    export default {
        name: 'inputView',
        components: {
            CustomInput,
        },
        data(){
            return {
                drawble: {
                    line: line,
                }
            }
        }
    }
</script>