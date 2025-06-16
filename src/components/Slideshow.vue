<template>
    <div class="slideshow-container" ref="slideshow-container">
        <div class="items-list" :class="direction, { active: isVisible }">
            <div class="loop" v-for="n in 2" :key="n">
                <div v-for="item in itemList" :key="`${n}-${item.name}`" class="item-container">
                    <img :src="item.icon" alt="" class="item-icon" />
                    <div class="item-name">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemList: Array,
        direction: String,
    },
    data() {
        return {
            isVisible: false
        }
    }
    , mounted() {
        const observer = new IntersectionObserver(([entry]) => {
            this.isVisible = entry.isIntersecting;
            console.log(this.isVisible ? 'Animation is running' : 'Animation is paused');
        });
        observer.observe(this.$refs['slideshow-container']);
    }

};
</script>

<style scoped>
.slideshow-container {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    margin: 0.5rem 0;
}

.items-list {
    display: flex;
    width: fit-content;
}

.loop {
    display: flex;
    flex-direction: row;
    column-gap: 0.1rem;
}

.item-container {
    display: flex;
    align-items: center;
    column-gap: 0.7rem;
    background-color: transparent;
    border: 1px solid rgba(211, 211, 211, 0.63);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0 0.25rem;
    white-space: nowrap;
}

.item-icon {
    width: 2rem;
    object-fit: cover;
    margin: 0 0.2rem;
}

.item-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Animation */
.left-scroll {
    animation: scroll-left 15s linear infinite;
    animation-play-state: paused;
}


.right-scroll {
    animation: scroll-right 15s linear infinite;
    animation-play-state: paused;
}

.left-scroll.active,
.right-scroll.active {
    animation-play-state: running;
}

@keyframes scroll-left {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}

@keyframes scroll-right {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(0%);
    }
}

/* Fade effect */
.slideshow-container::before,
.slideshow-container::after {
    content: '';
    position: absolute;
    top: 0;
    width: 2.5rem;
    height: 100%;
    z-index: 10;
    pointer-events: none;
}

.slideshow-container::before {
    left: 0px;
    background: linear-gradient(to right, #000000, transparent);
}

.slideshow-container::after {
    right: 0;
    background: linear-gradient(to left, #000000, transparent);
}
</style>
