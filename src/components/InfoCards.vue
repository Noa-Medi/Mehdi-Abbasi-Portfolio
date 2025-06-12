<template>
    <div class="info-cards-container">
        <div class="background">
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
                        <img src="../assets/g-icons/Vs-code.png" alt="" class="card-content-img">
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
                    <div class="card-content"></div>
                </div>
                <div class="card-bottom-right small-card"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // data: {
    //     return: {
    //         itemList1: [
    //             { name: 'HTML5', icon: '../assets/g-icons/HTML.png' },
    //             { name: 'CSS3', icon: '../assets/g-icons/CSS.png' },
    //             { name: 'Figma', icon: '../assets/g-icons/figam.png' },
    //             { name: 'JavaScript', icon: '../assets/g-icons/Js.png' },
    //             { name: 'Vue.js', icon: '../assets/g-icons/vue.png' },
    //         ],
    //         itemList2: [
    //             { name: 'Dart', icon: '../assets/g-icons/Dart.png' },
    //             { name: 'Flutter', icon: '../assets/g-icons/flutter.png' },
    //             { name: 'After Effect', icon: '../assets/g-icons/After Effect.png' },
    //             { name: 'Photoshop', icon: '../assets/g-icons/photoshop.png' },
    //             { name: 'Premiere Pro', icon: '../assets/g-icons/Premiere Pro.png' },
    //             { name: 'Python', icon: '../assets/g-icons/python.png' },

    //         ]
    //     }
    // }
} 
</script>
<style scoped>
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

.background {
    width: 150rem;
    height: 150rem;
    position: absolute;
    pointer-events: none;
}
</style>