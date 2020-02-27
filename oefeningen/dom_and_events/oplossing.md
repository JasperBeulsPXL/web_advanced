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
  img.src = 'http://www.berkeley.edu/images/uploads/logo-ucberkeley.png';
  let header = document.querySelector('div.container-fluid.header-wrap');
  header.style.backgroundColor = 'gold';
  let link = document.querySelectorAll(".main-nav li a")[0];
  link.textContent = 'About Cal';
  link.href = 'http://www.berkeley.edu/about';
```

### Vraag 3
Maak een webpagina met een h1 element aan met de tekst 'Mijn boekenlijst'.
Voeg een script tag toe op de plaats net voor het sluiten van de body.
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
Start met volgend stukje HTML
```html
<h1>Some info about me</h1>

<ul>
    <li>Nickname: <span id="nickname"></span>
    <li>Favorites:  <span id="favorites"></span>
    <li>Hometown: <span id="hometown"></span>
</ul>
<script>

</script>
```
1. Verander op de body de font-family naar 'Arial, sans-serif'
2. Vul via javascript de 3 span-elementen in met jouw info
3. In de head mag je een style tage toevoegen waar je elementen met de class 'list-item' een rode tekstkleur geeft
4. Itereer over elke li en geef ze de classname 'list-item'
5. Creëer in js een nieuw img-element en zet zijn src attribuut naar een image van jezelf(of iets anders). Voeg dit element aan de pagina toe

``Oplossing:``
```html
<!DOCTYPE html>
  <html>
   <head>
    <meta charset="utf-8"/>
    <title>About Me</title>
    <style>
      .list-item {
        color: red;
      }
    </style>
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

## Vraag 1
Start vanuit de 'events1.html' HTML-pagina.

Voeg een event listener toe aan de knop zodat er een functie uitgevoerd wordt zodra er op wordt geklikt.
Haal in die functie de waardes uit de li-elementen en schrijf er een zin mee.
bv: "Jeffrey is dol op zwarte chocolade".

``oplossing:``
```javascript
    window.onload = function () {
        const btnGenerate = document.getElementById("btn-generate");

        btnGenerate.addEventListener("click", () => {
            writeStory();
        });
    };

    function writeStory() {
        const storyDiv = document.getElementById("story");
        const person = document.getElementById("person").value;
        const adjective = document.getElementById("adjective").value;
        const noun = document.getElementById("noun").value;

        storyDiv.innerHTML = `${person} is dol op ${adjective} ${noun}!`;
    }
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
    let todoItems = [];

    window.onload = function () {
        const form = document.querySelector('.js-form');
        form.addEventListener('submit', event => {
            event.preventDefault(); // Normaal wanneer een form gesubmit wordt gaat de browser automatisch proberen het
            // formulier te submitten naar een server. Dit veroorzaakt een page refresh. Sinds we niet willen dat er een
            // refresh van de pagina gebeurd stoppen we dit default behavior met de event.preventDefault()
            const input = document.querySelector('.js-todo-input');

            const text = input.value.trim(); // Haal eventuele whitespaces voor en na onze string weg
            if (text !== '') {
                addTodo(text);
                input.value = '';
                input.focus();
            }
        });

        const list = document.querySelector('.js-todo-list');
        list.addEventListener('click', event => {
            if (event.target.classList.contains('js-tick')) {
                const itemKey = event.target.parentElement.dataset.key;
                toggleDone(itemKey);
            }
        });
    };

    function addTodo(text) {
        const todo = {
            text,
            checked: false,
            id: Date.now(), // We willen een uniek id toekennen. Dit had bv ook een randomly-generated nummer kunnen zijn
        };

        todoItems.push(todo);
        const list = document.querySelector('.js-todo-list');
        list.insertAdjacentHTML('beforeend',`<li class="todo-item" data-key="${todo.id}"><input id="${todo.id}" type="checkbox"/><label for="${todo.id}" class="tick js-tick"></label><span>${todo.text}</span><button class="delete-todo js-delete-todo"></button></li>`);
        // Uitleg insertAdjacentHTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    }

    function toggleDone(key) {
        const index = todoItems.findIndex(item => item.id === Number(key));
        todoItems[index].checked = !todoItems[index].checked;

        const item = document.querySelector(`[data-key='${key}']`);
        if (todoItems[index].checked) {
            item.classList.add('done');
        } else {
            item.classList.remove('done');
        }
    }
```

### Vraag 3

Start vanuit de 'events3.html' HTML-pagina.

De rekenmachine mist nog de nodige javascript om functioneel te zijn.
Voeg de nodige event listeners en logica toe om de rekenmachine te doen werken.

``oplossing``
```javascript
/*
TODO:
    Limit number input
    Disallow . from being entered multiple times
    Clean up structure
*/

(function() {
  "use strict";

  // Shortcut to get elements
  var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

  // Variables
  var viewer = el("#viewer"), // Calculator screen where result is displayed
    equals = el("#equals"), // Equal button
    nums = el(".num"), // List of numbers
    ops = el(".ops"), // List of operators
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operator; // Batman

  // When: Number is clicked. Get the current number selected
  var setNum = function() {
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = theNum; // Display current number

  };

  // When: Operator is clicked. Pass number to oldNum and save operator
  var moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); // Reset result in attr
  };

  // When: Equals is clicked. Calculate result
  var displayNum = function() {

    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

        // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = theNum;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "You broke it!";
      } else { // If result is infinity, set off by dividing by zero
        resultNum = "Look at what you've done";
        el('#calculator').classList.add("broken"); // Break calculator
        el('#reset').classList.add("show"); // And show reset button
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    theNum = resultNum;

  };

  // When: Clear button is pressed. Clear everything
  var clearAll = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

  /* The click events */

  // Add click event to numbers
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  // Add click event to operators
  for (var i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  // Add click event to equal sign
  equals.onclick = displayNum;

  // Add click event to clear button
  el("#clear").onclick = clearAll;

  // Add click event to reset button
  el("#reset").onclick = function() {
    window.location = window.location;
  };

}());
```