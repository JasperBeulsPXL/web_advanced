<template>
    <input type="button"
           :value="buttonText"
           @click="$emit('operation-clicked', operation,number)"
    />
</template>

<script>
    export default {
        name: "OperationComponent",
        props:{operation: String, number: Number},
        computed:{
            buttonText(){
                return this.operation + ' ' + this.number;
            }
        }
    }
</script>

<style scoped>

</style>