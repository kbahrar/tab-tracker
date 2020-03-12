<template>
  <v-app>

  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="cyan">
        <v-toolbar flat dense dark class="red">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="m-5 pl-5 pr-4 pt-2 pb-2" dark>
          <input type="email" name="email" id="email" v-model="email" placeholder="email">
          <br>
          <input type="password" name="password" id="pwd" v-model="password" placeholder="password">
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
  </v-app>
</template>

<script>
import Authent from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const res = await Authent.register({
          email: this.email,
          password: this.password
        })
        console.log(res.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
