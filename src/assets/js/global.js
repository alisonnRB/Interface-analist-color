import axios from "axios";
import { EventBus } from "../../eventBus";

class Color {
    constructor() {
        this.palette = [];
        this.representative = [];
        this.predominance = [];
        this.distinct = [];
        this.file = null;
        this.modifica = false;
    }

    async search() {
        try {
            const formData = new FormData();
            formData.append('image', this.file);

            const response = await axios.post('https://coloranalist.online/api/analist', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status == 200) {
                this.separator(response.data);
            } else {
                console.log('Erro: ' + response.data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    setFile(value) {
        this.file = value;
        this.search();
    }

    getFile() {
        return this.file;
    }

    separator(object) {
        this.setPalette(object['palette-HEX']);
        this.setRepresentative(object['representative-HEX']);
        this.setPredominance(object['predominance-HEX']);
        this.setDistinct(object['distinct-HEX']);

        this.modifica = true;
        EventBus.emit('modifica-mudou', this.modifica);
    }

    setPalette(value) {
        this.palette = value;
    }

    getPalette() {
        return this.palette;
    }

    setRepresentative(value) {
        this.representative = value;
    }

    getRepresentative() {
        return this.representative;
    }

    setPredominance(value) {
        this.predominance = value;
    }

    getPredominance() {
        return this.predominance;
    }

    setDistinct(value) {
        this.distinct = value;
    }

    getDistinct() {
        return this.distinct;
    }

    setModifica(value) {
        this.modifica = value;
        EventBus.emit('modifica-mudou', this.modifica);
    }
}

const color = new Color();
export default color;
