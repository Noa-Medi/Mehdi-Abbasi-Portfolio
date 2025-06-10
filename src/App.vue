<template>
  <landing-page />
  <gradient-loop-box
    :wordsList="['Collaborative', 'Analytical', 'Dependable', 'Adaptive', 'Detail-oriented', 'Diligent', 'Driven']" />



</template>

<script>
import LandingPage from './components/LandingPage.vue';
import GradientLoopBox from './components/GradientLoopBox.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    GradientLoopBox
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
