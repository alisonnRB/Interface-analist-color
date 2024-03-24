<template>
    <div class="input-content" :style="mode ? {'height':'35%'} : null">
        <div class="lines">
            <img :src="drawble.line">
            <div class="image-dell" :style="file ? {'bottom' : '105%'}: null"></div>
        </div>
        <div class="box">
            <h1>ANALIST</h1>
            <Custom-input @hasFile="handleSelect"/>
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
                file: null,
                mode: false,
                drawble: {
                    line: line,
                }
            }
        },
        methods: {
            handleSelect(file){
                this.file = file;
            }
        },
        watch: {
            file(New, Old){
                if(New){

                   setTimeout(()=>{
                    this.mode = true;
                   }, 1000);

                }
            }
        }
    }
</script>