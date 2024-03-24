<template>
    <div class="input-box">
      <div id="file-box">
        <label for="image" class="labelBt">

          <div class="custom-input">
            <img :src="drawble.camera" alt="">
            <p>sua imagem aqui ...</p>
          </div>

          <div class="glass">

          </div>

        </label>
      </div>
  
      <input type="file" id="image" name="image" @change="handleImageChange" accept="image/*" />
    </div>
  </template>
  
<script>
    import camera from '../../icons/camera.png';

    export default {
        name: 'CustomInput',
        data() {
          return {
              drawble: {
                  camera: camera
              }
          };
        },
        methods: {
            handleImageChange(e) {
              this.$emit('hasFile',  e.target.files[0]);
            }
        },
    };
</script>
  
