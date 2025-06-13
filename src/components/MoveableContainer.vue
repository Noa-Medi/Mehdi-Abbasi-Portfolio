<template>
    <div class="draggable-container" :style="{ left: position.x + 'px', top: position.y + 'px' }"
        @mousedown="startDrag">
        <div class="content">
            <div class="text">{{ text }}</div>
            <div class="emoji">{{ emojie }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
        emojie: String,
        initPosition: Object,
    },
    data() {
        return {
            position: { x: this.initPosition.x, y: this.initPosition.y },
            offset: { x: 0, y: 0 },
            isDragging: false
        }
    },
    methods: {
        startDrag(e) {
            this.isDragging = true;
            this.offset.x = e.clientX - this.position.x;
            this.offset.y = e.clientY - this.position.y;
            window.addEventListener('mousemove', this.onDrag);
            window.addEventListener('mouseup', this.stopDrag);
        },
        onDrag(e) {
            if (!this.isDragging) return;

            const parent = this.$el.parentNode;
            const parentRect = parent.getBoundingClientRect();
            const elRect = this.$el.getBoundingClientRect();

            let newX = e.clientX - this.offset.x;
            let newY = e.clientY - this.offset.y;

            // Clamp X
            newX = Math.max(0, Math.min(newX, parentRect.width - elRect.width));
            // Clamp Y
            newY = Math.max(0, Math.min(newY, parentRect.height - elRect.height));

            this.position.x = newX;
            this.position.y = newY;
        },
        stopDrag() {
            this.isDragging = false;
            window.removeEventListener('mousemove', this.onDrag);
            window.removeEventListener('mouseup', this.stopDrag);
        }
    }
}
</script>

<style>
.draggable-container {
    position: absolute;
    cursor: grab;
    user-select: none;
    background: linear-gradient(to right, #C200C5, #6600C5, #0099FF);
    height: 2rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0 0.5rem;
}

.text {
    color: #000;
    font-weight: 600;
}

.emoji {
    margin-left: 0.5rem;
}
</style>
