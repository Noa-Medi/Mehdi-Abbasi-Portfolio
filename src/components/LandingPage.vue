<template>
    <div id="home" class="landing-page-container" ref="container">
        <div class="blue-back"></div>
        <div class="star-background">
            <StarBackground :isActive="!isVisible" />
        </div>

        <div class="back-vid">
            <video src="../assets/video/blackhole.mp4" class="blackhole" :class="{ active: isVisible }" plays-inline
                muted autoplay loop></video>
            <div class="overlay"></div>
        </div>
        <!-- 
        <div class="cover"></div> -->

        <div class="navigator-container">
            <div class="nav-back"></div>
            <ul>
                <li>
                    <a @click.prevent="smoothScroll('#home')" :class="{ active: activeSection === 'home' }">
                        {{ $t('navigation.home') }}
                    </a>
                </li>
                <li>
                    <a @click.prevent="smoothScroll('#about')" :class="{ active: activeSection === 'about' }">
                        {{ $t('navigation.about') }}
                    </a>
                </li>
                <li>
                    <a @click.prevent="smoothScroll('#skills')" :class="{ active: activeSection === 'skills' }">
                        {{ $t('navigation.skills') }}</a>
                </li>
                <li>
                    <a @click.prevent="smoothScroll('#projects')" :class="{ active: activeSection === 'projects' }">{{
                        $t('navigation.projects') }}</a>
                </li>
            </ul>
        </div>
        <header>
            <div class="left">
                <img class="profile" src="../assets/Profile.jpg" alt="">
                <div class="name"><span class="name-geradiant">{{ $t('header.name') }}</span>({{ $t('header.nickName')
                    }})
                </div>
            </div>




            <div class="right">
                <!-- <a href="#">English</a> -->

                <div class="button-box" @click="onLanguageclick">
                    <button>{{ $t('language') }}</button>
                </div>

            </div>


        </header>
        <div class="page-content">
            <div class="hero-icon-container">
                <img class="hero-icon" src="../assets/astronaut.png" alt="">
                <!-- <div class="hero-overlay"></div> -->
            </div>
            <div class="content-wrapper">
                <div class="title-container purp-background">
                    <img src="../assets/diamond.png" alt="" class="title-icon">
                    <div class="text-bold blue">{{ $t('hero.fullStackEnthusiast') }}</div>
                </div>

                <div class="hero-title">
                    <h1>{{ $t('hero.greeting.1.1') }} <span class="text-gradient">{{ $t('hero.greeting.1.2') }}</span>
                    </h1>
                    <h1>{{ $t('hero.greeting.2.1') }} <span class="text-gradient">{{ $t('hero.greeting.2.2') }}</span>
                    </h1>
                </div>
                <div class="hero-description">{{ $t('hero.description') }}
                </div>
                <a class="contact-button text-bold" @click.prevent="smoothScroll('#contact-me')">
                    {{ $t('hero.contactButton') }}
                </a>
            </div>
            <div class="bottom-parts">
                <div class="left-item text-gradient">{{ $t('tagline.selfTaught') }}</div>
                <div class="middle-item text-gradient">{{ $t('tagline.cleanCode') }}</div>
                <div class="right-item text-gradient">{{ $t('tagline.debugging') }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import StarBackground from './StarBackground.vue'
export default {
    components: {
        StarBackground
    },
    data() {
        return {
            isVisible: false
            , activeSection: 'home'
        }
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.setActiveSection);
    },
    mounted() {
        const observer = new IntersectionObserver(([entry]) => {
            this.isVisible = entry.isIntersecting;
            console.log(this.isVisible ? 'Animation is running' : 'Animation is paused');
        })
        observer.observe(this.$refs['container']);
        window.addEventListener('scroll', this.setActiveSection);

    }, methods: {
        onLanguageclick() {
            if (this.$i18n.locale == 'en') {
                this.$i18n.locale = 'de'
            } else {
                this.$i18n.locale = 'en'
            }

        },
        smoothScroll(target) {
            // First fade out all nav items (only if not contact)
            if (!target.includes('contact')) {
                const navItems = document.querySelectorAll('.navigator-container ul li a');
                navItems.forEach(item => {
                    item.style.opacity = '0.8';
                    item.style.transition = 'opacity 0.3s ease-in-out';
                });
            }

            // Then scroll to the element
            setTimeout(() => {
                const element = document.querySelector(target);

                if (element) {
                    console.error(`Element with selector ${target} not found`);
                    // return;
                }
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop,
                        behavior: 'smooth'
                    });
                }

                // Only update nav items if not contact
                if (!target.includes('contact')) {
                    setTimeout(() => {
                        const activeItem = document.querySelector(`.navigator-container ul li a[href="${target}"]`);
                        if (activeItem) {
                            activeItem.style.opacity = '1';
                            activeItem.style.transition = 'opacity 0.4s ease-in-out 0.1s';
                        }
                    }, 100);
                }
            }, 300);
        },
        setActiveSection() {
            const sections = ['home', 'about', 'skills', 'projects'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        this.activeSection = section;
                        break;
                    }
                }
            }
        }

    }
}
</script>
<style scoped>
.navigator-container ul li a.active {
    opacity: 1;

    background: rgba(90, 128, 255, 0.3);
    /* Blue tint with better opacity */
    backdrop-filter: blur(5px);
    /* Adds to the glass effect */
    -webkit-backdrop-filter: blur(5px);
    box-shadow:
        0 0 10px rgba(90, 128, 255, 0.5),
        inset 0 0 5px rgba(255, 255, 255, 0.2);
    /* Inner glow */
    transition:
        opacity 0.4s ease-in-out 0.1s,
        /* Slight delay for smooth fade-in */
        background-color 0.4s ease-in-out 0.1s,
        box-shadow 0.4s ease-in-out 0.1s;

    position: relative;
    z-index: 1;
}

