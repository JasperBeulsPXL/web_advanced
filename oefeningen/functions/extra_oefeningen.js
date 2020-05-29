
const customers = [
    {firstName: 'Jasper', name: 'Beuls',street:'Elfde-linie', houseNumber: 11, zipcode: 3500, city: 'Hasselt'},
    {firstName: 'Mahsun', name: 'Pinar',street:'frituurstraat', houseNumber: 9, zipcode: 1000, city: 'Brussels'},
    {firstName: 'Laura', name: 'Tuyaerts',street:'kebabstraat', houseNumber: 40, zipcode: 2000, city: 'Antwerp'},
    {firstName: 'Tiziano', name: 'Votano',street:'pizzastraat', houseNumber: 69, zipcode: 4200, city: 'Luik'},
];

// Schrijf een functie waar je de array filterd. Return als resultaat een array met enkel de mensen die in Brussel wonen.


// Schrijf een functie waarmee je het aantal letters van de straatnaam telt. Zorg ervoor dat die waarde op het einde
// weergegeven wordt als getal na de komma. Heeft een woord dus 10 letters, dan is de output 0.10 .


// Schrijf een functie die in bovenstaande array elke stad veranderd naar Tokyo. De eerste krijgt als stadsnaam 'Tokyo',
// de tweede 'Tokyo-Tokyo', de derde 'Tokyo-Tokyo-Tokyo' en zo verder.


// Genereer voor elk object in de array, behalve als het huisnummer '9' is, een <div>-element met alle info van deze persoon in.
// weergeef de waarde van zipcode op een button die als er op geklikt wordt GEEN REFRESH van de pagina veroorzaakt.
// Als je op die knop klikt moet de zipcode met 1 verhoogd worden.


// Schrijf een functie die itereert over de array. Na elke iteratie print je de straatnaam achter alle voorgaande straatnamen
// bv Elfde-liniefrituurstraatkebabstraat. Als de lengte van die string een even getal is moet je ENKEL de laatste straatnaam
// in hoofdletters schrijven, de andere straten blijven de grootte behouden die ze voordien kregen.