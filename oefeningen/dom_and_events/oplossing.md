# Oplossing Oefeningen
 De oplossingen die hier geschreven staan zijn vaak slechts 1 van meerdere correcte oplossingen om een specifiek
 probleem op te lossen. Probeer er steeds naar te strijven om je oplossing zo te schrijven/bouwen dat die zo min-mogelijk 
 afhankelijk is van je dom-structuur at a certain point in time.
 
 ```
 Wat ik daarmee bedoel is: selecteer een element eerder op basis van bv zijn id of class ipv de parent te zoeken en er het eerste child-element uit te halen. (als het eerste 
 element overeen zou komen met het element dat we proberen te selecteren). Als je gekozen had om het id te gebruiken en 
 iemand voegt op een latere datum een element toe aan de parent, voor ons item dat we eerder zochten, dan zou onze 
 javascript niet breken want onze selector (getElementById) geeft nog altijd hetzelfde resultaat als result. Hadden we 
 echter voor de 'eerste element uit de parent'-aanpak gekozen dan zou onze selector nu niet meer naar ons initieel 
 bedoelde element verwijzen maar naar het nieuw toegevoegde item(omdat die nu op locatie [0] in de Nodelist/HTMLCollection 
 staat. Vervolgens gaat onze javascript geüpdate moeten worden om het oude gewenste gedrag te kunnen behouden. Als we 
 een id hadden gebruikt was er geen probleem geweest.
```

``Is bovenstaade uitleg niet duidelijk of verwarrend? spreek me in de les aub even aan en ik leg uit wat ik precies bedoel. Dan kunnen we ook samen kijken naar hoe het eventueel duidelijker uitgeschreven kan worden!``

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
  document.getElementsByTagName("img");
  document.getElementById("mc_embed_signup");
  document.getElementsByClassName("stats");
  document.getElementsByClassName("opener")[0];
  document.querySelector(".navigation");
  document.querySelector(".logo img");
  document.querySelectorAll(".press-logos img");
  document.querySelectorAll("circle");
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
  let logo = document.querySelector(".navbar-brand.visible-xs img");
  logo.src = '../assets/cute_kitty.jpg';
  let header = document.querySelector('div.container-fluid.header-wrap');
  header.style.backgroundColor = 'gold';
  letlink = document.querySelectorAll(".main-nav li a")[0];
  link.textContent = 'PXL was here!';
  link.href = 'http://www.pxl.be';
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
```javascript
const books = [
      {
        title: 'The theory of everything',
        author: 'Stephen Hawking',
        alreadyRead: true
      }, {
        title: '12 rules for life',
        author: 'Jordan Peterson',
        alreadyRead: false
      }
    ];
```
Itereer nu over deze boekenlijst en voeg voor elk boek de nodige HTML-elementen toe om iets als onderstaand resultaat te bekomen.
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
<!DOCTYPE html>
    <html>
     <head>
      <meta charset="utf-8"/>
      <title>Book List</title>
     </head>
    <body>

    <h1>Mijn boekenlijst</h1>
    <script>
    const books = [
           {
             title: 'The theory of everything',
             author: 'Stephen Hawking',
             alreadyRead: true
           }, {
             title: '12 rules for life',
             author: 'Jordan Peterson',
             alreadyRead: false
           }
         ];

    let bookList = document.createElement('ul');
    for (let i = 0; i < books.length; i++) {
      let bookItem = document.createElement('li');
      let bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
      bookItem.appendChild(bookDescription);
      if (books[i].alreadyRead) {
        bookItem.style.color = 'green';
      }else{
        bookItem.style.color = 'red';
      }
      bookList.appendChild(bookItem);
    }
    document.body.appendChild(bookList);
    </script>

    </body>
    </html>
```

### Vraag 4
Start vanuit de 'dom4.html' HTML-pagina.

1. Verander op de body de font-family naar 'Arial, sans-serif'
2. Vul via javascript de 3 span-elementen in met jouw info
3. Voeg via javascript een style tag toe in de head waar je elementen met de class 'list-item' een rode tekstkleur geeft
4. Itereer over elke li en geef ze de classname 'list-item'
5. Creëer in js een nieuw img-element en zet zijn src attribuut naar een image van jezelf(of iets anders). Voeg dit element aan de pagina toe

``Oplossing:``
```html
<!DOCTYPE html>
  <html>
   <head>
    <meta charset="utf-8"/>
    <title>About Me</title>
  </head>
  <body>
    <h1>About Me</h1>

    <ul>
      <li>Nickname: <span id="nickname"></span>
      <li>Favorites:  <span id="favorites"></span>
      <li>Hometown: <span id="hometown"></span>
     </ul>

    <script>
     document.body.style.fontFamily = 'Arial, sans-serif';
     document.getElementById('nickname').textContent = 'Princess Bubblegum';
     document.getElementById('favorites').textContent = 'science, music, my candy subjects';
     document.getElementById('hometown').textContent = 'Candy Kingdom';
     
     let css = 'h1 { background: red; }',
         head = document.head || document.getElementsByTagName('head')[0],
         style = document.createElement('style');
         
         head.appendChild(style);
         
         style.type = 'text/css';

     let items = document.getElementsByTagName('li');
     for (let i = 0; i < items.length; i++) {
        items[i].className = 'list-item';
     }

      let myPic = document.createElement('img');
      myPic.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/100px-Princess_Bubblegum.png';
      document.body.appendChild(myPic);
    </script>
  </body>
  </html>
```

# Events

``
Chapter and/or exercises not yet completed in all classes I teach. Solutions will be posted soon.
If you've completed these in advance and would like feedback before we reach this chapter in class, send me an email with your solution and i'll try to reply as soon as I find the time!
``
