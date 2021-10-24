import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPhotos() {
    return apiClient.get('/photos')
  },

  getPhotoInfo(id) {
    return apiClient.get('/photos/' + id)
  },
}
