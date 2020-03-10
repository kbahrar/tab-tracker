<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" id="email" v-model="email">
    <br>
    <input type="password" name="password" id="pwd" v-model="password">
    <br>
    <input type="button" value="Register" @click="register">
  </div>
</template>

<script>
import Authent from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const res = await Authent.register({
        email: this.email,
        password: this.password
      })
      console.log(res.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
