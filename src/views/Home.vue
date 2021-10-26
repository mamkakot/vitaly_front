<template>
  <div class="home">
    <h3>
      Пожалуйста, оценитте эти фотографии, ваше мнение очень важно для вас!
    </h3>
    <div v-for="photo in photos" :key="photo.id" class="photo">
      <VitalyPhoto :photo="photo" :userRating="photo.rating" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import VitalyPhoto from '@/components/VitalyPhoto.vue'

import VitalyService from '@/services/VitalyService.js'
export default {
  setup() {
    const photos = ref(0)
    const ratings = ref(Array)
    VitalyService.getPhotos()
      .then((response) => {
        photos.value = response.data
        function getRatingByUserId(photo, user_id) {
          return photo.ratings.filter(function (data) {
            return data.user_ip == user_id
          })
        }
        //console.log(getRatingByUserId(1, 1))
        photos.value.forEach((photo) => {
          console.log(getRatingByUserId(photo, 1))
          photo['rating'] = getRatingByUserId(photo, 1)[0].value
        })
      })
      .catch((error) => console.log(error))

    VitalyService.getUserRatings(1)
      .then((response) => {
        ratings.value = response.data
        // function getRatingByPhoto(photo_id) {
        //   return ratings.value.user_ratings.filter(function (data) {
        //     return data.photo == photo_id
        //   })
        // }
        // console.log(photos)
      })
      .catch((error) => console.log(error))

    return { photos, ratings }
  },
  components: {
    VitalyPhoto,
  },
}
</script>

<style scoped>
.home {
  padding-left: 10%;
  padding-right: 10%;
}
.home h3 {
  font-weight: 100;
}
.photo {
  margin-bottom: 20px;
}

.photo:last-child {
  margin-bottom: 0%;
}

@media only screen and (max-width: 558px) {
  .home {
    padding-left: 1%;
    padding-right: 1%;
  }
}
</style>
