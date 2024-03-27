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


        <div class="content-infos">

            <div class="especifc-colors">

                <span class="box-especif" v-if="predominace[0] == '#'">
                    <div class="line"></div>
                    <circle-color :color="predominace" />
                    <p class="desc">COR PREDOMINANTE</p>
                </span>

                <span class="box-especif" v-if="representative[0] == '#'">
                    <div class="line"></div>
                    <circle-color :color="representative" />
                    <p class="desc">COR REPRESENTATIVA</p>
                </span>

                <span class="box-especif" v-if="distinct[0] == '#'">
                    <div class="line"></div>
                    <circle-color :color="distinct" />
                    <p class="desc">COR MAIS DISTINTA</p>
                </span>
            </div>

            <div class="image">
                <img :src="file" @load="applyBoxShadow">
                <div class="shadow"></div>
                <div class="suport"></div>
            </div>
        </div>

    </div>
</template>

<script>
import circleColor from './child/circleColor.vue';
import { EventBus } from "../../eventBus";
import color from '@/assets/js/global';
import { render } from 'vue';

export default {
    name: "contentInfo",
    data() {
        return {
            palette: [],
            representative: '',
            predominace: '',
            distinct: '',
            file: null
        }
    },
    components: {
        circleColor,
    },
    mounted() {
        EventBus.on("modifica-mudou", (novaModifica) => {
            if (novaModifica) {
                this.palette = color.getPalette();
                this.representative = color.getRepresentative();
                this.predominace = color.getPredominance();
                this.distinct = color.getDistinct();
                this.readImage();
                color.setModifica(false);
            }
        });
    },
    methods: {
        readImage() {
            const reader = new FileReader();
            const image = color.getFile();

            reader.onloadend = () => {
                this.file = reader.result;
            };

            if (image) {
                reader.readAsDataURL(image);
            } else {
                this.file = null;
            }
        }
    }
}

</script>
