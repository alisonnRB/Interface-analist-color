<template>
    <div class="content-bar">

        <img :src="voltar" class="comeback" @click="navigate">

        <div class="bar">
            <span class="method">
                <h3>POST</h3>
            </span>
            <span class="request">
                <p>https://coloranalist.online/src/, {formdata(&#34;image&#34;)}</p>
            </span>
        </div>


        <p class="aviso">A api que analisa cores está disponível para uso!</p>
    </div>
</template>


<script>
import comeback from '../components/icons/voltar.png';

export default {
    name: 'apiPage',
    data() {
        return {
            voltar: comeback,
        }
    },
    methods: {
        navigate() {
            this.$router.push('/')
        }
    }
}
</script>
