<template>
    <div class="building">
        <img class="building__img" :src="require(`@/assets/buildings/${building.src}`)"/>
        <div class="building__info">
            <h2>{{building.name}}</h2>
            <label>Gold: {{building.gold}}</label>
            <label>resources needed: {{building.steel}} steel, {{building.ammunition}} ammunition</label>
            <input class="building__info__button" type="button" value="buy this building" @click="purchaseBuilding"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Building",
        props: {building: Object},
        methods: {
            purchaseBuilding(){
                return this.$store.commit('purchaseBuilding', {id:this.building.id});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .building {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        &__img {
            width: 25%;
            min-width: 260px;
            margin-right: 20px;
        }

        &__info {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-evenly;

            &__button {
                max-width: 40%;
                align-self: center;
                cursor:pointer;
            }
        }
    }
</style>