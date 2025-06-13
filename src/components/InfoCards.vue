<template>
    <div class="info-cards-container">
        <div class="info-card-background">
            <img src="../assets/hero blur img.png" alt="" class="background-image">
        </div>
        <div class="info-cards">
            <div class="row-1">

                <div class="card-top-left  small-card">
                    <div class="card-title">
                        <div class="title-star"></div>
                        <div class="card-title-text">My IDE</div>
                    </div>
                    <div class="card-content">
                        <img src="../assets/g-icons/Vs-code.png" alt="" class="vs-code-icon">
                    </div>
                </div>

                <div class="card-top-right big-card">
                    <div class="card-title">
                        <div class="title-star"></div>
                        <div class="card-title-text">My Toolbox</div>
                    </div>
                    <div class="card-desc">
                        Explore the technologies and tools I use
                        to craft exceptional digital experiences.
                    </div>
                    <div class="card-content">
                        <Slideshow direction="left-scroll" :itemList="itemList1" />
                        <Slideshow direction="right-scroll" :itemList="itemList2" />
                    </div>
                </div>
            </div>

            <div class="row-2">

                <div class="card-bottom-left big-card">
                    <div class="card-title">
                        <div class="title-star"></div>
                        <div class="card-title-text">Beyond the Code</div>
                    </div>
                    <div class="card-desc">
                        Explore my interests and hobbies beyond
                        the digital realm.
                    </div>

                    <MoveableContainer :initPosition="{ x: 35, y: 120 }" text="Guitar" emojie="🎸" />
                    <MoveableContainer :initPosition="{ x: 100, y: 157 }" text="Piano" emojie="🎹" />
                    <MoveableContainer :initPosition="{ x: 185, y: 196 }" text="Music" emojie="🎶" />
                    <MoveableContainer :initPosition="{ x: 269, y: 157 }" text="Fitness" emojie="🏋🏻‍♂️" />
                    <MoveableContainer :initPosition="{ x: 331, y: 120 }" text="Movie" emojie="🍿" />

                </div>


                <div class="card-bottom-right small-card">
                    <div class="map-img">
                    </div>
                    <div class="profile-container">
                        <img src="../assets/cartoonic-profile.png" alt="" class="profile-img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Slideshow from './Slideshow.vue';
import MoveableContainer from './MoveableContainer.vue';

import htmlIcon from '../assets/g-icons/HTML.png';
import cssIcon from '../assets/g-icons/CSS.png';
import figmaIcon from '../assets/g-icons/figam.png';
import jsIcon from '../assets/g-icons/Js.png';
import vueIcon from '../assets/g-icons/vue.png';

import dartIcon from '../assets/g-icons/Dart.png';
import flutterIcon from '../assets/g-icons/flutter.png';
import afterEffectIcon from '../assets/g-icons/After Effect.png';
import photoshopIcon from '../assets/g-icons/photoshop.png';
import premiereProIcon from '../assets/g-icons/Premiere Pro.png';
import pythonIcon from '../assets/g-icons/python.png';
export default {
    components: {
        Slideshow,
        MoveableContainer,
    },
    data() {
        return {
            itemList1: [
                { name: 'HTML5', icon: htmlIcon },
                { name: 'CSS3', icon: cssIcon },
                { name: 'Figma', icon: figmaIcon },
                { name: 'JavaScript', icon: jsIcon },
                { name: 'Vue.js', icon: vueIcon },
            ],
            itemList2: [
                { name: 'Dart', icon: dartIcon },
                { name: 'Flutter', icon: flutterIcon },
                { name: 'After Effect', icon: afterEffectIcon },
                { name: 'Photoshop', icon: photoshopIcon },
                { name: 'Premiere Pro', icon: premiereProIcon },
                { name: 'Python', icon: pythonIcon },
            ]
        };
    }
};

</script>
<style scoped>
.profile-container {
    position: absolute;
    height: 5rem;
    width: 5rem;
    top: 4rem;
    right: 2.5rem;
    border-radius: 50%;
    background: linear-gradient(to right, #C200C5, #6600C5, #0099FF);
    overflow: hidden;
    z-index: 11;
}

.profile-img {
    height: 12rem;
    /* width: 100%; */
    /* object-fit: cover; */
    position: absolute;
    top: -2rem;
    z-index: 11;

}

.card-bottom-right {
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.map-img {
    z-index: 10;
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: url('../assets/Group 21.png');
    background-position: center;
    background-size: cover;
}

.slideshow {
    margin-top: 5.rem;
}

.card-content {
    /* padding: .5rem 0 0 0; */
    position: relative;
    width: 100%;
    height: 100%;

}

.card-bottom-left {
    overflow: hidden;
    position: relative;
}

.vs-code-icon {
    position: absolute;
    top: -3rem;
    left: -1rem;
    width: 19rem;
    height: 19rem;
    object-fit: contain;
    filter: drop-shadow(0 0 1.5rem #000000);
    animation: iconMoveAnimation 2s infinite ease-in-out;
}

@keyframes iconMoveAnimation {
    0% {

        transform: scale(0.8) translatex(0) translateY(0)
    }

    50% {

        transform: scale(0.9) translatex(.5rem) translateY(.5rem)
    }

    100% {

        transform: scale(0.8) translatex(0) translateY(0)
    }
}

.card-desc {
    margin: .5rem 2.3rem 0 2.3rem;
    font-weight: 400;
    color: lightgray;


}

.card-title {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin: 1.4rem 0 0 2.3rem;
}

.card-title-text {
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
    font-size: 1.4rem;
    margin-left: .2rem;
}

.title-star {
    width: 2.2rem;
    height: 2.2rem;
    background: #C200C5;
    -webkit-mask-image: url('../assets/star.png');
    -webkit-mask-size: contain;
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;

    mask-image: url('../assets/star.png');
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
}

.small-card {
    width: 15rem;
    height: 15rem;
    background: #000000;
    border: 1px solid #7e5bbb;
    flex: 1;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;

}

.small-card.card-top-right {
    overflow: hidden;

}

.big-card {

    width: 30rem;
    height: 15rem;
    background: #000000;
    border: 1px solid #7e5bbb;
    flex: 2;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;

}

.row-1,
.row-2 {
    display: flex;
    column-gap: 3rem;
}

.info-cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 3rem;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
}

.info-cards-container {
    margin-top: 20rem;
    height: 120vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #01082E;
}

.info-card-background {
    width: 150rem;
    height: 150rem;
    position: absolute;
    pointer-events: none;
}

.background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>