<template>
    <div class="timeline-section">
        <img class="timeline-background background-position" src="../assets/Backgroundleyout 1.png"></img>
        <div class="background-overlay background-position"></div>
        <div class="timeline-items">
            <timeline-item :date="$t('timeline.item1.date')" :content="$t('timeline.item1.content')" />
            <timeline-item :date="$t('timeline.item2.date')" :content="$t('timeline.item2.content')" />
            <timeline-item :date="$t('timeline.item3.date')" :content="$t('timeline.item3.content')" />
            <timeline-item :date="$t('timeline.item4.date')" :content="$t('timeline.item4.content')" />
            <timeline-item :date="$t('timeline.item5.date')" :content="$t('timeline.item5.content')" />
            <timeline-item :date="$t('timeline.item6.date')" :content="$t('timeline.item6.content')" />
            <timeline-item :date="$t('timeline.item7.date')" :content="$t('timeline.item7.content')" />
            <timeline-item :date="$t('timeline.item8.date')" :content="$t('timeline.item8.content')" />
            <timeline-item :date="$t('timeline.item9.date')" :content="$t('timeline.item9.content')" />
        </div>
    </div>
</template>
<script>
import TimelineItem from './TimelineItem.vue';
export default {
    components: {
        TimelineItem
    }
}
</script>
<style scoped>
.timeline-items {

    max-width: 1000px;
    margin: auto;
    top: 20rem;
    display: flex;
    flex-wrap: wrap;
    position: relative
}

.timeline-items::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: white;
    left: calc(50% - 1px);
}

.timeline-section {
    position: relative;
    height: auto;
    width: 100vw;
}

.timeline-background {
    position: fixed;
    top: 20rem;
    left: 0;
    height: 300vh;
    width: 100vw;
    z-index: -1;
    object-fit: cover;
    object-position: top;
    pointer-events: none;
    /* filter: blur(4px); */
}



.background-position {
    top: -20rem;
    left: 0;
}

@media (max-width: 768px) {
    .timeline-items::before {
        left: 1.2rem;
    }

    .timeline-items {
        max-width: 100%;
        /* margin: auto; */
        top: 03rem;
    }

    .timeline-background {
        position: absolute;
        top: -10rem;
        right: 0;
        height: 300vh;
        width: 130vw;
        z-index: -1;
        object-fit: cover;
        object-position: top;
        pointer-events: none;
        /* filter: blur(4px); */
    }
}
</style>