<template>
    <section class="input-content-part">
        <inputView />
    </section>
    <section class="information-content-part">

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