/* Add a subtle pulse animation for the active state */
@keyframes pulse {
    0% {
        box-shadow: 0 0 10px rgba(90, 128, 255, 0.5);
    }

    50% {
        box-shadow: 0 0 15px rgba(90, 128, 255, 0.7);
    }

    100% {
        box-shadow: 0 0 10px rgba(90, 128, 255, 0.5);
    }
}

.navigator-container ul li a.active {
    animation: pulse 3s infinite;
}

/* Add a gradient border effect for active state */
.navigator-container ul li a.active::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff00ff, #4989eb);
    border-radius: 2rem;
    z-index: -1;
    opacity: 0.8;
}

.navigator-container ul li a {
    /* Your existing styles */
    opacity: 0.9;
    transition:
        opacity 0.4s ease-in-out,
        background-color 0.4s ease-in-out,
        box-shadow 0.4s ease-in-out;
    position: relative;
}

.navigator-container ul li a:hover:not(.active) {
    background: rgba(255, 255, 255, 0.1);
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
    transition:
        opacity 0.3s ease-in-out,
        background-color 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out;

}

.blue-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #01082E;

    z-index: 2;
    pointer-events: none;
}

.bottom-parts {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
}

/* .left-item,
.middle-item,
.right-item {
    width: 16rem;
} */

.left,
.right {
    position: relative;
    z-index: 10001;
    /* Above the nav */
}



.hero-icon-container {
    position: absolute;
    top: 25%;
    right: 10%;
    width: 30rem;
}

.hero-icon {
    width: 100%;
    height: auto;
    mix-blend-mode: screen;
    /* blend the image itself */
    position: relative;
    z-index: 1;
}

/* TODO: Make the astronaut png and remvoe the black background  */

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #01082E;
    mix-blend-mode: screen;
    z-index: 2;
    pointer-events: none;
}

.contact-button {
    margin: 0 !important;
    margin-top: 1.5rem !important;
    padding: .7rem 1.4rem;
    border-radius: .5rem;
    background-color: #19024da6;
    border: none;
    box-shadow: 0 0 5px lightgray;
    color: white;
    cursor: pointer;

}

