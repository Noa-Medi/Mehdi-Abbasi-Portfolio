<template>
    <div class="container">

    </div>
</template>
<script>
export default {
    props: {
        wordsList: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.container {
    margin: 5rem 0;
    background: linear-gradient(to right, #ff00ff, #4989eb);
    color: transparent;
    width: 100%;
    height: 3rem;
}
</style>