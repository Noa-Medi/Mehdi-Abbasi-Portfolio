<template>
    <div class="container">
        <div class="star-background">
            <StarBackground />
        </div>

        <div class="back-vid">
            <video src="../assets/video/blackhole.mp4" class="blackhole" plays-inline muted autoplay loop></video>
            <div class="overlay"></div>
        </div>
        <!-- 
        <div class="cover"></div> -->

        <header>
            <div class="left">
                <img class="profile" src="../assets/Profile.jpg" alt="">
                <div class="name"><span class="name-geradiant">Mehdi Abbasi</span>(Noah)</div>
            </div>

            <div class="navigator-container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>



            <div class="right">
                <!-- <a href="#">English</a> -->

                <div class="button-box">
                    <button>English</button>
                </div>

            </div>


        </header>
        <div class="page-content">
            <div class="title-container purp-background">
                <img src="../assets/diamond.png" alt="" class="title-icon">
                <div class="text-bold text-gradient">Full-Stack Enthusiast</div>
            </div>
        </div>

    </div>
</template>
<script>
import StarBackground from './StarBackground.vue'
export default {
    components: {
        StarBackground
    }
}
</script>
<style>
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

.text-gradient {
    background: -webkit-linear-gradient(45deg, #ff00ff, #4989eb);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.page-content {
    position: absolute;
    top: 5rem;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 0 2.5rem;
    z-index: 10;
}

.purp-background {
    background-color: #2c0f7c83;
    /* TODO: Puting the container and thing
     together and on the currect position */
    /* filter: blur(5px); */
    z-index: 4;

}

.title-container {
    position: absolute;
    top: 50%;
    height: 2rem;
    /* width: 10rem; */
    z-index: 100;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

}

.container {
    position: relative;
    height: 100vh;
    width: 100%;
    background: #01082e;
}

.star-background {
    /* filter: blur(1px); */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: #01082E; */
    z-index: 3;
    /* Stars above container background */
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
    z-index: 10000;
    background-color: #fcfcff21;
    backdrop-filter: blur(6px);
    box-shadow: 0 0 15px #4989eb7a;
    box-sizing: border-box;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
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
    -webkit-text-fill-color: transparent;
}


.navigator-container {
    position: fixed;
    width: 100%;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul {
    position: absolute;
    border: none;
    box-shadow: 0 0 15px rgb(197, 197, 197);
    border-radius: 2rem;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem 2rem;
    background-color: #01082e5d;
}

li {
    list-style-type: none;
}

li a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;

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

    z-index: -1;
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
</style>