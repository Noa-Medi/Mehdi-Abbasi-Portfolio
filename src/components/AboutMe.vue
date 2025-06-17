<template>

    <div id="about" class="about-me-wrapper">
        <img src="../assets/hero blur img.png" alt="" class="about-me-background">

        <div class="page-content">
            <div class="text-gradient text-bold">About Me</div>
            <h1 class="about-me-title">A Glimpse Into My World</h1>
            <div class="about-me-desc">Learn more about who i am, what i do, and what drives me.</div>
            <div class="text-and-plain-wrapper">
                <div class="main-text-container">
                    <div class="main-text">I’m an Iranian student who landed in Germany less than 3 years ago with a
                        love
                        for
                        coding, strong coffee, and my trusty desktop. Relentlessly curious and detail-obsessed, I thrive
                        where
                        logic meets creativity—whether debugging apps or designing pixel-perfect UIs.</div>
                </div>
                <div class="air-plain-container">
                    <div class="air-plane"></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style scoped>
.about-me-wrapper {
    position: relative;

}

.text-and-plain-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    position: relative;
    overflow: hidden;
}

.main-text-container {
    flex-shrink: 0;
    max-width: 34rem;
    width: 100%;
    margin-left: 2rem;

    background: linear-gradient(270deg, #00aaa7, #7f42a7, #6600c5, #1f2b9c, #2a46ff, #0099ff, #00aaa7);
    background-size: 600% 600%;
    animation: backgroundGradient 15s linear infinite;

    height: 10rem;
    border-radius: .3rem;
    padding: .4rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: transform 0.3s ease-in-out;
}

.main-text-container:hover {
    transform: scale(1.1);
    /* padding: .5rem; */
    border-radius: .4rem;


}

@keyframes backgroundGradient {
    to {
        background-position: 600%
    }
}

.main-text {
    width: 100%;
    height: 100%;
    color: lightgray;
    background-color: #01082E;
    padding: 1rem;
    border-radius: .3rem;
    box-sizing: border-box;
}

.air-plain-container {
    flex-shrink: 0;
    width: 35rem;
    height: 35rem;
    overflow: visible;
    /* allow cropping */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.air-plane {
    background-image: url('../assets/plain.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    transform: rotate(-10deg);
    opacity: 0.5;
}

.about-me-desc {
    width: 18rem;
    text-align: center;
}

.about-me-desc {
    font-size: 1rem;
    color: lightgray;
}

.about-me-title {
    font-family: 'Times New Roman', Times, serif;
    font-size: 2rem;
    margin: 1rem 0;
    padding: 0;
    text-align: center;

}

.text-gradient {
    background: -webkit-linear-gradient(50deg, #00aaa7, #7f42a7, #6600c5, #1f2b9c, #2a46ff, #0099ff, #00aaa7);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-position: 0%;
    background-size: 600%;
    animation: textGradient 10s linear infinite;
}

.text-bold {
    font-weight: 600;
}

@keyframes textGradient {
    to {
        background-position: 600%;
    }
}

.page-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 100;
}

.about-me-wrapper {
    position: relative;
    background-color: #01082E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    /* overflow: hidden; */
    z-index: 100;
    /* pointer-events: none; */
}

.about-me-background {
    position: absolute;
    /* top: calc(-100vw + 65%); */
    /* left: calc(-100vw + 65%); */
    width: 150rem;
    height: 150rem;
    /* object-fit: cover; */
    z-index: 10;
    /* overflow-x: hidden; */
    pointer-events: none;
}

@media (max-width: 1024px) {
    .page-content {
        width: 100% !important;
        overflow: hidden !important;

    }

    .text-and-plain-wrapper {
        flex-direction: row !important;
        height: auto !important;
        width: 100vw !important;
        /* justify-content: start; */
    }

    .main-text-container {
        margin: 3rem 0 0 0 !important;
        height: auto !important;
        width: 50% !important;
    }

    .air-plain-container {
        height: 30vh !important;
        width: 40% !important;
    }
}

@media (max-width: 768px) {
    .page-content {
        width: 100% !important;
        overflow: hidden !important;

    }

    .main-text-container {
        margin: 3rem 0 0 0 !important;
        height: auto !important;
        width: 70% !important;
    }

    .text-and-plain-wrapper {
        flex-direction: column !important;
        height: auto !important;
        width: auto !important;
    }

    .air-plain-container {
        width: 70vw !important;
    }
}

@media (max-width: 480px) {
    .page-content {
        width: 100% !important;
        overflow: hidden !important;

    }

    .text-and-plain-wrapper {
        flex-direction: column !important;
        height: auto !important;
        width: auto !important;
    }

    .main-text-container {
        margin: 3rem 0 0 0 !important;
        height: auto !important;
        width: 60% !important;
    }

    .air-plain-container {
        width: 70vw !important;
    }
}
</style>