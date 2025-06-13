<template>
    <div class="container">
        <div class="cursor"></div>
        <div class="stars-container"></div>
    </div>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            required: true
        }
    }
    ,
    mounted() {
        const container = document.querySelector('.container');
        const cursor = container.querySelector('.cursor');
        const starsContainer = container.querySelector('.stars-container');

        const starCount = this.isActive ? 100 : 0;
        const stars = [];

        function vhToPixels(vh) {
            return window.innerHeight * (vh / 100);
        }

        function vwToPixels(vw) {
            return window.innerWidth * (vw / 100);
        }

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            const size = Math.random() * 4 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            star.style.left = `${posX}vw`;
            star.style.top = `${posY}vh`;

            star.style.opacity = Math.random() * 0.8 + 0.2;

            starsContainer.appendChild(star);

            stars.push({
                element: star,
                baseX: vwToPixels(posX),
                baseY: vhToPixels(posY),
                size: size,
            });
        }

        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX + window.scrollX;
            mouseY = e.clientY + window.scrollY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;

            stars.forEach((star) => {
                const starX = star.baseX;
                const starY = star.baseY;

                const dx = mouseX - starX;
                const dy = mouseY - starY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const maxDistance = 200;
                const effectStrength = Math.max(0, maxDistance - distance) / maxDistance;

                const moveDistance = 30 * effectStrength;
                const angle = Math.atan2(dy, dx);

                const newX = starX + Math.cos(angle) * moveDistance;
                const newY = starY + Math.sin(angle) * moveDistance;

                star.element.style.transform = `translate(${newX - starX}px, ${newY - starY}px)`;
            });
        });

        window.addEventListener('resize', () => {
            stars.forEach((star) => {
                const computedStyle = getComputedStyle(star.element);
                star.baseX = parseFloat(computedStyle.left);
                star.baseY = parseFloat(computedStyle.top);
            });
        });

        document.addEventListener('mouseleave', () => {
            stars.forEach((star) => {
                star.element.style.transform = 'translate(0, 0)';
            });
        });

        function twinkle() {
            stars.forEach((star) => {
                if (Math.random() > 0.95) {
                    star.element.style.opacity = Math.random() * 0.8 + 0.2;
                }
            });
            requestAnimationFrame(twinkle);
        }
        twinkle();
    },
};
</script>

<style>
.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 1000;
    transition: transform 0.2s ease;
}

.star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    pointer-events: none;
    transition: transform 0.3s ease-out;
    box-shadow: 0 0 10px rgb(255, 255, 255);
}
</style>