h1 {
    padding: 0;
    margin: 0;
}

.hero-title {
    margin-top: 1rem;
    font-size: 1.5rem;
}

.hero-description {
    margin-top: 1rem;

    width: 40rem;
    font-size: 1.1rem;
}

.title-icon {
    width: 1rem;
    padding-left: .5rem
}

.text-bold {
    display: inline-block;
    font-weight: 600;
    font-size: .9rem;
    margin: 0 .5rem
}

.blue {
    color: #5a80ff;
}

.text-gradient {
    background: -webkit-linear-gradient(45deg, #ff00ff, #4989eb);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}

.page-content {
    position: relative;
    top: 5rem;
    left: 0;
    height: 90%;
    width: 100%;
    padding: 0 2.5rem;
    z-index: 10;
    box-sizing: border-box;
}

.purp-background {
    background-color: #19024da6;
    /* TODO: Puting the container and thing
     together and on the currect position */
    /* filter: blur(5px); */
    z-index: 4;

}

.content-wrapper {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    padding: inherit;
    top: 40%;
}

.title-container {

    height: 2rem;
    width: 13rem;
    /* width: 10rem; */
    z-index: 100;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px lightgray;

}

.landing-page-container,
.container {
    position: relative;
    height: 100vh;
    width: 100%;
    background: transparent;
}

.star-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    pointer-events: none;
}



.star-background,
.stars-container {
    overflow: visible !important;
    /* Override any overflow:hidden */
}



header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 5rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    background-color: #fcfcff21;
    backdrop-filter: blur(6px);
    box-shadow: 0 0 15px #4989eb7a;
    box-sizing: border-box;
    margin: inherit;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    overflow-x: hidden;
}

.left {
    display: flex;
    /* justify-content: center; */
    align-items: center;
}

.name {
    margin-left: .4rem;
    font-size: 1.2rem;
    font-weight: 600;
}

