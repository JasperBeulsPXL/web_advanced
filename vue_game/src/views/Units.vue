<template>
    <div>
        <ul>
            <li v-for="building in allPurchasedBuildings" :key="building.id">
                <UnitBuilding :building="building"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import UnitBuilding from "../components/UnitBuilding";
    export default {
        name: "Units",
        components: {UnitBuilding},
        computed:{
            allPurchasedBuildings(){
                let purchasedBuildings = this.$store.state.purchasedBuildings;
                let buildings = this.$store.state.buildings;
                let allPurchasedBuildings = [];

                purchasedBuildings.forEach(pBuilding => {
                    let building = buildings.find(building => building.id === pBuilding.id);
                    for (let i = 0; i < pBuilding.amount; i++) {
                        allPurchasedBuildings.push(building);
                    }
                });

                return allPurchasedBuildings;
            }
        }
    }
</script>

<style scoped>

</style>