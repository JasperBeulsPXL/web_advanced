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
                id: 1,
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
                        ammunition: 100,
                        src: 'armyuniticons_90x90_javeliner.jpg'
                    }, {
                        name: 'imperial shocktrooper',
                        health: 200,
                        gold: 100,
                        ammunition: 50,
                        src: 'armyuniticons_90x90_LateMiddleAge_champion.jpg'
                    }, {
                        name: 'imperial cannon fodder',
                        health: 30,
                        gold: 10,
                        ammunition: 5,
                        src: 'armyuniticons_90x90_legionnaire.jpg'
                    },
                ]
            },
            {
                id: 2,
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
                        ammunition: 1500,
                        src: 'Mercenario.jpg'
                    }, {
                        name: 'Primarch',
                        health: 15000,
                        gold: 2500,
                        ammunition: 150,
                        src: 'Rifleman.jpg'
                    }
                ]
            },
        ],
        purchasedBuildings: [
            {
                id: 1,
                amount: 1
            }
        ],
        economy: [
            {
                name: 'goldmine',
                src: 'goldmine.jpg',
                level: 1,
                income: 500,
                upgradeList: [
                    {
                        name: 'level 1',
                        incomePerTurn: 500,
                        costToUpgrade: 1500
                    },{
                        name: 'level 2',
                        incomePerTurn: 750,
                        costToUpgrade: 2500
                    },
                ]
            },
            {
                name: 'steelworks',
                src: 'steelworks.jpg',
                level: 1,
                income: 500,
                upgradeList: [
                    {
                        name: 'level 1',
                        incomePerTurn: 500,
                        costToUpgrade: 1500
                    },{
                        name: 'level 2',
                        incomePerTurn: 750,
                        costToUpgrade: 2500
                    },
                ]
            }
        ]
    },
    mutations: {
        nextTurn(state) {
            state.turnNumber += 1;
        },
        purchaseBuilding(state, payload) {
            let building = state.purchasedBuildings.find(building => {
                return building.id === payload.id;
            });

            if (building) {
                building.amount += 1;
            } else {
                state.purchasedBuildings.push({
                    id: payload.id,
                    amount: 1
                });
            }
        }
    },
    actions: {},
    modules: {}
})
