# Core vue concepts

Je vue site is wat met een single-page application noemt. Dit wilt zeggen dat in plaats van telkens een nieuwe pagina te
laden in de browser we slechts één pagina gaan laden en deze pagina zijn content dynamisch gaan veranderen.

## Creating and mounting a vue instance
De pagina waar onze vue instantie ingeladen wordt is `index.html` die je kan vinden in de public directory.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

In index.html kun je het volgende element terugvinden:

``<div id="app"></div>``

Merk het id 'app' op. In de file main.js maken we onze vue instantie aan via javascript. Deze instantie gaan we daarna mounten 
binnen de dit element met het id 'app'.

```
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

Aan de render functie geven we een component mee, in dit geval het `App component (App.vue)` die we importeren bovenaan in de main.js file.
Dit component gaat als eerste geladen worden.

##Components
Vue componenten bestaan uit drie delen:  
`- Template`  
De  template bevat je HTML en je vue templating language.  
`- Script`  
Het script bevat je javascript.  
`- Style`  
De style bevat je styling, bv CSS of SASS

## data and props
### data
De data/state van een component wordt opgeslagen in de data property van het component. Ter illustratie neem ik even het
``UnitBuilding.vue`` component uit onze vue_game oefening erbij.
```vue
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
```

Zoals je hier kunt zien is ``data()`` een functie die een object returnt. Dit object is de state van je component.  
Belangrijk om te onthouden hierbij is dat als je wilt dat je component re-renderd op het moment dat één van deze state properties
veranderd van waarde, dan **MOET** je deze een default waarde geven. Zoals we hier bv voor de ``selectedUnit`` property hebben gedaan.  
Anders kan vue geen veranderingen in de waarde van de state property detecteren.

Om de waarde van één van je data-properties te veranderen moet je zoals je in de `changeSelectedUnit()` functie ziet gebruik
maken van `this` om de juiste scope aan te geven.
```
this.selectedUnit = unit;
```
### props

Je component kan ook nood hebben aan gegevens die die van een parent component moet krijgen. Deze kunnen door middel van props doorgegeven worden.

**In het component dat de props binnen krijgt** ga je deze eerst moeten declareren.  
Om fouten gemakkelijker op te sporen gaan we ook aan type-checking doen. Dit wilt zeggen dat we bij het declareren al het 
datatype dat we verwachten dat de prop moet zijn mee gaan geven.  
Kijk opnieuw naar het voorbeeld van Unitbuilding.vue:  
``props: {building: Object}``  
We declareren een property props die een object is dat alle namen van onze props en hun type bevat.

**In het component dat de props door gaat geven** geef je deze door via de template op de plaats waar je het child component 
renderd. Like so:  
`Units.vue`
```
<UnitBuilding :building="building"/>
```
### methods
Methodes die je aan wilt roepen declareer je onder de methods property. Dit is een object die al je methods/functies bevat.
```
methods: {
            changeSelectedUnit(unit) {
                this.selectedUnit = unit;
            }
        }
```
Zo een methode kun je ook aanroepen als er een event plaatsvindt, zoals bv een click-event.
```
<h1 @click="changeSelectedUnit">Klik op mij</h1>
```

## Custom events
Soms willen we ons eigen event creëren om bijvoorbeeld op die manier data van een child component door te kunnen geven naar
het parent component. Dit kunnen we doen door de ``$emit()`` functie te gebruiken.

In het component dat de data door gaat geven (child component) roepen we de $emit functie aan like so:  
`Unitbutton.vue`
```
<template>
    <img :src="require(`@/assets/units/${unit.src}`)"
         @mouseenter="$emit('unit-hover', unit)"
    />
