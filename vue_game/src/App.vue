<template>
    <div id="app">
        <Header/>
        <router-view />
        <Footer/>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";

    export default {
        name: "App",
        components: {Footer, Header}
    }
</script>

<style lang="scss">
    body{
        background-color: black;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;

        ul{
            list-style-type: none;
        }
    }

    #nav {
        padding: 30px;
        display: flex;

        a {
            font-weight: bold;
            color: white;

            &.router-link-exact-active {
                color: goldenrod;
            }
        }
    }
</style>
