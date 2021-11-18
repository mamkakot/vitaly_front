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

  getUsers() {
    return apiClient.get('/user_ips')
  },

  getUserInfo(id) {
    return apiClient.get('user_ips/' + id)
  },

  getRatingInfo(id) {
    return apiClient.get('ratings/' + id)
  },

  // добавить на сервер обработку IP, отправку рейтингов только нужного юзера
  getUserRatings(ip) {
    return apiClient.get('/user_ips/' + ip)
  },

  createUserIp(ip) {
    return apiClient.post('/user_ips/', ip)
  },

  createRating(rating) {
    return apiClient.post('/ratings/', rating)
  },

  updateRating(rating) {
    console.log(rating)
    return apiClient.put('/ratings/' + rating.id + '/', rating)
  },
}
