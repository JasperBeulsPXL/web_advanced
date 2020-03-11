# Promises

Navigeer naar de promises directory en install de dependencies. Start daarna de server.

```
cd oefeningen\promises\app  
npm install
node server.js
```

Een [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) is een object dat de 
uiteindelijke voltooiing of mislukking van een asynchrone operatie vertegenwoordigd.

Laten we beginnen met het aanmaken van een simpele promise.
Vervang de `getImageName` functie in `js\main.js` met de volgende code.
```javascript
function getImageName(country) {
  country = country.toLowerCase();
  const promiseOfImageName = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (country === 'spain' || country === 'chile' || country === 'peru') {
        resolve(country + '.png');
      } else {
        reject(Error('Didn\'t receive a valid country name!'));
      }
    }, 1000);
  });
  console.log(promiseOfImageName);
  return promiseOfImageName;    
}
```

Sla de code op en refresh de pagina.

Geef nu 'Spain' in in het **Country Name** veld en klik op **Get Image Name**.  
Je zou nu een [Promise Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
in de console gelogd moeten zien.

Geef nu 'Hello World' in in het **Country Name** veld en klik op **Get Image Name**.  
Je zou nu nog een [Promise Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
in de console moeten zien verschijnen, gevolgd door een error.

`Uitleg:`  
`getImageName()` creëert een promise. Een promise vertegenwoordigd de uiteindelijke voltooiing of failure van een asynchrone
operatie, en zijn resultaat.  
Een promise staat een asynchrone functie zoals `getImageName()` toe om een waarde te returnen net zoals een synchrone functie dat zou doen.
In de plaats van het resultaat te returnen (bv hier "spain.png"), return `getImageName()` een belofte om in de toekomst een resultaat
te returnen. (Nadat de asynchrone operatie voltooid of gefaald is)

Een promise aanmaken gaat zo:

```javascript
const promise = new Promise((resolve, reject) => {
  // do a thing, possibly async, then...

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

Afhankelijk van de uitkomst van de asynchrone operatie kan een promise oftewel:  
`resolven:` De asynchrone operatie is gelukt en de promise returnt een **value**.
`rejecten:` De asynchrone operatie is mislukt en de promise returnt een **error**.

## Use the promise
Nu gaan we de promise die we net gecreëerd hebben gebruiken.

Pas de `flagChain()` functie aan met de volgende code:

```javascript
function flagChain(country) {
  return getImageName(country)
  .then(logSuccess, logError);    
}
```

Save het script en refresh de pagina.  
Geef nu 'Spain' in in het **Country Name** veld en klik op **Fetch Flag Image**.

Doe ook eens hetzelfde met 'Hello World' als input. Je zou nu onze custom error message moeten zien in de console.

`Uitleg:`  
De `flagChain()` functie returnt het resultaat van `getImageName()`, wat een promise is.  
De [then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) methode laat ons
toe om impliciet onze (`rejected` of `resolved`) promise door te geven naar een andere functie.  
De [then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) methode neemt 2 argumenten
aan in de volgende volgorde:
1. De functie die gecalled moet worden als de promise resolved.
2. De functie die gecalled moet worden als de promise reject.

Als de eerste functie gecalled wordt dan wordt impliciet de `resolved` promise **value** doorgegeven naar deze functie. Als
de tweede functie wordt gecalled dan wordt impliciet de `rejected` promise **error** doorgegeven naar de tweede functie.

## Use catch for error handling
Laten we een kijkje nemen naar de `catch` method.

Vervang de `flagChain()` functie met volgend stukje code:
```javascript
function flagChain(country) {
  return getImageName(country)
  .then(logSuccess)
  .catch(logError);    
}
```

Save het script en refresh de pagina.

`Uitleg:`  
De [catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) methode werkt 
ongeveer zoals de [then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) methode,
maar behandelt enkel `rejected` promises.

In dit nieuwe patroon, als de promise van `getImageName()` `resolved`, dan wordt `logSuccess()` gecalled en wordt daar impliciet
de resolved promise **value** aan meegegeven.  
Als de promise van `getImageName()` `reject`, dan wordt `logError()` gecalled en wordt daar impliciet de rejected promise **error**
aan meegegeven.

## Chaining promises

Vervang de `flagChain()` functie nu weer, nu met volgend stukje code:

```
function flagChain(country) {
  return getImageName(country)
  .then(fetchFlag)
  .then(processFlag)
  .then(appendFlag)
  .catch(logError); 
}
```

Save het script en refresh de pagina.  

Geef nu 'Spain' in in het **Country Name** veld en klik op **Fetch Flag Image**.

Doe ook hetzelfde met 'Hello World' als input. Je zou nu onze custom error message moeten zien in de console.
Dit is een teken dat onze `catch`-blok correct uitgevoerd wordt.

`Uitleg:`  
De functie doet het volgende:  
1. `getImageName()` returnt een promise. De promise oftewel `resolves` met een image file name of `rejects` met een error, 
afhankelijk van de input.
2. Als de gereturnde promise `resolves` dan wordt de image file name naar de `fetchFlag` functie doorgegeven binnen de eerste
`then`. Deze functie request asynchroon de bijhorende image file en returnt een promise.
3. Als de promise van `fetchFlag()` `resolves` dan wordt de resolved **value** (een [response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object)
doorgegeven naar `processFlag()` in de volgende `then`.  
De `processFlag()` functie checkt of de response ok is en gooit en error als dit niet zo is.  
Is deze wel ok, dan verwerkt deze functie de response met de `blob` method, die ook een promise returnt.
4. Als de promise van `processFlag` `resolves` dan wordt de resolved **value** (een [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob))
doorgegeven naar de `appendFlag()` functie.  
Deze functie maakt een image van de value en voegt deze toe aan het DOM

Als één van de promises `rejects` dan worden alle daaropvolgende `then`-blokken overgeslaan en wordt de `catch`-blok uitgevoerd.
