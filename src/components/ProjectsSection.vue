<template>
    <div id="projects" class="projects-section">
        <div class="project-wrapper">
            <Project v-for="(project, index) in projects" :key="project.key" :project="project"
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
            projectKeys: ['doLove', 'telegramBot', 'neoTodo', 'shiftGenerator'],
            scrollDistance: 0
        }
    }, computed: {
        projects() {
            return this.projectKeys.map(key => ({
                key,
                name: this.$t(`projects.${key}.name`),
                date: this.$t(`projects.${key}.date`),
                title: this.$t(`projects.${key}.title`),
                imagePath: this.getImagePath(key),
                description: this.getDescriptionPoints(key)
            }))
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
        },
        getImagePath(key) {
            const images = {
                doLove: require('../assets/DoLove.png'),
                telegramBot: require('../assets/Password-Manager-bot.jpg'),
                neoTodo: require('../assets/macbook-Todo.png'),
                shiftGenerator: require('../assets/Shift-generator.png')
            }
            return images[key]
        },
        getDescriptionPoints(key) {
            return [
                this.$t(`projects.${key}.description.point1`),
                this.$t(`projects.${key}.description.point2`),
                this.$t(`projects.${key}.description.point3`),
                this.$t(`projects.${key}.description.point4`)
            ]
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
    transition: transform 0.5s ease-in-out;
    will-change: transform;
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
        padding-top: 2rem;
    }
}
</style>