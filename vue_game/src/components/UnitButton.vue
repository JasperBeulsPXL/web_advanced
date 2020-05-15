<template>
    <img :src="require(`@/assets/units/${unit.src}`)"
         @mouseenter="$emit('unit-hover', unit)"
    />
</template>

<script>
    export default {
        name: "UnitButton",
        props: {unit: Object}
    }
</script>

<style scoped>
    img{
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
</style>