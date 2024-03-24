
<template>
    <HomeView />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './components/HomeView.vue'

export default {
        name: 'App',
        components: {
            HomeView,
        }
    }
</script>