<template>
    <div class="info-cards-container">
        <div class="info-card-background">
            <img src="../assets/hero blur img.png" alt="" class="background-image">
        </div>
        <div id="skills" class="info-cards">
            <div class="row-1">

                <div class="card-top-left  small-card">
                    <div class="card-title">
                        <div class="title-star"></div>
                        <div class="card-title-text">{{ $t('infoCards.ideCard.title') }}</div>
                    </div>
                    <div class="card-content">
                        <img src="../assets/g-icons/Vs-code.png" alt="" class="vs-code-icon">
                    </div>
                </div>

                <div class="card-top-right big-card">
                    <div class="card-title">
                        <div class="title-star"></div>
                        <div class="card-title-text">{{ $t('infoCards.toolboxCard.title') }}</div>
                    </div>
                    <div class="card-desc">
                        {{ $t('infoCards.toolboxCard.description') }}
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
                        <div class="card-title-text">{{ $t('infoCards.hobbiesCard.title') }}</div>
                    </div>
                    <div class="card-desc">
                        {{ $t('infoCards.hobbiesCard.description') }}
                    </div>

                    <MoveableContainer id="moveable-container-1" :initPosition="itemsPos[1]"
                        :text="$t('infoCards.hobbiesCard.hobbies.guitar.text')"
                        :emojie="$t('infoCards.hobbiesCard.hobbies.guitar.emoji')" />
                    <MoveableContainer id="moveable-container-2" :initPosition="itemsPos[2]"
                        :text="$t('infoCards.hobbiesCard.hobbies.piano.text')"
                        :emojie="$t('infoCards.hobbiesCard.hobbies.piano.emoji')" />
                    <MoveableContainer id="moveable-container-3" :initPosition="itemsPos[3]"
                        :text="$t('infoCards.hobbiesCard.hobbies.music.text')"
                        :emojie="$t('infoCards.hobbiesCard.hobbies.music.emoji')" />
                    <MoveableContainer id="moveable-container-4" :initPosition="itemsPos[4]"
                        :text="$t('infoCards.hobbiesCard.hobbies.fitness.text')"
                        :emojie="$t('infoCards.hobbiesCard.hobbies.fitness.emoji')" />
                    <MoveableContainer id="moveable-container-5" :initPosition="itemsPos[5]"
                        :text="$t('infoCards.hobbiesCard.hobbies.movies.text')"
                        :emojie="$t('infoCards.hobbiesCard.hobbies.movies.emoji')" />

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
import cSharpIcon from '../assets/g-icons/cSharp.png';
export default {
    components: {
        Slideshow,
        MoveableContainer,
    },
    data() {
        return {
            itemsPos: {
                1: { x: 10, y: 50 },  // percentages now (10% from left, 40% from top)
                2: { x: 25, y: 70 },
                3: { x: 50, y: 90 },
                4: { x: 75, y: 70 },
                5: { x: 90, y: 50 }
            },
            itemList1: [
                { name: 'HTML5', icon: htmlIcon },
                { name: 'CSS3', icon: cssIcon },
                { name: 'Figma', icon: figmaIcon },
                { name: 'JavaScript', icon: jsIcon },
                { name: 'Vue.js', icon: vueIcon },
                { name: "C#", icon: cSharpIcon },
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
    },
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
    background: url('../assets/Map-2.jpg');
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
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 250px;
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
    height: auto;
    width: 100%;
    padding: 15rem 0;
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
    z-index: 0;
}

.background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {


    .info-cards-container {
        margin-top: 8rem;
    }

    .info-cards {
        width: 100vw;
        height: 100%;
        row-gap: 2rem !important;
    }

    .row-1,
    .row-2 {
        flex-direction: column;
        gap: 2rem;
        /* Replace column-gap with gap */
    }

    .small-card,
    .big-card {
        flex: none !important;
        /* Disable flex growth */
        height: 15rem;
        width: 80vw;
    }

    .card-title {
        margin: 0;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .card-desc {
        margin: 0;
        /* margin-top: 1rem; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .card-content {}

    .card-content.card-top-left {
        display: flex;
        justify-content: center !important;
        align-items: center !important;
    }

    .vs-code-icon {
        margin: 0;
        /* margin-top: 1rem; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-bottom-left {
        height: 300px;
        /* Fixed height for mobile */
    }

    .draggable-container {
        height: 1.8rem;
        min-width: 6rem;
        font-size: 0.9rem;
    }


}
</style>