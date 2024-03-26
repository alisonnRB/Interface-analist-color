<template>
    <div class="input-content">
        <span class="palette">
            <circleColor />
        </span>
    </div>
</template>

<script>
import circleColor from './child/circleColor.vue';

export default {
    name: "contentInfo",
    data(){
        return{

        }
    },
    components:{
        circleColor,
    }
}

</script>