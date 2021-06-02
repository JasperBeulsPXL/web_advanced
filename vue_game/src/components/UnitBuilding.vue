<template>
    <div class="unitbuilding">
        <img class="building__img"
             :src="require(`@/assets/buildings/${building.src}`)"/>
        <div class="unitbuilding__info">
            <h2>{{selectedUnit.name}}</h2>
            <h3>Gold: {{selectedUnit.gold}}</h3>
            <ul class="unitbuilding__info__buttons">
                <li v-for="unit in building.units" :key="unit.id"
                    class="unitbuilding__info__listitem">
                    <UnitButton :unit="unit"
                                @unit-hover="changeSelectedUnit"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import UnitButton from "./UnitButton";

    export default {
        name: "UnitBuilding",
        components: {UnitButton},
        props: {building: Object},
        data() {
            return {
                selectedUnit: {
                    name: 'Hover over a unit',
                    gold: 0
                }
            }
        },
        methods: {
            changeSelectedUnit(unit) {
                this.selectedUnit = unit;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .unitbuilding {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 20px;

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

            &__buttons {
                display: flex;
                padding: 0;
            }

            &__listitem {
                margin: 0 5px 0 5px;
            }
        }
    }
</style>