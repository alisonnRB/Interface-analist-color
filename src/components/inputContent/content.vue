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
    import axios from 'axios';

    export default {
        name: 'inputView',
        components: {
            CustomInput,
        },
        data(){
            return {
                file: null,
                mode: false,
                colors: null,
                drawble: {
                    line: line,
                }
            }
        },
        methods: {
            handleSelect(file){
                this.file = file;
                if(this.file){
                    this.Search();
                }
            },
            async Search(){
                try{
                    const formData = new FormData;
                    formData.append('image', this.file);

                    const resposta = await axios.post('https://coloranalist.online/src/', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });

                    if(resposta.data.ok){
                        this.colors = resposta.data.response;
                    }else{
                        console.log('erro: ' + resposta.data);
                    }

                }catch(e){
                    console.log(e);
                }
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