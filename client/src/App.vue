<template>
  <div id="app">
    <v-app class="orange lighten-4">
      <main>
      <AppHeader />
      <v-content fluid>
        <router-view/>
      </v-content>
      </main>
    </v-app>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #FFE0B2;
}
</style>
