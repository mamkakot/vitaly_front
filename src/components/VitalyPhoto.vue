<template>
  <div class="photo">
    <h5>{{ photo.title }}</h5>
    <el-image :src="photo.image"></el-image>
    <el-row>
      <el-col :span="18">
        <el-slider v-model="photo_value" :step="10" show-stops> </el-slider>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="rate(photo_value)"
          >Оценить!</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import VitalyService from '@/services/VitalyService.js'

export default {
  setup(props) {
    const photo = ref(0)
    VitalyService.getPhotoInfo(props.id)
      .then((response) => {
        photo.value = response.data
      })
      .catch((error) => console.log(error))

    const photo_value = ref(0)
    function rate(value) {
      console.log(value)
      photo_value.value = 0
    }
    return { photo, photo_value, rate }
  },
  props: {
    id: Number,
  },
}
</script>

<style scoped></style>
