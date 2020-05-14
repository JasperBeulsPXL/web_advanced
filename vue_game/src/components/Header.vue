<template>
    <div class="header">

        <ul class="resource-list">
            <li v-for="resource in resources" :key="resource.name">
                <ResourceDisplay :resource="resource"/>
            </li>
        </ul>
        <h1> FOR THE EMPEROR! </h1>
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/buildings">Buildings</router-link>
        </div>
    </div>
</template>

<script>
    import ResourceDisplay from "./ResourceDisplay";

    export default {
        name: "Header",
        components: {ResourceDisplay},
        computed: {
            resources() {
                return this.$store.state.resources;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        h1 {
            color: goldenrod;
            flex-grow: 2;
        }
    }
    .resource-list {
        display: flex;
        align-items: center;
        list-style-type: none;
    }
</style>