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
            <timeline-item date="2025 Febuary"
                content="I unlocked the world of web development—mastering HTML, CSS, and JavaScript, then diving into Vue.js to bring ideas to life."></timeline-item>
            <timeline-item date="2025 May"
                content="Built a sleek to-do app and a shift generator app with Vue.js, automating a friend’s workflow and saving hours of manual work."></timeline-item>
            <timeline-item date="2025 June"
                content="Leveling up with C#, now developing a Warehouse Simulator using OOP principles and the A Pathfinding Algorithm* for smart logistics. (Coming soon!)">
            </timeline-item>
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
    height: auto;
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

@media (max-width: 768px) {
    .timeline-items::before {
        left: 1.2rem;
    }

    .timeline-items {
        max-width: 100%;
        /* margin: auto; */
        top: 03rem;
    }

    .timeline-background {
        position: absolute;
        top: -10rem;
        right: 0;
        height: 300vh;
        width: 130vw;
        z-index: -1;
        object-fit: cover;
        object-position: top;
        pointer-events: none;
        /* filter: blur(4px); */
    }
}
</style>