</template>
```
Zodra de muis over de image komt wordt de $emit() functie aangeroepen. Als eerste parameter geven we een naam aan ons 
custom event. `'unit-hover'`, en als tweede parameter geven we de data die we naar boven willen gooien mee.

In het component dat de data gaat ontvangen (parent component) gaan we een event-handler maken die gaat luisteren of het 
custom event wordt gegooid.  
`UnitBuilding.vue`
```
<UnitButton  @unit-hover="changeSelectedUnit"/>
```

## Directives
Vue maakt gebruik van een templating language. Dit wilt hier concreet zeggen dat je niet alleen HTML kunt gebruiken om je
elementen op te bouwen, maar dat je ook toegang hebt tot directives om je te helpen om je HTML op te bouwen.  
Hier zijn enkele van de voornaamsten die we in de cursus hebben gezien, volg de links voor een uitgebreide uitleg met voorbeelden:  
[v-for](https://vuejs.org/v2/guide/list.html)  
[v-if](https://vuejs.org/v2/guide/conditional.html#v-if)  
[v-show](https://vuejs.org/v2/guide/conditional.html#v-show)  
[v-bind](https://vuejs.org/v2/api/#v-bind)  
[v-model](https://vuejs.org/v2/api/#v-model)

## Vuex
Sommige gegevens heb je nodig in meerdere componenten. Om ervoor te zorgen dat die data beschikbaar is voor alle componenten, EN er maar 1 single-source-of-truth is, gebruiken we vuex.  
Een single-source-of-truth wilt zeggen dat de waarde op 1 plaats gedefiniëerd staat en dat elk component dat die data uitleest of aanpast dat steeds vanuit dezelfde geheugenruimte(dus 1 plaats) doet. 

In vuex houden we dus gegevens bij die we op globaal niveau nodig hebben binnen onze applicatie. Deze collectie van data noemen we de `store`.

Onze vuex store kunnen we terugvinden onder de store directory in de src folder.  
`index.js`
```javascript
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

```
### State
Allereerst zie je dat de store een state bevat. Deze kun je vergelijken met `data()` uit je vue components.  
Hier komen alle gegevens die je globaal wilt bijhouden te staan. Belangrijk om op te merken: Ook hier is het weer, net zoals in een component,
belangrijk dat je je properties die kunnen veranderen een default waarde geeft in je state. Doe je dit niet, en je voegt 
later een nieuwe waarde toe aan je state en wijzigt deze op een later moment, dan zal vuex de verandering niet detecteren. 
Enkel de initiële waarde die je aan de nieuwe property gaf zal bewaard blijven.

### Mutations
Je kan state niet direct aanpassen in vuex, hiervoor moeten we gebruik maken van mutations.
Een mutation functie gaat dus één of meerdere properties in onze state toevoegen/wijzigen/verwijderen.  

Als eerste parameter geven we altijd het state object mee. In de `nextTurn()` mutation hoeven we verder niks mee te geven.
Deze functie geeft verhoogt simpelweg onze turnNumber property met 1.
```javascript
nextTurn(state){
    state.turnNumber += 1;
}
```

Soms is het echter nodig dat er gegevens uit een component doorgegeven moeten worden naar onze store.
In dat geval moeten we een `payload` meegeven aan onze mutation.  
De mutation zou er dan als volgt uit kunnen zien.
```javascript
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
```

Deze mutation moeten we natuurlijk ook ergens oproepen op het moment dat we onze state willen updaten. In dit voorbeeldje
doen we dat in `Building.vue`

```vue
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
```
Een mutation callen werkt ongeveer zoals het emitten van een custom event. Maar nu doen we geen $emit() maar 
`this.$store.commit()` Als eerste parameter geven we de naam van de mutation
mee, als tweede parameter geven we de payload mee.  
Wil je meerdere gegevens meegeven moet je deze samen in een object steken, dit object wordt dan je payload.
Heb je maar 1 variabele die je door wilt geven hoef je die niet verplicht eerst in een object te steken.
Bijvoorbeeld:  
```
this.$store.commit('purchaseBuilding', {id:this.building.id});
```
We hadden ook meerdere gegevens door kunnen geven via de payload door ze aan ons payload object toe te voegen.  
Like so:  
```
this.$store.commit('purchaseBuilding', {id:this.building.id, tweedeParameter: 'dit is een tweede parameter'});
```

In onze mutation hebben we binnen de payload parameter nu toegang tot het id dat we meegegeven hebben aan de commit functie
via `payload.id`. Want ons payload object ziet er als volgt uit: `{id:this.building.id}`.
Dit id kunnen we dan gebruiken om onze state te updaten.  
`store index.js`
```
purchaseBuilding(state, payload) {
    let building = state.purchasedBuildings.find(building => {
        return building.id === payload.id;
    });
}
```

