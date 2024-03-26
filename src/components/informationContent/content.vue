<template>
    <div class="input-content">
        <div class="palette">
            <span class="title-box">
                <h2>PALETA</h2>
            </span>

            <template v-if="palette.length > 0">
                <span class="content-color">
                    <circleColor v-for="(color, index) in palette" :key="index" :color="color" />
                </span>
            </template>

            <template v-else>
                <span>
                    Nenhuma cor disponível.
                </span>
            </template>
        </div>
    </div>
</template>

<script>
import circleColor from './child/circleColor.vue';
import { EventBus } from "../../eventBus";
import color from '@/assets/js/global';

export default {
    name: "contentInfo",
    data() {
        return {
            palette: [],
        }
    },
    components: {
        circleColor,
    },
    mounted() {
        EventBus.on("modifica-mudou", (novaModifica) => {
            if (novaModifica) {
                this.palette = color.getPalette();
                color.setModifica(false);
            }
        });
    },
}

</script>
