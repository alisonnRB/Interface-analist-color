<template>
    <section :style="mode ? {'height' : '35vh'} : null" class="input-content-part">
        <inputView @hasFile="handleSelect" @hasInfos="colorChanges"/>
    </section>
    <section :style="mode ? {'height':'65vh', 'width': '100vw'} : null" class="information-content-part">
        <contentInfo :file="file" :colors="colors"/>
    </section>
</template>

<script>
    import inputView from '../components/inputContent/content.vue';
    import contentInfo from '../components/informationContent/content.vue';

    export default {
        name: 'HomeView',
        data(){
            return {
                colors: null,
                file: null,
                mode: false
            }
        },
        methods:{
            handleSelect(file){
                this.file = file;
            },
            colorChanges(colors){
                this.colors = colors;
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
            contentInfo,
        }
    }
</script>