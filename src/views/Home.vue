<template>
  <div class="home">
    <div v-for="photo in photos" :key="photo">
      <VitalyPhoto :id="photo" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import VitalyPhoto from '@/components/VitalyPhoto.vue'
export default {
  setup() {
    const photos = ref([1, 2])
    return { photos }
  },
  components: {
    VitalyPhoto,
  },
}
</script>
