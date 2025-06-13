<template>
    <div class="timeline-section">
        <img class="timeline-background background-position" src="../assets/Backgroundleyout 1.png"></img>
        <div class="background-overlay background-position"></div>
        <div class="timeline-items">
            <timeline-item date="2019-2022"
                content="Earned my Secondary School Diploma in Math/Physics (top scores)."></timeline-item>
            <timeline-item date="2022 June"
                content="Cracked Iran’s Konkur exam → Accepted for Computer Engineering at Shahrekord University."></timeline-item>
            <timeline-item date="2022 August" content="Moved to Germany (spoiler: best decision ever)."></timeline-item>
            <timeline-item date="2022 September"
                content="Volunteered as a translator for migrants /doctor & police—bridging languages before I bridged tech stacks.  "></timeline-item>
            <timeline-item date="2023-2024" content="I graduated from FOS-BOS Weiden with Mittlere Reife and a GPA of 1.66.
I fell into the Python rabbit hole while building:
A Telegram password manager with TOTP authentication and encryption, as well as atomising scripts."></timeline-item>
            <timeline-item date="2024" content="Built Cupple: A couples’ app with real-time chat, map tracking, and Firebase auth/storage.
Mastered BLoC for state management (because `setState` is for beginners 😉)."></timeline-item>
            <timeline-item date="2025"
                content="Current: I am obsessed with HTML, CSS and JavaScript, as well as Vue.js."></timeline-item>
            <timeline-item date="2025"
                content="I built a cool-looking to-do app and an A** shift generator app** using Vue.js to automate a friend’s workflow."></timeline-item>
        </div>
    </div>
</template>
<script>
import TimelineItem from './TimelineItem.vue';
export default {
    components: {
        TimelineItem
    }
}
</script>
<style scoped>
.timeline-items {

    max-width: 1000px;
    margin: auto;
    top: 20rem;
    display: flex;
    flex-wrap: wrap;
    position: relative
}

.timeline-items::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: white;
    left: calc(50% - 1px);
}

.timeline-section {
    position: relative;
    height: 100rem;
    width: 100vw;
}

.timeline-background {
    position: fixed;
    top: 20rem;
    left: 0;
    height: 300vh;
    width: 100vw;
    z-index: -1;
    object-fit: cover;
    object-position: top;
    pointer-events: none;
    /* filter: blur(4px); */
}



.background-position {
    top: -20rem;
    left: 0;
}
</style>