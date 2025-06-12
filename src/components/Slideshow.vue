<template>
    <div class="container">
        <div class="items-list">
            <div v-for="item in itemsList1" class="item-container"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        itemsList1: Array,
        itemsList2: Array

    }
}</script>
<style></style>