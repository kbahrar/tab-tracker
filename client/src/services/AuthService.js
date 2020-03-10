import Api from '@/services/api'

export default {
  register (cred) {
    return Api().post('register', cred)
  }
}
