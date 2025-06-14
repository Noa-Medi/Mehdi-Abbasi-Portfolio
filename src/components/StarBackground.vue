<template>
    <div class="st-background-container">
        <div class="cursor"></div>
        <div class="stars-container-cl"></div>
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
        const container = this.$el;
        const cursor = container.querySelector('.cursor');
        const starsContainer = container.querySelector('.stars-container-cl');

        // Clear previous stars first
        starsContainer.innerHTML = '';

        const starCount = this.isActive ? 100 : 0;
        const stars = [];

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star-gogoli'; // Use className instead of classList for reliability

            // Set all styles at once
            star.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 2}px;
      height: ${Math.random() * 3 + 2}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      background: #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 5px #fff, 0 0 10px #5a80ff;
      z-index: 1;
      opacity: ${Math.random() * 0.8 + 0.2};
      transform: translate(-50%, -50%);
      pointer-events: none;
    `;

            starsContainer.appendChild(star);
            stars.push({
                element: star,
                baseX: parseFloat(star.style.left),
                baseY: parseFloat(star.style.top)
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
                // Get the star's actual screen position
                const rect = star.element.getBoundingClientRect();
                const starX = rect.left + rect.width / 2;
                const starY = rect.top + rect.height / 2;

                const dx = mouseX - starX;
                const dy = mouseY - starY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const maxDistance = 200;
                const effectStrength = Math.max(0, maxDistance - distance) / maxDistance;
                const moveDistance = 30 * effectStrength;
                const angle = Math.atan2(dy, dx);

                // Apply both transforms together
                star.element.style.transform = `
            translate(-50%, -50%)
            translate(${Math.cos(angle) * moveDistance}px, ${Math.sin(angle) * moveDistance}px)
        `;
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

<style scoped>
.st-background-container,
.stars-container-cl {
    overflow: visible !important;
}

.st-background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    /* Add debug border */
    /* border: 1px solid red; */

}

.stars-container-cl {
    position: relative;
    width: 100%;
    height: 100%;
    /* Debug border */
    /* border: 1px solid green; */

}

.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 1000;
    transition: transform 0.2s ease;
    /* background: red; */
    /* Make cursor visible for testing */

}

.star-gogoli {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    width: 10px !important;
    height: 10px !important;
    background: lime !important;
    /* box-shadow: 0 0 0 5px red !important; */
    position: absolute !important;
    z-index: 99999 !important;
    transform: none !important;
}
</style>