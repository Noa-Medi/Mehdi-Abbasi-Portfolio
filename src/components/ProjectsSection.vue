<template>
    <div id="projects" class="projects-section">
        <div class="project-wrapper">
            <Project v-for="(project, index) in projects" :key="project.name" :project="project"
                :class="{ 'away': activeIndex > index }" :style="{
                    transform: activeIndex > index ? 'translateY(-120vh)' : `translateY(${index * 1.5}rem)`,
                    zIndex: projects.length - index
                }" />
        </div>
    </div>
</template>

<script>
import Project from './Project.vue'

export default {
    components: {
        Project,
    },
    data() {
        return {
            activeIndex: 0,
            projects: [
                {
                    name: 'DoLove',
                    date: '2024',
                    title: 'Beautiful Login Page',
                    imagePath: require('../assets/DoLove.png'),
                    description: [
                        'Bloc state management ',
                        'Firebase Auth Login',
                        'Realtime Database Tracking',
                        'Firebase Storage Media',
                    ]
                },
                {
                    name: 'TELEGRAM BOT',
                    date: '2024',
                    title: 'Telegram-Bot Password Manager with 2FA',
                    imagePath: require('../assets/Password-Manager-bot.jpg'),
                    description: [
                        'Telegram + Firebase Auth ',
                        '2FA Secure Login',
                        'Encrypted Data Storage',
                        'Python Backend Logic',
                    ]
                },
                {
                    name: 'NEO TODO',
                    date: '2025',
                    title: 'NeonFlow Single-Page Todo App',
                    imagePath: require('../assets/macbook-Todo.png'),
                    description: [
                        'Seamless UI/UX ',
                        'Class-Oriented Architecture',
                        'Real-Time Editable Structure',
                        'Persistent Local Storage',
                    ]
                },
                {
                    name: 'SHIFT GENERATOR',
                    date: '2025',
                    title: 'AutoShift – One-Click Scheduling',
                    imagePath: require('../assets/Shift-generator.png'),
                    description: [
                        'Dynamic Employee Management ',
                        'AI-Like Shift Generation',
                        'Visual Color Coding',
                        'Export-Ready Workflows',
                    ]
                },
            ],
            scrollDistance: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.calculateScrollDistance)
        this.calculateScrollDistance()
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.calculateScrollDistance)
    },
    methods: {
        calculateScrollDistance() {
            // Distance between card transitions (half viewport height)
            this.scrollDistance = window.innerHeight / 2
        },
        handleScroll() {
            const scrollPosition = window.scrollY
            const componentTop = this.$el.offsetTop
            const componentHeight = this.$el.offsetHeight

            // Only activate when we're in the component's viewport
            if (scrollPosition > componentTop && scrollPosition < componentTop + componentHeight) {
                const relativeScroll = scrollPosition - componentTop
                const newIndex = Math.floor(relativeScroll / this.scrollDistance)
                this.activeIndex = Math.min(this.projects.length - 1, Math.max(0, newIndex))
            }
        }
    }
}
</script>

<style scoped>
.projects-section {
    height: 300vh;
    /* Adjust based on number of projects */
    position: relative;
    width: 100%;
}

.project-wrapper {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 2.5rem;
}

@media (max-width: 1024px) {

    /* Tablet styles */
    .projects-section {
        height: 350vh;
        /* Slightly more height for better scrolling on tablets */
    }
}

@media (max-width: 768px) {

    /* Mobile styles */
    .projects-section {
        height: 400vh;
        /* More height for mobile to accommodate smaller viewport */
    }

    .project-wrapper {
        padding-top: 5.5rem;
    }
}
</style>