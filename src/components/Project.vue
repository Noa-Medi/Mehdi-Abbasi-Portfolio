<template>
    <div class="project-card">
        <div class="project-name-and-date project-text-gradient">{{ project.name }} &#8226 {{ project.date }}</div>
        <div class="project-title">{{ project.title }}</div>
        <div class="desc-divider"></div>
        <div v-for="desc in project.description" class="project-desc">
            <div class="bullet-point"></div>
            <div class="desc-text">{{ desc }}</div>
        </div>
        <img :src="project.imagePath" alt="" class="project-img">
    </div>
</template>

<script>
export default {
    props: {
        project: Object
    }
}
</script>

<style scoped>
.project-text-gradient {
    background: -webkit-linear-gradient(0deg, #00aaa7, #7f42a7, #6600c5, #1f2b9c, #2a46ff, #0099ff, #00aaa7);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-position: 0%;
    background-size: 600%;
    animation: textGradient 10s linear infinite;
}

@keyframes textGradient {
    to {
        background-position: 600%;
    }
}

.project-img {
    position: absolute;
    bottom: 2.5rem;
    right: 1rem;
    height: 30vw;
    object-fit: cover;
    border-radius: 1rem;
}

.desc-text {
    color: lightgray;
}

.bullet-point {
    width: 1.2rem;
    height: 1.2rem;
    background: #6600C5;
    -webkit-mask-image: url('../assets/checked.png');
    -webkit-mask-size: contain;
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;

    mask-image: url('../assets/checked.png');
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
}

.project-desc {
    display: flex;
    column-gap: 1rem;
    margin-bottom: 1rem;
}

.desc-divider {
    margin: 1rem 0 2rem;
    width: 30rem;
    min-height: 2px;
    background-color: #868686a9;
    border-radius: .1rem;
}

.project-title {
    font-weight: 600;
    width: 30rem;
    font-size: 3rem;
    font-family: 'Times New Roman', Times, serif;
    margin: 0 0 1rem 0;
    padding: 0;
}

.project-name-and-date {
    font-family: 'Times New Roman', Times, serif;
    background: -webkit-linear-gradient(50deg, #C200C5, #6600C5, #0099FF);
    -webkit-text-fill-color: transparent;
    background-size: 50%;
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    padding: 0;
}

.project-card {
    position: absolute;
    width: 90vw;
    height: 80vh;
    background: #000000;
    border: 1px solid #7e5bbb;
    flex: 2;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-top: 6rem;
    padding-left: 7rem;
    box-sizing: border-box;
    transition: transform .5s ease-in-out;
}

/* Responsive styles */
/* @media (max-width: 1024px) {
    .project-card {
        width: 70rem;
        height: 40rem;
        padding-top: 5rem;
        padding-left: 5rem;
    }

    .project-img {
        height: 25rem;
    }

    .project-title {
        width: 25rem;
        font-size: 2.5rem;
    }

    .desc-divider {
        width: 25rem;
    }
} */

@media (max-width: 768px) {

    .project-card {
        width: 90%;
        height: 80vh;
        padding-top: 3rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .project-img {
        position: relative;
        width: 100%;
        height: auto;
        max-height: 15rem;
        margin-top: 1.5rem;
        right: auto;
        bottom: auto;
    }

    .project-title {
        width: 100%;
        font-size: 2rem;
    }

    .desc-divider {
        width: 100%;
    }

    .project-desc {
        column-gap: 0.8rem;
    }

    .bullet-point {
        width: 1rem;
        height: 1rem;
    }
}

@media (max-width: 480px) {


    .project-card {
        height: 40rem;
    }

    .project-title {
        font-size: 1.8rem;
    }

    .project-name-and-date {
        font-size: 1rem;
    }
}
</style>