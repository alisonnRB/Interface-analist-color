<template>
    <section :style="mode ? {'height' : '35vh'} : null" class="input-content-part">
        <inputView @hasFile="handleSelect"/>
    </section>
    <section :style="mode ? {'height':'65vh', 'width': '100vw'} : null" class="information-content-part">

    </section>
</template>

<script>
    import inputView from '../components/inputContent/content.vue';

    export default {
        name: 'HomeView',
        data(){
            return {
                file: null,
                mode: false
            }
        },
        methods:{
            handleSelect(file){
                this.file = file;
            }
        },
        watch: {
            file(New, Old){
                if(New){
                    this.mode = true;
                }
            }
        },
        components: {
            inputView,
        }
    }
</script>