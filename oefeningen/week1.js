// Oefeningen week 1


// Schrijf een functie 'multiply()'
// 2 parameters (number,number)
// output: De vermenigvuldiging van de twee getallen die als input gegeven werden.
function multiply(a, b) {
    return a * b;
}

// Schrijf een functie 'difference()'
// 1 parameter
// output: Het verschil tussen het ingegeven getal en het getal 100.
function difference(a) {
    let uitkomst = 0;

    if (a > 100) {
        uitkomst = a - 100;
    } else {
        uitkomst = 100 - a;
    }

    return uitkomst;
}

// Schrijf een functie 'isFifty()'
// 2 parameters
// output: Geeft TRUE terug als één van de getallen '50' is OF de som van de 2 getallen '50' is.
function isFifty(a, b) {
    return (a === 50 || b === 50 || (a + b) === 50);
}

// Schrijf een functie 'startsWithHello()'
// 1 parameter
// output: Als de inputstring begint met 'Hello ', return gewoon de string. Begint ze niet met 'Hello ', plak dit er dan voor.
function startsWithHello(a) {
    return a.startsWith('Hello ') ? 'hello' : 'hello' + a;
}

// Schrijf een functie 'removeCharacter()'
// 2 parameters (string, number)
// output: Verwijder het zoveelste karakter uit je string en print de nieuwe string (met dus 1 karakter minder)
// TIP: Kijk naar String.substring of String.slice
function removeCharacter(text, index){

    return text.substring(0,index-1) + text.substring(index);
}

console.log(removeCharacter('het zoveelste', 3)) ;

// Schrijf een functie 'capitalizeEveryWord()'.
// 1 parameter (string)
// output: Elk woord in de inputstring start met een hoofdletter, de rest van de letters zijn een kleine letter.
// TIP: Zoek String.prototype.split() , String.charAt() , String.substring() en String.join() op
function capitalizeEveryWord(zin){
    const woorden = zin.split(" ");
    let result = '';

    woorden.forEach(woord => {
        result += woord.charAt(0).toUpperCase() + woord.substring(1).toLowerCase() + ' ';
    });
    console.log(result);
}
capitalizeEveryWord("DIT is mijn zijn");
// Schrijf een functie 'countVowels()'.
// 1 parameter (string)
// output: Het aantal klinkers dat voorkomt in de input string.
// TIP: Loop over je string en kijk voor elke letter of die overeen komt met één van de klinkers.
function countVowels(text) {
    let vowelsCount = 0;
    let word = text.toLowerCase();
    for (let i = 0; i <= word.length; i++) {
        if (word.charAt(i) === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u'){
            vowelsCount += 1;
        }
    }
    console.log(vowelsCount);
}
countVowels('mijntekst');

// Schrijf een functie 'maxValue()'
// 3 parameters
// output: De functie geeft het grootste getal van de 3 als resultaat
function maxValue(a,b,c) {
    let largestValue = a;

    if(b > largestValue){
        largestValue = b;
    }
    if(c > largestValue){
        largestValue = c;
    }
    return largestValue;
}

console.log(maxValue(10,10,5));
/*
console.log('Output oef 1:', multiply(2, 2), multiply(4, 12));
console.log('Output oef 2:', difference(156), difference(20));
console.log('Output oef 3:', isFifty(15, 35), isFifty(70, -20), isFifty(50, 180), isFifty(10, 12));
console.log('Output oef 4:', startsWithHello('Hello there'), startsWithHello('there'));
console.log('Output oef 5(a):', removeCharacter('Voorbeeld', 1), removeCharacter('Voorbeeld', 4));
console.log('Output oef 5(b):', removeCharacter2('Voorbeeld', 1), removeCharacter2('Voorbeeld', 4));
console.log('Output oef 6:', capitalizeEveryWord('elk woord zou moeten beginnen met een hoofdletter'));
console.log('Output oef 7:', `De inputstring bevat ${countVowels('oefening')} klinkers`);
console.log('Output oef 8:', `Het grootste nummer is ${maxValue(12, 5, 25)}`);


*/

