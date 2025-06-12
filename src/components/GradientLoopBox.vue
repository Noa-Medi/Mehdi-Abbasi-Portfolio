<template>
    <div class="container" ref="container">
        <div class="moving-track" :class="{ active: isVisible }">
            <!-- Duplicate list -->
            <div class="loop" v-for="n in 4" :key="n">
                <div v-for="(word, i) in wordsList" :key="i" class="word-container">
                    <img src="../assets/star.png" alt="" class="word-star" />
                    <div class="word">{{ word }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        wordsList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isVisible: false
        };
    },
    mounted() {
        const observer = new IntersectionObserver(([entry]) => {
            this.isVisible = entry.isIntersecting;
            console.log(this.isVisible);
        });
        observer.observe(this.$refs.container);
    }
}
</script>
<style scoped>
.loop {
    display: flex;
}

.container {
    overflow: hidden;
    width: 102%;
    height: 3rem;
    position: relative;
    background: linear-gradient(to right, #ff00ff, #4989eb);
    transform: rotate(-4deg);
    /* margin: 6rem 0; */
    display: flex;
    align-items: center;
}

.moving-track {
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: max-content;
    animation: scroll-left 23s linear infinite;
    animation-play-state: paused;
}

.moving-track.active {
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

.word-container {
    display: flex;
    align-items: center;
    gap: 1.3rem;
    margin-right: 2rem;
}

.word {
    font-size: .9rem;
    font-weight: 600;
    color: #01082E;
}

.word-star {
    width: 1.8rem;
}
</style>