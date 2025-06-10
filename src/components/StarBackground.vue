<template>
    <div class="container">

        <div class="cursor"></div>
        <div class="stars-container"></div>
    </div>

</template>

<script setup>
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const cursor = container.querySelector('.cursor');
    const starsContainer = container.querySelector('.stars-container');

    // Create stars/bubblesc
    const starCount = 200;
    const stars = [];

    // Function to convert vh/vw to pixels
    function vhToPixels(vh) {
        return window.innerHeight * (vh / 100);
    }

    function vwToPixels(vw) {
        return window.innerWidth * (vw / 100);
    }

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random size between 1px and 5px
        const size = Math.random() * 4 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position in viewport percentages
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        star.style.left = `${posX}vw`;
        star.style.top = `${posY}vh`;

        // Random opacity for depth effect
        star.style.opacity = Math.random() * 0.8 + 0.2;

        starsContainer.appendChild(star);

        // Store initial positions in pixels
        stars.push({
            element: star,
            baseX: vwToPixels(posX), // Convert to pixels
            baseY: vhToPixels(posY), // Convert to pixels
            size: size
        });
    }

    // Track cursor position
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX + window.scrollX;
        mouseY = e.clientY + window.scrollY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

        // Make stars move away from cursor
        stars.forEach(star => {
            // Get current star position in pixels
            const starX = star.baseX;
            const starY = star.baseY;

            // Calculate distance from cursor to star
            const dx = mouseX - starX;
            const dy = mouseY - starY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // The closer the star is to the cursor, the more it moves
            const maxDistance = 200; // Distance at which effect is strongest
            const effectStrength = Math.max(0, maxDistance - distance) / maxDistance;

            // Calculate new position (move away from cursor)
            const moveDistance = 30 * effectStrength;
            const angle = Math.atan2(dy, dx);

            const newX = starX + Math.cos(angle) * moveDistance;
            const newY = starY + Math.sin(angle) * moveDistance;

            // Apply the transformation
            star.element.style.transform = `translate(${newX - starX}px, ${newY - starY}px)`;
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        stars.forEach(star => {
            // Recalculate base positions when window resizes
            const computedStyle = getComputedStyle(star.element);
            star.baseX = parseFloat(computedStyle.left);
            star.baseY = parseFloat(computedStyle.top);
        });
    });

    // Reset stars when mouse leaves window
    document.addEventListener('mouseleave', () => {
        stars.forEach(star => {
            star.element.style.transform = 'translate(0, 0)';
        });
    });
    // Add this after star creation
    function twinkle() {
        stars.forEach(star => {
            if (Math.random() > 0.95) {
                star.element.style.opacity = Math.random() * 0.8 + 0.2;
            }
        });
        requestAnimationFrame(twinkle);
    }
    twinkle();
});
</script>

<style>
/* styles.css */




.cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    /* border: 2px solid rgba(255, 255, 255, 0.8); */
    /* border-radius: 50%; */
    pointer-events: none;
    transform: translate(-50%, -50%);
    /* mix-blend-mode: difference; */
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