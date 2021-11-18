<template>
  <div class="photo">
    <el-image :src="photo.image" fit="fill" class="image" lazy></el-image>
    <h2 class="title">{{ photo.title }}</h2>
    <div class="rate">
      <h4>Средняя оценка:</h4>
      <el-rate v-model="avg_rating" disabled disabled-void-color="#ccd9da">
      </el-rate>
    </div>
    <div class="rate">
      <h4>Ваша оценка:</h4>
      <el-rate v-model="rating" @change="rate_change(rating)"> </el-rate>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import VitalyService from '@/services/VitalyService.js'

export default {
  setup(props) {
    const avg = ref(props.photo.avg_rating.value__avg)
    const avg_rating = ref(Number(avg.value == null ? 0 : avg.value.toFixed(1)))
    const rating = ref(props.userRating == null ? 0 : props.userRating.value)

    function rate_change(value) {
      if (rating.value != 0) {
        let rate = props.userRating
        rate.value = value
        console.log(rate)
        VitalyService.updateRating(rate)
        return
      }

      post_rating(value)
    }

    function post_rating(rating_value) {
      let rating = {
        photo: props.photo.id,
        user_ip: props.userId,
        value: rating_value,
      }
      VitalyService.createRating(rating)
    }
    return { rate_change, avg_rating, rating }
  },
  props: {
    photo: Object,
    userRating: Object,
    userId: Number,
  },
}
</script>

<style scoped>
.photo {
  border: 1px solid var(--el-border-color-base);
  border-radius: 10px;
  background-color: aliceblue;
}

.rate {
  display: flex;
  justify-content: right;
  margin-bottom: 10px;

  margin-left: 5%;
  margin-right: 5%;
}
.rate h4 {
  flex-grow: 1;
  text-align: left;
  font-weight: 300;
  margin: 0%;
}
.rate .el-rate {
  margin-right: 5%;
}

.image {
  width: 100%;
  display: block;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.title {
  text-align: left;
  margin-left: 5%;
}
</style>
