<template>
    <div class="draggable-container" :style="{ left: position.x + 'px', top: position.y + 'px' }" @mousedown="startDrag"
        @touchstart="startDrag">
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
            position: { x: 0, y: 0 },
            offset: { x: 0, y: 0 },
            isDragging: false,
            parentWidth: 0,
            parentHeight: 0
        }
    },
    mounted() {
        this.updatePosition();
        window.addEventListener('resize', this.updatePosition);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updatePosition);
    },
    methods: {
        updatePosition() {
            const parent = this.$el.parentNode;
            this.parentWidth = parent.clientWidth;
            this.parentHeight = parent.clientHeight;

            // Convert percentage positions to pixels
            this.position = {
                x: this.parentWidth * (this.initPosition.x / 132),
                y: this.parentHeight * (this.initPosition.y / 115)
            };
        },
        getClientCoordinates(e) {
            if (e.type.includes('touch')) {
                return {
                    clientX: e.touches[0].clientX,
                    clientY: e.touches[0].clientY
                };
            }
            return {
                clientX: e.clientX,
                clientY: e.clientY
            };
        },
        startDrag(e) {
            e.preventDefault();
            this.isDragging = true;
            const { clientX, clientY } = this.getClientCoordinates(e);
            this.offset = {
                x: clientX - this.position.x,
                y: clientY - this.position.y
            };

            window.addEventListener('mousemove', this.onDrag);
            window.addEventListener('touchmove', this.onDrag);
            window.addEventListener('mouseup', this.stopDrag);
            window.addEventListener('touchend', this.stopDrag);
        },
        onDrag(e) {
            if (!this.isDragging) return;
            e.preventDefault();

            const { clientX, clientY } = this.getClientCoordinates(e);
            const elRect = this.$el.getBoundingClientRect();

            let newX = clientX - this.offset.x;
            let newY = clientY - this.offset.y;

            // Clamp to parent boundaries
            newX = Math.max(0, Math.min(newX, this.parentWidth - elRect.width));
            newY = Math.max(0, Math.min(newY, this.parentHeight - elRect.height));

            this.position = { x: newX, y: newY };
        },
        stopDrag() {
            this.isDragging = false;
            window.removeEventListener('mousemove', this.onDrag);
            window.removeEventListener('touchmove', this.onDrag);
            window.removeEventListener('mouseup', this.stopDrag);
            window.removeEventListener('touchend', this.stopDrag);
        }
    }
}
</script>


<style scoped>
.draggable-container {
    position: absolute;
    cursor: grab;
    user-select: none;
    background: linear-gradient(to right, #C200C5, #6600C5, #0099FF);
    height: 2rem;
    min-width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    touch-action: none;
    /* Important for touch devices */
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
    white-space: nowrap;
}

.emoji {
    margin-left: 0.5rem;
}
</style>
