import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        customers: [
            {firstName: 'Jasper', name: 'Beuls',street:'Elfde-linie', houseNumber: 11, zipcode: 3500, city: 'Hasselt'},
            {firstName: 'Mahsun', name: 'Pinar',street:'frituurstraat', houseNumber: 9, zipcode: 1000, city: 'Brussels'},
            {firstName: 'Laura', name: 'Tuyaerts',street:'kebabstraat', houseNumber: 40, zipcode: 2000, city: 'Antwerp'},
            {firstName: 'Tiziano', name: 'Votano',street:'pizzastraat', houseNumber: 69, zipcode: 4200, city: 'Luik'},
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})
