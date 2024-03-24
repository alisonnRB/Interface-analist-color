<template>
    <section class="input-content-part">
        <inputView />
    </section>
</template>

<script>
    import inputView from '../components/inputContent/content.vue';

    export default {
        name: 'HomeView',
        components: {
            inputView,
        }
    }
</script>