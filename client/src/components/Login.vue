<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">

        <v-toolbar flat dense class="orange darken-2" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="m-5 pl-5 pr-4 pt-2 pb-2" dark>
          <v-text-field
            class="mt-5"
            v-model="email"
            label="email"
            outlined
            shaped
          ></v-text-field>
          <v-text-field
            :append-icon="flag ? 'mdi-eye' : 'mdi-eye-off'"
            :type="!flag ? 'text' : 'password'"
            name="password"
            label="Password"
            hint="At least 8 characters alphanum"
            v-model="password"
            class="input-group--focused"
            @click:append="flag = !flag"
            outlined
            shaped
          ></v-text-field>
          <v-alert
            type="error"
            v-if="error"
            v-model="alert"
            border="left"
            close-text="Close Alert"
            dismissible>
            {{error}}
          </v-alert>
          <v-alert type="success" v-if="reg">
            {{reg}}
          </v-alert>
          <v-btn @click="login" class="orange darken-2 mb-5" dark>Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Authent from '@/services/AuthService'
export default {
  data () {
    return {
      alert: true,
      flag: true,
      email: '',
      password: '',
      reg: null,
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await Authent.login({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.error = err.response.data.error
        this.alert = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
