<template>
  <div class="home">
    <h3>
      Пожалуйста, оценитте эти фотографии, ваше мнение очень важно для вас!
    </h3>
    <div v-for="photo in photos" :key="photo.id" class="photo">
      <VitalyPhoto :photo="photo" :userRating="photo.rating" :userId="userId" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import VitalyPhoto from '@/components/VitalyPhoto.vue'

import VitalyService from '@/services/VitalyService.js'
export default {
  setup() {
    let user_ip = ''
    const userId = ref(0)
    fetch('https://api.ipify.org?format=json')
      .then((x) => x.json())
      .then(({ ip }) => {
        console.log(ip)
        user_ip = ip
        VitalyService.getUsers()
          .then((response) => {
            let users = response.data

            function isUserRigistered(user_ip) {
              return users.filter(function (data) {
                return data.ip == user_ip
              })
            }

            if (isUserRigistered(user_ip).length <= 0) {
              VitalyService.createUserIp({ ip: user_ip.toString() })
                .then((response) => {
                  console.log(response.data)
                  userId.value = response.data.id
                })
                .catch((error) => {
                  console.log('There was an error: ', error.response)
                })
            } else {
              userId.value = isUserRigistered(user_ip)[0].id
            }
          })
          .catch((error) => {
            console.log('There was an error: ', error.response)
          })
      })

      .then()

    const photos = ref(0)
    const ratings = ref(Array)
    VitalyService.getPhotos()
      .then((response) => {
        photos.value = response.data

        function getRatingByUserIp(photo, user_ip) {
          return photo.ratings.filter(function (data) {
            return data.user_ip == user_ip
          })
        }

        photos.value.forEach((photo) => {
          photo['rating'] =
            getRatingByUserIp(photo, user_ip)[0] == null
              ? 0
              : getRatingByUserIp(photo, user_ip)[0].value
        })
      })
      .catch((error) => console.log(error))

    return { photos, ratings, userId }
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
  margin-left: 10%;
  margin-right: 10%;
}

.photo:last-child {
  margin-bottom: 0%;
}

@media only screen and (max-width: 758px) {
  .home {
    padding-left: 1%;
    padding-right: 1%;
  }

  .photo {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
