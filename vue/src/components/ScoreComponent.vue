<template>
    <div>
        <div>{{total}}</div>
        <OperationComponent operation="-" :number="1" @operation-clicked="adjustScore" />
        <OperationComponent operation="-" :number="10" @operation-clicked="adjustScore"/>
        <OperationComponent operation="+" :number="1" @operation-clicked="adjustScore"/>
        <OperationComponent operation="+" :number="10" @operation-clicked="adjustScore"/>
        <OperationComponent operation="*" :number="2" @operation-clicked="adjustScore"/>
        <OperationComponent operation="/" :number="2" @operation-clicked="adjustScore"/>
    </div>
</template>

<script>
    import OperationComponent from "./OperationComponent";
    export default {
        name: "ScoreComponent",
        components: {OperationComponent},
        data(){
            return {
                total: 100,
                numberOfSymbols: 0
            }
        },
        methods:{
            adjustScore(operation,number){
                number = parseInt(number);
                switch (operation) {
                    case "+": this.total += number;
                        if(this.total >= 200){ this.numberOfSymbols += 1}
                    break;
                    case "-": this.total -= number;
                    break;
                    case "*": this.total *= number;
                        if(this.total >= 200){ this.numberOfSymbols += 1}
                    break;
                    case "/": this.total /= number;
                    break;
                }

            }
        }
    }
</script>

<style scoped>

</style>