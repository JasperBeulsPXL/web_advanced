Open je computer's command line. 

Navigeer naar fetch-api-lab/app/ en start de lokale development server:

```
cd fetch-api-lab/app
npm install
node server.js
```
Je kan het process stoppen met Ctrl-c.

``js/index.js`` is de main javascript file van onze app, hier gaan we onze code schrijven  
``index.html`` is de main HTML-pagina van onze site/app  
``package-lock.json and package.json`` zijn de configuratie-bestanden van onze development server   
``server.js`` is een node development server  

# Fetching a resource

We gaan de fetch api gebruiken om HTTP requests te versturen.  

Pas de fetchJSON functie aan en verstuur een request naar ``examples/animals.json`` en log het resultaat.

```
function fetchJSON() {
  fetch('examples/animals.json')
    .then(logResult)
    .catch(logError);
}
```
De fetch method verwacht als parameter de url waarnaar we de request willen sturen.
Fetch retourneert een promise die resolved in een [response object](https://developer.mozilla.org/en-US/docs/Web/API/Response).  
Als de promise resolved wordt de response doorgegeven naar de logResult functie.  
Als de promise werd gereject neemt de catch over en wordt de error naar de logError function doorgegeven.

Bekijk de gelogde respons in de console. Kijk voornamelijk naar de waardes van de ``status``, ``url``, en ``ok`` properties.  
Probeer nu eens de fetch uit te voeren met een onbestaande url als parameter en vergelijk het resultaat.

Wat je waarschijnlijk opvalt is dat ook al kregen we een slechte response (bv 404 not found), onze promise toch successvol werd geresolved. We kwamen dus niet terecht in de catch blok.  
De uitleg hiervoor is dat fetch promises enkel rejecten als de request niet kon voltooid worden.
We moeten dus steeds de validiteit van onze respons checken!

### Checking response validity
In index.js, voeg een functie toe om responses te valideren:

```javascript
function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
```
Vervang daarna de code in fetchJSON()
```
function fetchJSON() {
  fetch('examples/non-existent.json')
    .then(validateResponse)
    .then(logResult)
    .catch(logError);
}
```
Refresh de pagina en klik op Fetch JSON.  
Nu zou onze incorrecte url wel de catch-blok moeten triggeren.

De validateResponse check die we hebben toegevoegd zorgt ervoor dat 'slechte' responses (zoals 404's)
een error gooien(throwen) en de catch gaat daardoor overnemen.  
Dit staat ons toe om gefaalde responses op te vangen en voorkomt dat onverwachte responses verder in de fetch chain 
terecht komen.

### Reading the response
Fetch responses zijn van het type [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).
ReadableStreams moeten gelezen worden om toegang te krijgen tot de body van de response. De body bevat de data die we op
zijn gaan halen.  
Om zo een stream te lezen kunnen we gebruik maken van enkele verschillende [methodes](https://developer.mozilla.org/en-US/docs/Web/API/Response) 
van het Response object.

In ``index.js`` voeg een ``readResponseAsJSON`` functie toe met de volgende code:
```
function readResponseAsJSON(response) {
  return response.json();
}
```
update ``FetchJSON()``
```
function fetchJSON() {
  fetch('examples/animals.json') // 1
  .then(validateResponse) // 2
  .then(readResponseAsJSON) // 3
  .then(logResult) // 4
  .catch(logError);
}
```
Als we nu opnieuw de data fetchen zouden we de data moeten zien die we op wouden halen ipv het Response object dat we
tot hiervoor als resultaat kregen.

#### Uitleg  
Even overlopen wat er gebeurd:  

**_Stap 1:_** Fetch wordt op een resource geroepen, ``examples/animals.json``.  
Fetch retourneert een promise die resolved naar een Response object. Wanneer de promise resolved wordt het resultaat, 
``het Response object`` doorgegeven naar de functie die we in de ``.then()`` hebben meegegeven.  

**_Stap 2:_** ``validateResponse()`` checkt of de response valid is ``(code 200?)``. Is het geen valid response dan wordt er een error gegooid.
Hierdoor worden de rest van de ``.then()`` blokken overgeslaan en wordt de ``.catch()`` blok getriggered.  
Dit is belangrijk omdat het voorkomt dat slechte responses verder door de [chain](https://developers.google.com/web/fundamentals/getting-started/primers/promises#chaining)
(de volgende .then()'s) worden doorgegeven.
Zonder deze check zouden latere stukken code kunnen breken als ze afhankelijk zijn van een valid response binnen te krijgen.

Als de response valid is wordt ze doorgegeven naar ``readResponseAsJSON()``

**_Stap 3:_** ``readResponseAsJSON()`` leest de body van de reponse door gebruik te maken van de ``Response.json()`` methode. 
Deze methode retourneert een promise die resolved naar JSON.  
Eens deze promise resolved wordt de data doorgegeven naar ``logResult()``.
(Moest de ``Response.json()`` promise gereject worden wordt ``.catch()`` blok getriggered)

**_Stap 4:_** De JSON data uit onze request naar ``examples/animals.json`` wordt gelogd door ``logResult()``.

### Fetching images and text
De fetch api kan niet enkel JSON data ophalen maar onder andere ook afbeeldingen of plain tekst.  
Ik heb van deze 2 een voorbeeld toegevoegd in de ``solution`` folder moest je willen zien hoe je dit kan doen, maar ik ga deze
op dit moment in de les (nog?) niet behandelen.  
Neem maar eens een kijkje wanneer je eens tijd hebt, er is niet zoveel verschil met het ophalen van JSON.

# Using HEAD requests
By default gebruikt fetch de [GET method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), die gaat een specifieke
resource ophalen. Maar fetch kan ook andere HTTP methods gebruiken. Let's see how!

### Make a head request
Lees hier over de [HEAD method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)

Vervolledig de ``headRequest()`` functie met de volgende code:
```
function headRequest() {
  fetch('examples/words.txt', {
    method: 'HEAD'
  })
  .then(validateResponse)
  .then(readResponseAsText)
  .then(logResult)
  .catch(logError);
}
```
En voeg ook de ``readResponseAsText()`` functie toe:
```
function readResponseAsText(response) {
  return response.text();
}
```
Refresh de pagina en klik op Head request. Bekijk de response.  

Zoals je kan zien krijgen we in tegenstelling tot de [GET method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) deze keer 
geen gevulde body terug in de response.  

Dit komt omdat de [HEAD method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD) enkel
de headers teruggeeft als resultaat, en een lege body.  
Dit is bijvoorbeeld handig wanneer je eerst wilt kijken naar de headers
vooraleer je beslist de ``GET`` te doen. Je zou bijvoorbeeld eerst willen kijken hoe groot het resultaat van een ``GET``
request zou zijn zodat je kan vermijden te grote data binnen te halen om zo bandwidth te besparen.

Vervang nu eens de ``headRequest()`` functie met de volgende code:

```
function headRequest() {
  fetch('examples/animals.json', {
    method: 'HEAD'
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .then(logResult)
    .catch(logError);
}
```
Als je nu je pagina refresht en klikt op head request krijgen we een foutmelding te zien.  
Dit komt omdat we de [Body.json()](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
aanroepen. Aangezien de body van een HEAD request leeg is proberen we dus van een lege string ``""`` een JSON object te maken.  
Een lege string is geen geldige JSON, vandaar de error.

Meer informatie over [headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers)

# Using POST requests
Fetch kan ook [POST requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) versturen.

Om een ``POST`` request te kunnen versturen moeten we eerst een echo server opstarten.  

Open een terminal/cmd in de ``fetch-api-lab/app/`` folder en typ het volgende:  
``node echo-servers/cors-server.js``

Deze simpele echo server gaat simpelweg elke request die ernaar verstuurd wordt terug echo'en.

Vervang de ``postRequest()`` functie met de volgende code:
```javascript
function postRequest() {
  fetch('http://localhost:5000/', {
    method: 'POST',
    body: 'name=pxl&message=hello'
  })
    .then(validateResponse)
    .then(readResponseAsText)
    .then(showText)
    .catch(logError);
}
```

Refresh de pagina en klik op **POST request**. Je zou nu de verstuurde request moeten kunnen zien op de pagina omdat deze
terug ge-echo'd wordt door de server.

####uitleg
Om een ``POST`` request te versturen via fetch moeten we net zoals bij een ``HEAD`` request de HTTP method meegeven en 
deze keer ook de body die we willen versturen. In dit geval een simpele string.  
De body bevat de data die we willen versturen.
