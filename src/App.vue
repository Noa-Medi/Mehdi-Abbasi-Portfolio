<template>
  <landing-page />
  <div class="blue-background">
    <gradient-loop-box :wordsList="[
      $t('qualities.list.1'),
      $t('qualities.list.2'),
      $t('qualities.list.3'),
      $t('qualities.list.4'),
      $t('qualities.list.5'),
      $t('qualities.list.6'),
      $t('qualities.list.7')]" />
  </div>
  <about-me />
  <timeline />
  <info-cards />
  <projects-section />
  <div class="blue-background">
    <gradient-loop-box :wordsListWithIcons="contactInfo" />
  </div>
  <div class="end-section" id="contact-me">
    <contact />
    <copyright />
    <img src="./assets/hero blur img.png" alt="" class="background">
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import GradientLoopBox from './components/GradientLoopBox.vue';
import AboutMe from './components/AboutMe.vue';
import Timeline from './components/Timeline.vue';
import InfoCards from './components/InfoCards.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import Contact from './components/Contact.vue';
import Copyright from './components/Copyright.vue';



export default {
  name: 'App',
  components: {
    LandingPage,
    GradientLoopBox,
    AboutMe,
    Timeline,
    InfoCards,
    ProjectsSection,
    Contact,
    Copyright,


  },
  data() {
    return {
      contactInfo: [
        { name: 'Email', icon: require('./assets/email.png') },
        { name: 'Whatsapp', icon: require('./assets/whatsapp.png') },
        { name: 'Instagram', icon: require('./assets/instagram.png') },
        { name: 'Telegram', icon: require('./assets/telegram.png') },
      ]
    }
  }
}
</script>

<style>
.end-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.background {
  position: absolute;
  bottom: -60rem;
  width: 100rem;
  /* height: 40rem; */
  object-fit: cover;
  /* z-index: -1; */
  pointer-events: none;
}

* {
  box-sizing: border-box;
}

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

/* Responsive utility classes */
@media (max-width: 768px) {
  .hide-mobile {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .hide-desktop {
    display: none !important;
  }
}
</style>
