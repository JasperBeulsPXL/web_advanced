import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        turnNumber: 1,
        resources: [
            {name: 'gold', amount: 1000, image: 'gold.png'},
            {name: 'steel', amount: 1000, image: 'steel.png'},
            {name: 'ammunition', amount: 1000, image: 'ammunition.png'},
        ],
        buildings: [
            {
                name: 'imperial barracks',
                gold: 5000,
                steel: 100,
                ammunition: 100,
                src: 'Canoncamp.png',
                units: [
                    {
                        name: 'imperial stormtrooper',
                        health: 100,
                        gold: 50,
                        ammunition: 100
                    }, {
                        name: 'imperial shocktrooper',
                        health: 200,
                        gold: 100,
                        ammunition: 50
                    }, {
                        name: 'imperial cannon fodder',
                        health: 30,
                        gold: 10,
                        ammunition: 5
                    },
                ]
            },
            {
                name: 'Astartes barracks',
                gold: 5000,
                steel: 100,
                ammunition: 100,
                src: 'Warrior_Barracks.png',
                units: [
                    {
                        name: 'Space marine',
                        health: 5000,
                        gold: 1000,
                        ammunition: 1500
                    }, {
                        name: 'Primarch',
                        health: 15000,
                        gold: 2500,
                        ammunition: 150
                    }
                ]
            },
        ]
    },
    mutations: {
        nextTurn(state) {
            state.turnNumber += 1;
        }
    },
    actions: {},
    modules: {}
})
