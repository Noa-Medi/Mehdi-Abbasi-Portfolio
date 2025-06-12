<template>
  <landing-page />
  <div class="blue-background">
    <gradient-loop-box
      :wordsList="['Collaborative', 'Analytical', 'Dependable', 'Adaptive', 'Detail-oriented', 'Diligent', 'Driven']" />
  </div>
  <about-me />
  <timeline />
  <info-cards />


</template>

<script>
import LandingPage from './components/LandingPage.vue';
import GradientLoopBox from './components/GradientLoopBox.vue';
import AboutMe from './components/AboutMe.vue';
import Timeline from './components/Timeline.vue';
import InfoCards from './components/InfoCards.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
    GradientLoopBox,
    AboutMe,
    Timeline,
    InfoCards
  }
}
</script>

<style>
/* * {
  border: red 1px solid;
} */

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

@media (min-aspect-ratio: 16/9) {}

.blue-background {
  width: 100%;
  padding: 7rem 0;
  height: 10rem;
  background-color: #01082E;
}
</style>
