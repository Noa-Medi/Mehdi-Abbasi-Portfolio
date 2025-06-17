<template>
    <div class="contact-wrapper">
        <div class="contact-container">
            <div class="contact-title">Let's create something amazing together</div>
            <div class="contact-desc">Ready to bring your next project to life? Let's connect and discuss how I can help
                you
                achieve your goals.
            </div>
            <button class="contact-me" @click="onclickHandler">
                Contact Me
                <div class="contact-icon"></div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    methods: {
        onclickHandler() {

            window.location.href = "mailto:mahdi.abbass1386@gmail.com";

        }
    }
}
</script>

<style scoped>
.contact-icon {
    /* ../assets/right-up.png */
    width: 1.3rem;
    height: 1.3rem;
    background-image: url('../assets/right-up.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    -webkit-mask-size: cover;
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-image: url('../assets/right-up.png');
    background: white;
}

.contact-me {
    width: 15rem;
    height: 4rem;
    background-color: #01082E;
    color: white;

    border-radius: .7rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.contact-me:hover {
    transform: scale(1.1);
}

.contact-title {
    font-size: 2.5rem;
    font-weight: bolder;
    font-family: 'Times New Roman', Times, serif;
}

.contact-desc {
    margin-top: 1rem;
    font-size: 1.3rem;
    width: 50rem;
}

.contact-container {
    width: 90vw;
    height: 15rem;
    background: linear-gradient(to right, #C200C5, #6600C5, #0099FF);
    border-radius: 2rem;
    padding: 3rem;
    box-sizing: border-box;
    position: relative;
}

.contact-wrapper {
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    background-color: #01082E;
    color: #01082E;
    font-size: 1.5rem
}

/* Mobile Styles */
@media (max-width: 768px) {
    .contact-wrapper {
        height: auto;

        min-height: 50vh;
        padding: 1.5rem;
        box-sizing: border-box;
    }

    .contact-container {
        padding: 1.5rem;
        width: 90%;
        min-height: 20rem;
        box-sizing: border-box;
    }

    .contact-title {
        font-size: 1.8rem;
        text-align: center;
    }

    .contact-desc {
        font-size: 1.1rem;
        text-align: center;
        margin-top: 1.5rem;
        width: 100%;
    }

    .contact-me {
        position: relative;
        width: 100%;
        max-width: 15rem;
        margin: 2rem auto 0;
        bottom: auto;
        right: auto;
    }
}
</style>