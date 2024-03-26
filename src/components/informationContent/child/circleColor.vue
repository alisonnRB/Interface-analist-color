<template>
    <div class="circleContent">
        <p class="colorText" :style="{ color: color }">{{ color }}</p>
        <div class="circleColor" :style="{ background: color }"></div>
    </div>
</template>

<script>
export default {
    name: "circleColor",
    data() {
        return {

        }
    },
    props: {
        color: String,
        default: "#fff"
    }
}
</script>