.name-geradiant {
    background: -webkit-linear-gradient(45deg, #ff00ff, #4989eb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}


.navigator-container {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1200px;
    /* Adjust as needed */
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    pointer-events: none;
}

/* .nav-back {
    
} */

.navigator-container ul {
    position: relative;
    border: none;
    box-shadow: 0 0 15px rgb(197, 197, 197);
    border-radius: 2rem;
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    /* width: 35rem; */

    /* padding: .8rem 2rem; */
    background-color: #01082e5d;
    pointer-events: all;

    /* Glass effect styles */
    background: rgba(1, 8, 46, 0.3);
    /* Semi-transparent background */
    backdrop-filter: blur(10px);
    /* This creates the blur effect */
    -webkit-backdrop-filter: blur(10px);
    /* For Safari support */
    border: 1px solid rgba(255, 255, 255, 0.1);
    /* Subtle border */

    /* Re-enable clicks for the nav */
}


ul {
    position: absolute;
    border: none;
    box-shadow: 0 0 15px rgb(197, 197, 197);
    border-radius: 2rem;
    /* width: 40%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background-color: #01082e5d;
}

li {
    list-style-type: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

li a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    /* background-color: tomato; */
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;

}

.right {
    width: 6rem;
}

.button-box {
    position: relative;

    width: 100px;
    height: 45px;
    border: none;
    background: linear-gradient(to right, #00aaa7, #7f42a7, #6600c5, #1f2b9c, #2a46ff, #0099ff, #00aaa7);
    border-radius: 10px;
    background-size: 200%;
    animation: animationGradient 2.5s linear infinite;
    clip-path: polygon(0 0, 80% 0%, 100% 38%, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0% 20%);
}

header button {
    position: absolute;
    inset: 3px 3px 3px 3px;
    background-color: #01082e;
    border: none;
    color: lightgray;
    border-radius: 10px;
    clip-path: polygon(0 0, 80% 0%, 100% 38%, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0% 20%);
    cursor: pointer;
    transition: 0.3s;
}

@keyframes animationGradient {
    to {
        background-position: 200%;
    }
}

header button:hover {
    color: #6600c5;
}

.back-vid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 2;
    /* Video above stars */
}

.blackhole,
.overlay {
    position: absolute;
    top: -30rem;
    height: 70rem;
    width: 100%;
    max-width: 100%;
    mix-blend-mode: screen;
    object-fit: cover;
    pointer-events: none;
}


.blackhole {
    z-index: 2;
}

.overlay {
    z-index: 1;
}

.overlay {
    mix-blend-mode: screen;
    background: #01082E;
}



.profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

header ul {
    display: flex;
    align-items: center;
}



.cover {
    inset: 0 0 0 0;
    position: fixed;
    z-index: 2;
    background-color: #0026ff3a;
}

/* @media (min-width: 480px) {

    .blackhole,
    .overlay {
        display: none;
    }
} */
@media (max-width: 480px) {
    body {
        font-size: 0.8rem;
        overflow-x: hidden;
    }


    .blackhole,
    .overlay {
        position: absolute;
        top: -10rem;
        height: 30rem;
        width: 100%;
        max-width: 100%;
        mix-blend-mode: screen;
        object-fit: cover;
        pointer-events: none;
    }

    .navigator-container {
        display: none;
    }

    .name {
        font-size: 1rem;
    }

    .page-content {
        padding: 0 .7rem;
    }

    .hero-icon-container {
        position: absolute;
        top: 5%;
        right: 1%;
        width: 15rem !important;

    }

    .title-icon {
        width: 1.5rem !important;
    }

    .title-container {
        width: 7rem !important;
    }



    .content-wrapper {
        top: 40% !important;
    }

    .text-bold {
        font-size: 0.8rem;
    }

    .hero-title {
        font-size: 1.1rem;
    }

    .hero-description {
        margin-top: 1rem;

        width: 20rem;
        font-size: 0.8rem;
    }

    .bottom-parts {
        font-size: .9rem;
        text-align: center;
    }
}

@media (max-width: 768px) {
    body {
        font-size: 0.8rem;
        overflow-x: hidden;
    }


    .blackhole,
    .overlay {
        position: absolute;
        top: -10rem;
        height: 30rem;
        width: 100%;
        max-width: 100%;
        mix-blend-mode: screen;
        object-fit: cover;
        pointer-events: none;
    }

    .navigator-container {
        display: none;
    }

    .name {
        font-size: 1rem;
    }

    .page-content {
        padding: 0 .7rem;
    }

    .hero-icon-container {
        position: absolute;
        top: 15%;
        right: 5%;
        width: 20rem;

    }

    .content-wrapper {
        top: 50%;
    }

    .text-bold {
        font-size: 0.8rem;
    }

    .hero-title {
        font-size: 1.1rem;
    }

    .hero-description {
        margin-top: 1rem;

        width: 20rem;
        font-size: 0.8rem;
    }

    .bottom-parts {
        font-size: .9rem;
        text-align: center;
    }
}



@media (max-width: 1024px) {
    .navigator-container ul {
        position: relative;
        border: none;
        box-shadow: 0 0 15px rgb(197, 197, 197);
        border-radius: 2rem;
        width: 40%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 3rem;


        /* padding: .8rem 2rem; */
        background-color: #01082e5d;
        pointer-events: all;

        /* Glass effect styles */
        background: rgba(1, 8, 46, 0.3);
        /* Semi-transparent background */
        backdrop-filter: blur(10px);
        /* This creates the blur effect */
        -webkit-backdrop-filter: blur(10px);
        /* For Safari support */
        border: 1px solid rgba(255, 255, 255, 0.1);
        /* Subtle border */

        /* Re-enable clicks for the nav */
    }

    .hero-icon-container {
        position: absolute;
        top: 15%;
        right: 5%;
        width: 25rem;

    }

    .content-wrapper {
        top: 50%;
    }



}
</style>
