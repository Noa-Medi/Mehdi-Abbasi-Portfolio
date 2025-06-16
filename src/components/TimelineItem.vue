<template>
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">{{ date }}</div>
        <div class="timeline-content">{{ content }}</div>
    </div>
</template>
<script>
export default {
    props: {
        date: String,
        content: String
    }
}
</script>

<style scoped>
.timeline-item {
    margin-bottom: 40px;
    width: 100%;
    position: relative;
    text-align: center;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-item:nth-child(odd) {
    padding-right: calc(50% + 30px);
}

.timeline-item:nth-child(even) {
    padding-left: calc(50% + 30px);
}

.timeline-dot {
    height: 21px;
    width: 21px;
    background-color: #4C00FF;
    position: absolute;
    left: calc(50% - 8px);
    border-radius: 50%;
    top: 10px;

}

.timeline-date {
    font-weight: 600;
}

.timeline-item:nth-child(even) .timeline-date {
    text-align: left !important;
}

.timeline-item:nth-child(odd) .timeline-date {
    text-align: right !important;
}

.timeline-content {
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fafafa2b;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(224, 224, 224, 0.25);
    padding: 30px;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.3s ease;
}

.timeline-content:hover {
    transform: scale(1.05);
}

/* TODO: fixing the width for small mobiles and tablets  */

@media (max-width: 768px) {
    .timeline-item:nth-child(odd) {
        padding: 0;
        padding-left: 2.5rem !important;
        padding-right: 1rem;
    }

    .timeline-item:nth-child(even) {
        padding: 0;
        padding-left: 2.5rem !important;
        padding-right: 1rem;
    }

    .timeline-dot {
        height: 21px;
        width: 21px;
        background-color: #4C00FF;
        position: absolute;
        left: .7rem;
        border-radius: 50%;
        top: 0px;

    }

    .timeline-item:nth-child(even) .timeline-date {
        text-align: left !important;
    }

    .timeline-item:nth-child(odd) .timeline-date {
        text-align: left !important;
    }

}
</style>