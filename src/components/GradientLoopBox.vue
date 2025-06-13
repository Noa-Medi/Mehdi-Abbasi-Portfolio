<template>
    <div class="container" ref="container">
        <div class="moving-track" :class="{ active: isVisible }">
            <!-- Duplicate list -->
            <div class="loop" v-for="n in 4" :key="n">
                <div v-if="wordsList" v-for="(word, i) in wordsList" :key="i" class="word-container">
                    <img src="../assets/star.png" alt="" class="word-star" />
                    <div class="word">{{ word }}</div>
                </div>

                <div v-if="wordsListWithIcons" v-for="(word, i) in wordsListWithIcons" :key="i" class="word-container">
                    <img src="../assets/star.png" alt="" class="word-star" />
                    <div class="item-wrapper" @click="onclickHandler(word)">
                        <img :src="word.icon" alt="" class="word-icon" />
                        <div class="word">{{ word.name }}</div>
                    </div>
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
            required: false
        },
        wordsListWithIcons: {
            type: Array,
            required: false
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
    }, methods: {
        onclickHandler(word) {
            if (word.name === 'Email') {
                window.location.href = "mailto:mahdi.abbass1386@gmail.com";
            }
            else if (word.name === 'Whatsapp') {
                window.location.href = "https://wa.me/+4915510397136";
            }
            else if (word.name === 'Instagram') {
                window.location.href = "https://www.instagram.com/noah.medi?igsh=OHd0Yjh3Z2kxc2No";
            }
            else if (word.name === 'Telegram') {
                window.location.href = "https://t.me/Noah_Medi";
            }
        }
    }
}
</script>
<style scoped>
.item-wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    transition: transform 0.2s ease;
}

.item-wrapper:hover {
    transform: scale(1.1);
}

.word-icon {
    width: 1.5rem;
    height: 1.5rem;
}

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