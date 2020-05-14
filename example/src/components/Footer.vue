<template>
    <div class="footer">
        <input id="next" type="button" :value="turnNumber" @click="nextTurn"/>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        computed: {
            turnNumber() {
                return this.$store.state.turnNumber;
            }
        },
        methods: {
            nextTurn() {
                this.$store.commit('nextTurn');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    #next {
        color: white;
        font-size: 25px;
        border: none;
        width: 150px;
        height: 150px;
        background-image: url("../assets/next_turn_background.jpg");
        background-size: cover;
        outline: 0;

        &:hover {
            cursor: pointer;
        }
    }
</style>