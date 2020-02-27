# Oefeningen

## DOM access methods

### Vraag 1
Ga naar [deze site](https://www.girldevelopit.com/) en open je devtools.
Door gebruik te maken van de de [DOM access methods](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) zoek de volgende elementen op deze pagina:
1. Every image on the page (as a collection)
2. The MailChimp form at the bottom
3. The three divs with stats (as a collection)
4. The image header with the headline, "DON'T BE SHY DEVELOP IT"
5. The navigation menu at the top
6. The GDI logo in the upper-left
7. The media logos (TED, lifehacker, etc.) at the bottom (as a collection)
8. All the red dots on the US map (as a collection)

``Oplossing:``
```javascript

```

### Vraag 2
Ga naar [deze site](https://ucsd.edu/) en open je devtools.
1. Vind het logo en sla het op in een variabele
    2. Verander de source van het logo z'n image naar een image die je zelf kiest
        [help](https://www.w3schools.com/jsref/met_element_setattribute.asp)
3. Vind de header en sla deze op in een variabele
    4. Verander de achtergrondkleur van de header
5. Vind de link die linkt naar het 'about' menu en sla het op in een variabele
    6. Verander de tekst van de link naar 'PXL was here!'
    7. Zorg ervoor dat de link linkt naar de PXL homepage

``Oplossing:``
```javascript
 
```

### Vraag 3
Start vanuit de 'dom3.html' HTML-pagina.

Itereer over de boekenlijst en voeg voor elk boek de nodige HTML-elementen toe om iets als onderstaand resultaat te bekomen.
De waardes tussen {} moeten natuurlijk uit je object komen.
Je hebt net zoveel listItems als dat er boeken in je array zitten.
```html
<ul>
    <li>
        {title} by {author} // as a textNode. If read: color=green, if not read: color=red
    </li>
</ul>
```
``Oplossing:``
```html

```

### Vraag 4
Start vanuit de 'dom4.html' HTML-pagina.

1. Verander op de body de font-family naar 'Arial, sans-serif'
2. Vul via javascript de 3 span-elementen in met jouw info
3. In de head mag je een style tage toevoegen waar je elementen met de class 'list-item' een rode tekstkleur geeft
4. Itereer over elke li en geef ze de classname 'list-item'
5. Creëer in js een nieuw img-element en zet zijn src attribuut naar een image van jezelf(of iets anders). Voeg dit element aan de pagina toe

``Oplossing:``
```html

```

# Events

### Vraag 1
Start vanuit de 'events1.html' HTML-pagina.

Voeg een event listener toe aan de knop zodat er een functie uitgevoerd wordt zodra er op wordt geklikt.
Haal in die functie de waardes uit de li-elementen en schrijf er een zin mee.
bv: "Jeffrey is dol op zwarte chocolade".

``oplossing:``
```javascript

```

### Vraag 2
Start vanuit de 'events2.html' HTML-pagina.

1. Voeg een event listener toe aan het form. Luister naar het 'submit-event'.
2. Schrijf een functie die de tekst in de input toevoegt aan de todoItems array en telkens het woord in een label-element
toevoegt aan het ul-element.
3. Zorg ervoor dat er in onze ul niet alleen een label verschijnt maar ook een checkbox voor elk label komt te staan.
4. Voeg een event listener toe die luisterd naar het klikken op de checkbox.
5. Zodra er op de checkbox geklikt wordt moet de checkbox aangevingt worden en moet de tekst van de todo-item doorstreept worden.

``oplossing:``
```javascript

```

### Vraag 3

Start vanuit de 'events3.html' HTML-pagina.

De rekenmachine mist nog de nodige javascript om functioneel te zijn.
Voeg de nodige event listeners en logica toe om de rekenmachine te doen werken.

``oplossing``
```javascript

```