<template>
    <div class="buildings">
        <ul>
            <li v-for="building in getBuildings" :key="building.name">
                <Building :building="building"/>
            </li>
        </ul>
    </div>
</template>


<script>
    import Building from "../components/Building";

    export default {
        name: "Buildings",
        components: {Building},
        computed: {
            getBuildings() {
                return this.$store.state.buildings;
            }
        }
    }
</script>

<style lang="scss" scoped>
  .buildings{
    width: 80%;
    margin: 0 auto;

  }
  ul{
    list-style: none;
      li{
          padding: 5px;
      }
  }
</style>