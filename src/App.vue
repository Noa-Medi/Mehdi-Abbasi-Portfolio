<template>
  <LandingPage />



</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #01082E;
  /* Dark space background */
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
  min-height: 100vh;
  /* cursor: none; */
  /* Hide default cursor */
}
</style>
