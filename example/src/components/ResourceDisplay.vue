<template>
    <div class="resourceDisplay">
        <img :src="require(`@/assets/resources/${resource.image}`)" />
        <label>{{resource.amount}}</label>
    </div>
</template>

<script>
    export default {
        name: "ResourceDisplay",
        props: {resource: Object}
    }
</script>

<style scoped>
    .resourceDisplay{
        display: flex;
        align-items: center;
    }
    img{
        width: 40px;
        height: 40px;
        padding-right: 5px;
    }
</style>